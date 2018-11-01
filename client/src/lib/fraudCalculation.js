export default function calculateRisk(props, userId, ticketPrice, createdAt, comments) {
  let risk = 0;

  const numberOfTickets = props.allTickets.filter(
    ticket => ticket.user.id === userId
  );
  if (numberOfTickets.length === 1) risk += 10;

  const avgPriceOfTickets =
    props.singleEvent.tickets.reduce((a, b) => a + b.price, 0) /
    props.singleEvent.tickets.length;

  if (ticketPrice < avgPriceOfTickets) {
    const percentage = (1 - ticketPrice / avgPriceOfTickets) * 100;
    risk += percentage;
  } else {
    if (ticketPrice / avgPriceOfTickets > 1.1) risk -= 10;
    else risk -= (1.1 - ticketPrice / avgPriceOfTickets) * 100;
  }

  const hour = Number(createdAt.split('T')[1].split(':')[0]);

  if (hour >= 9 && hour <= 17) risk -= 10;
  else risk += 10;

  if (comments.length > 3) risk += 5;

  if (risk < 5) risk = 5;
  if (risk > 95) risk = 95;

  return Math.round(risk);
}
