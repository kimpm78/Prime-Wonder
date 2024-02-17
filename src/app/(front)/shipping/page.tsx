import { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Shipping Address | PrimeWonder',
};

export default async function Register() {
  return <Form />;
}
