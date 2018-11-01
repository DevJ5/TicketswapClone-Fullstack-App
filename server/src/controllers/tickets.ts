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
import Comment from '../entities/Comment';
import calculateRisk from '../lib/calculateRisk'
import User from '../entities/User';

@JsonController()
export default class TicketController {
  @Get('/events/:eventId/tickets')
  async getAllTickets(@Param('eventId') eventId: number) {
    const event = await Event.findOne(eventId, { relations: ['tickets', 'tickets.user'] });
    if(!event) throw new BadRequestError('Event does not exist')
    
    return event 
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

    const avgPrice = await getRepository(Ticket)
    .createQueryBuilder('ticket')
    .select('AVG(price) AS average')
    .where('event_id = :id', { id: eventId })
    .getRawOne();
    
    const numberOfTicketsObj = await getRepository(Ticket)
    .createQueryBuilder('ticket')
    .select('COUNT(user_id) AS count')
    .where('user_id = :id', { id: ticket.user.id })
    .getRawOne();
    
    const hourOfCreation = new Date(Date.parse(ticket.createdAt)).getHours();

    const numberOfCommentsObj = await getRepository(Comment)
      .createQueryBuilder('comment')
      .select('COUNT(ticket_id) AS count')
      .where('ticket_id = :id', { id: ticketId })
      .getRawOne();

    return calculateRisk(
      ticket.price,
      avgPrice.average,
      numberOfTicketsObj.count,
      hourOfCreation,
      numberOfCommentsObj.count
    );
  }

  @Authorized()
  @Post('/events/:eventId/tickets')
  @HttpCode(201)
  async addTicket(
    @Param('eventId') eventId: number,
    @CurrentUser() user: User,
    @Body() data: Ticket
  ) {
    console.log(user);
    const { price, description, pictureUrl } = data;
    const event = await Event.findOne(eventId);
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
