The error you have (Duplicate entry 'lodddrem@ipsum.com' for key 'email') is given by a database. Database returns you only ONE (first) error, it does not return you what you want.

Solution is not to use database errors, but use validation library instead (like TODO:class-validator), create a separate validation logic and provide a good messages.


export default connect(mapStateToProps, {getEvent, deleteEvent})(withStyles(styles)(EventDetails));

    // const tickets = await Ticket.findAndCount({ select: ['price'], where: "event_id = 13"});
    //const tickets = await Ticket.findAndCount();
    //return { tickets: tickets[1] };

        // 1. The average price of a ticket
    const avgPrice = event.tickets.reduce((acc, cur) => {
      console.log(acc)
      return acc + cur.price
    }, 0) / event.tickets.length

    // 2. How many tickets does a user have
    // Find tickets per user
    const tickets = await Ticket.find({where: {user: 3 }})
    const hello = await event.tickets.map(ticket => Ticket.find({where: {user: ticket.user.id}}))
    console.log(hello)
    //console.log("All the TIckets:" ,tickets)
    //await Ticket.findAndCount({ select: ['price'], where: "event_id = 13" });

    //event.tickets.forEach(ticket => ticket['risk'] ="aanwezig")

        // if (!this.props.authenticated) return <Redirect to="/logins" />;

            // { select: ['name'] }
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
    // return getRepository(Event).createQueryBuilder('event').where('event.id = :id', { id: eventId})
    // .leftJoinAndSelect('event.tickets', 'ticket').leftJoinAndSelect('ticket.user', 'user').getOne()