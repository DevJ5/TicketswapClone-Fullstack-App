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

@JsonController()
export default class EventController {
  @Get('/events')
  async getAllEvents(@CurrentUser() user) {
    const { password, ...rest } = user;
    console.log(rest); // Still to remove
    const events = await Event.find(); // { select: ['name'] }
    return { events };
  }

  @Get('/events/:id')
  async getEvent(@Param('id') id: number) {
    const event = await Event.findOne(id);
    return event;
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
    if(!event) throw new BadRequestError('Event does not exist')
    
    return Event.remove(event)
  }
}
