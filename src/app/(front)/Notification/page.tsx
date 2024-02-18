import Link from 'next/link';

const Notification = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-5 text">
        【PrimeWonder】会員規約の改訂について
      </h1>
      <div className="flex-1 border-t-4 border-gray-400 pt-4 pr-4 ml-4 mr-4" />
      <div className="flex p-10">
        <span className="text-sm font-bold leading-10">
          いつもプレミアムバンダイをご利用いただき、ありがとうございます。
          <br />
          このたび、プレミアムバンダイの会員規約の内容を一部改訂いたします。
          <br />
          プレミアムバンダイ会員規約
          <Link className="underline text-orange-500" href="/">
            <p>https://www.primeWonderful.com/</p>
          </Link>
          <br />
          【改訂日】　2024年4月1日(月) 【改訂後の内容】
          <br />
          ● 第24条 個人情報
          <br />
          ・3.(1)運営会社及び提携会社が日本国外にある場合の外国の名称等を追加及び変更
          <br />
          ※X Corp.[アメリカ合衆国] <br />
          ※ByteDance, Ltd[シンガポール] <br />
          ※リンクシェア・ジャパン株式会社[アメリカ合衆国] <br />
          2024年4月1日(月)以降、同意ボタンの押下によって改訂後の規約を適用いたします。{' '}
          <br />
          引き続きご愛顧賜りますよう、何とぞよろしくお願い申しあげます。
        </span>
      </div>
    </div>
  );
};

export default Notification;
