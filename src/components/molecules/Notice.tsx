import Link from 'next/link';

const Notice = () => {
  return (
    <div className="text-sm bg-slate-200 text-center p-1">
      <Link className="hover:font-bold cursor-pointer" href="/Notification">
        【PrimeKim】会員規約の改訂について
      </Link>
    </div>
  );
};

export default Notice;
