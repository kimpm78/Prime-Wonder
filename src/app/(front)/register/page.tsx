import { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Register | PrimeWonder',
};

export default async function Register() {
  return <Form />;
}
