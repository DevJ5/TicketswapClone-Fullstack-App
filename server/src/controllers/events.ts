import {
  Get,
  HttpCode,
  Body,
  Post,
  Authorized,
  JsonController,
  Param,
  CurrentUser,
  Put,
  BadRequestError,
  Delete
} from 'routing-controllers';
import Event from '../entities/Event';
import { getConnection } from 'typeorm';
import { getManager, getRepository } from "typeorm";


@JsonController()
export default class EventController {
  @Get('/events')
  async getAllEvents(@CurrentUser() user) {
    //const { password, ...rest } = user;
    //console.log(rest); // Still to remove
    const events = await Event.find(); // { select: ['name'] }
    return events;
  }

  @Get('/events/:eventId')
  async getEvent(@Param('eventId') eventId: number) {
    // const events = await connection
    //   .getRepository(Event)
    //   .createQueryBuilder("event")
    //   .leftJoinAndSelect("event.tickets", "ticket")
    //   .getMany();
   // const event = await Event.findOne(eventId, { relations: ['tickets'] });
   // return getConnection().manager.find(Event)
    //return getManager().find(Event);
   // return getRepository(Event).find()
    // return events;
    // return getRepository(Event).createQueryBuilder('event').leftJoinAndSelect('event.tickets', 'ticket').getMany()
    return getRepository(Event).createQueryBuilder('event').where('event.id = :id', { id: eventId})
    .leftJoinAndSelect('event.tickets', 'ticket').leftJoinAndSelect('ticket.user', 'user').getOne()
  }

  @Authorized('ADMIN')
  @Post('/events')
  @HttpCode(201)
  async addEvent(@CurrentUser() user, @Body() data: Event) {
    const { name, description, pictureUrl, startDate, endDate } = data;
    const entity = await Event.create({
      name,
      description,
      pictureUrl,
      startDate,
      endDate,
      user
    });
    const event = await entity.save();
    return event;
  }

  @Authorized('ADMIN')
  @Put('/events/:id')
  async updateEvent(@Param('id') id: number, @Body() update: Partial<Event>) {
    const event = await Event.findOne(id);
    if (!event) throw new BadRequestError('Event does not exist');

    return Event.merge(event, update).save();
  }

  @Delete('/events/:id')
  async deleteEvent(@Param('id') id: number) {
    const event = await Event.findOne(id);
    if (!event) throw new BadRequestError('Event does not exist');

    return Event.remove(event);
  }
}
