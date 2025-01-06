import { getFullOrderById } from '@/server/orders/order.service';
import moment from 'moment';
import CompleteOrderClient from '@/app/components/CompleteOrderClient';
import { connectToMongo } from '@/server/connectToMongo';

export default async function page({ params }) {
  await connectToMongo();
  const orderId = params.orderId;
  const order = await getFullOrderById(orderId);

  // Convert ObjectId and Buffer to plain values
  const plainOrder = {
    _id: order._id.toString(),
    showId: {
      _id: order.showId._id.toString(),
      title: order.showId.title,
      artist: order.showId.artist.toString(), // Convert Buffer to string if needed
      location: order.showId.location,
      picture_of_artist: order.showId.picture_of_artist.toString(), // Convert Buffer to string if needed
      price_per_ticket: order.showId.price_per_ticket,
    },
    finalPrice: order.finalPrice,
    amountOfTickets: order.amountOfTickets,
  };

  const partDate = moment(order.showId.date).format('MMM D, YYYY');

  return (
    <CompleteOrderClient
      order={plainOrder}
      pic={order.showId.picture_of_artist}
      partDate={partDate}
      price={order.showId.price_per_ticket}
    />
  );
}
