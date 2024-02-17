import { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
  title: 'Profile | PrimeWonder',
};

export default async function Profile() {
  return <Form />;
}
