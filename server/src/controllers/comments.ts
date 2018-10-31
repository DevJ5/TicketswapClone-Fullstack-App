import {
  Get,
  HttpCode,
  Body,
  Post,
  Authorized,
  JsonController,
  Param,
  CurrentUser,
  Params,
  BadRequestError,
  Delete
} from 'routing-controllers';
import Event from '../entities/Event';
import Comment from '../entities/Comment';
import Ticket from '../entities/Ticket';

@JsonController()
export default class CommentController {
  @Get('/events/:eventId/tickets/:ticketId/comments')
  async getAllComments() {
    const comments = await Comment.find();
    return { comments };
  }

  @Get('/events/:eventId/tickets/:ticketId/comments/:commentId')
  async getComment(@Param('commentId') commentId) {
    const comment = await Comment.findOne(commentId);
    return comment;
  }

  @Authorized('ADMIN')
  @Post('/events/:eventId/tickets/:ticketId')
  @HttpCode(201)
  async addComment(@CurrentUser() user, @Params() routeParams, @Body() data) {
    const { eventId, ticketId } = routeParams;
    const { title, content } = data;
    const event = await Event.findOne(eventId);
    if (!event) throw new BadRequestError('Event does not exist');
    const ticket = await Ticket.findOne(ticketId);
    if (!ticket) throw new BadRequestError('Ticket does not exist');

    const comment = await Comment.create({
      title,
      content,
      ticket,
      event,
      user
    }).save();

    return comment;
  }

  @Authorized('ADMIN')
  @Delete('/events/:eventId/tickets/:ticketId/comments/:commentId')
  async deleteComment(@Param('commentId') commentId) {
    const comment = await Comment.findOne(commentId)
    if(!comment) throw new BadRequestError('Comment does not exist')
    return Comment.remove(comment)
  }
}
