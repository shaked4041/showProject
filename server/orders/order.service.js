import { OrderModel } from "./order.model";
import { createOrder } from './order.controller'
const { UserModel} = require('../users/user.model')

export const getAllOrders = () => {
  return OrderModel.find()
}

export async function getFullOrderById(orderId) {
  const order = await OrderModel.findById(orderId).populate('showId').exec();
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
}


export const getOrderById = (id) => {
  return OrderModel.findById(id)
}


export const createNewOrderService = (order) => createOrder(order)