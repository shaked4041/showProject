import { connectToMongo } from "@/server/connectToMongo";
import { createNewOrderService } from "@/server/orders/order.service";


export default async function handler(req, res){
    if(req.method === 'POST'){
        try {
            await connectToMongo();

            // const orderData = req.body

            // const newOrder = await createNewOrderService(orderData)

            res.status(200).json({message: 'Order submitted successfully', newOrder})
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ message: 'Internal Server Error' });        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
}