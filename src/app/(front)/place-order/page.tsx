import { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Place Order | PrimeWonder',
};

export default async function PlaceOrderPage() {
  return <Form />;
}
