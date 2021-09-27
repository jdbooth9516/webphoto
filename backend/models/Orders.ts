import mongoose, {Schema} from 'mongoose';

export interface IOrders {
  customerName: string;
  email: string;
  phone: string;
  dancer: string;
  photos: [];
  totalPrice: number;

}

const OrderSchema = new  Schema<IOrders> ({
  customerName: { type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  dancer: {type: String, required: true},
  photos: {type: Array},
  totalPrice: {type: Number}
})

const Order = mongoose.model<IOrders>('orders', OrderSchema);

export default Order;
