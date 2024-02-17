import { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Payment Method | PrimeWonder',
};

export default async function PaymentPage() {
  return <Form />;
}
