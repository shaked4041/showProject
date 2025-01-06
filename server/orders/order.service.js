import { OrderModel } from "./order.model";
import { createOrder } from './order.controller'
const { UserModel} = require('../users/user.model')

export const getAllOrders = () => {
  return OrderModel.find()
}
// export const getFullOrderById = async (orderId) => {
//   return await OrderModel.findById(orderId)
//       .populate('userId')  // Assuming 'userId' references the 'Users' model correctly
//       .populate('showId')  // Assuming 'showId' references the 'Shows' model correctly
//       .exec();
// };

export async function getFullOrderById(orderId) {
  // Ensure there is no recursion here
  const order = await OrderModel.findById(orderId).populate('showId').exec();
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
}


export const getOrderById = (id) => {
  return OrderModel.findById(id)
}

// export const getOrdersByCategory = async (category) => {
//   return await OrderModel.find({ category: category })
// }

// export const getOrdersByArtist = async (artist) => {
//   return await OrderModel.find({ artist: artist })
//   // .populate('artist')
// }


export const createNewOrderService = (order) => createOrder(order)