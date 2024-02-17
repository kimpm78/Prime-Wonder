import { auth } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import OrderModel, { OrderItem } from '@/lib/models/OrderModel';
import ProductModel from '@/lib/models/ProductMode';
import { round2 } from '@/lib/utils';

const calcPrices = (orderItems: OrderItem[]) => {
  const itemsPrice = round2(
    // Calculate the items price
    orderItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  );
  // Calculate the shipping price
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10);
  // Calculate the tax price
  const taxPrice = round2(Number((0.15 * itemsPrice).toFixed(2)));
  // Calculate the total price
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
};

export const POST = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json(
      { message: 'Not authorized' },
      {
        status: 401,
      },
    );
  }
  const { user } = req.auth;
  try {
    const payload = await req.json(); //내부에서 요청에 액세스 할 수 있음.
    await dbConnect();
    const dbProductPrices = await ProductModel.find(
      {
        _id: { $in: payload.items.map((x: { _id: string }) => x._id) },
      },
      'price',
    );
    const dbOrderItems = payload.items.map((x: { _id: string }) => ({
      ...x,
      product: x._id,
      price: dbProductPrices.find((x) => x._id === x._id).price,
      _id: undefined,
    }));

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
      calcPrices(dbOrderItems);

    const newOrder = new OrderModel({
      items: dbOrderItems,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingAddress: payload.shippingAddress,
      paymentMethod: payload.paymentMethod,
      user: user._id,
    });
    const createOrder = await newOrder.save();
    return Response.json(
      { message: 'Order has been created', order: createOrder },
      {
        status: 201,
      },
    );
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
});
