import { OrderModel } from "./order.model";

export const createOrder = (order) => OrderModel.create(order)