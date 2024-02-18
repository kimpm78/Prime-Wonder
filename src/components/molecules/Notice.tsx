import Link from 'next/link';

const Notice = () => {
  return (
    <div className="text-sm bg-slate-200 text-center p-1 text-black">
      <Link className="hover:font-bold cursor-pointer" href="/Notification">
        【PrimeWonder】会員規約の改訂について
      </Link>
    </div>
  );
};

export default Notice;
