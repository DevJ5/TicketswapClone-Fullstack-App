export default function calculateRisk(
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
  return Math.round(risk);
}
