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

@JsonController()
export default class TicketController {
  @Get('/events/:id/tickets')
  async getAllTickets() {
    // const tickets = await Ticket.findAndCount({ select: ['price'], where: "event_id = 13"});
    const tickets = await Ticket.findAndCount();
    //return { tickets: tickets[1] };
    return {tickets}
  }

  @Get('/events/:eventId/tickets/:ticketId')
  async getTicket(@Params() routeParams) {
    const { ticketId } = routeParams;
    return Ticket.findOne(ticketId, { relations: ['event'] });
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

    return Ticket.remove(ticket)
  }
}
