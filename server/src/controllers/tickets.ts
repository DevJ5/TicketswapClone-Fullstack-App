import {
  Get,
  HttpCode,
  Body,
  Post,
  Authorized,
  JsonController,
  Param,
  CurrentUser,
  BadRequestError,
  Params,
  Put,
  Delete
} from 'routing-controllers';
import Event from '../entities/Event';
import Ticket from '../entities/Ticket';
import { getRepository } from 'typeorm';
import User from '../entities/User';
import Comment from '../entities/Comment';

@JsonController()
export default class TicketController {
  @Get('/events/:eventId/tickets')
  async getAllTickets(@Param('eventId') eventId: number) {
    // const tickets = await Ticket.findAndCount({ select: ['price'], where: "event_id = 13"});
    //const tickets = await Ticket.findAndCount();
    //return { tickets: tickets[1] };
    const event = await Event.findOne(eventId, { relations: ['tickets'] });
    return event;
  }

  @Get('/events/:eventId/tickets/:ticketId')
  async getTicket(@Params() routeParams) {
    const { ticketId } = routeParams;
    const ticket = Ticket.findOne(ticketId, {
      relations: ['comments', 'comments.user']
    });
    return ticket;
  }

  @Get('/events/:eventId/tickets/:ticketId/risk')
  async getRiskPerTicket(@Params() routeParams) {
    const { eventId, ticketId } = routeParams;
    const ticket = await Ticket.findOne(ticketId, { relations: ['user'] });
    if (!ticket) throw new BadRequestError('Ticket does not exist');

    console.log(Date.parse(ticket.createdAt));
    console.log('Hour:', new Date(Date.parse(ticket.createdAt)).getHours());
    const hourOfCreation = new Date(Date.parse(ticket.createdAt)).getHours();

    console.log(new Date(ticket.createdAt));
    const avgPrice = await getRepository(Ticket)
      .createQueryBuilder('ticket')
      .select('AVG(price) AS average')
      .where('event_id = :id', { id: eventId })
      .getRawOne();

    console.log(avgPrice);

    const numberOfTicketsObj = await getRepository(Ticket)
      .createQueryBuilder('ticket')
      .select('COUNT(user_id) AS count')
      .where('user_id = :id', { id: ticket.user.id })
      .getRawOne();

    const numberOfCommentsObj = await getRepository(Comment)
      .createQueryBuilder('comment')
      .select('COUNT(ticket_id) AS count')
      .where('ticket_id = :id', { id: ticketId })
      .getRawOne();

    console.log(numberOfCommentsObj);

    function calculateRisk(
      ticketPrice: number,
      avgPrice: number,
      numberOfTickets: number,
      hourOfCreation: number,
      numberOfComments: number
    ): number {
      let risk = 0;
      if (numberOfTickets === 1) risk += 10;

      if (ticketPrice < avgPrice) risk += (1 - ticketPrice / avgPrice) * 100;

      if (ticketPrice > avgPrice) {
        if (ticketPrice / avgPrice > 1.1) {
          risk -= 10;
        } else {
          risk -= (1.1 - ticketPrice / avgPrice) * 100;
        }
      }
      if (hourOfCreation >= 9 && hourOfCreation <= 17) risk -= 10;
      else risk += 10;

      if (numberOfComments > 3) risk += 5;

      if (risk < 5) risk = 5;
      if (risk > 95) risk = 95;
      return risk;
    }

    console.log(numberOfTicketsObj.count);
    console.log(
      ticket.price,
      avgPrice.average,
      numberOfTicketsObj.count,
      hourOfCreation,
      numberOfCommentsObj.count
    );

    return calculateRisk(
      ticket.price,
      avgPrice.average,
      numberOfTicketsObj.count,
      hourOfCreation,
      numberOfCommentsObj.count
    );
  }

  @Authorized()
  @Post('/events/:id/tickets')
  @HttpCode(201)
  async addTicket(
    @Param('id') id: number,
    @CurrentUser() user,
    @Body() data: Ticket
  ) {
    const { price, description, pictureUrl } = data;
    const event = await Event.findOne(id);
    if (!event) throw new BadRequestError('Event does not exist');

    const ticket = await Ticket.create({
      price,
      description,
      pictureUrl,
      user,
      event
    }).save();

    return ticket;
  }

  @Authorized('ADMIN')
  @Put('/events/:eventId/tickets/:ticketId')
  async updateTicket(
    @Param('ticketId') ticketId,
    @Body() update: Partial<Ticket>
  ) {
    const ticket = await Ticket.findOne(ticketId);
    if (!ticket) throw new BadRequestError('Ticket does not exist');

    return Ticket.merge(ticket, update).save();
  }

  @Authorized('ADMIN')
  @Delete('/events/:eventId/tickets/:ticketId')
  async deleteTicket(@Param('ticketId') ticketId) {
    const ticket = await Ticket.findOne(ticketId);
    if (!ticket) throw new BadRequestError('Ticket does not exist');

    return Ticket.remove(ticket);
  }
}
