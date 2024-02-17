// 'use client';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import ProductImage from '@/components/atoms/ProductImage';
import { ProductProps } from '@/utils/types';
import { useState } from 'react';

const DetailsIntroductionPage = () => {
  const [product, setProduct] = useState<ProductProps | null>(null);

  if (!product) {
    return <div>Loading...</div>; // 상품 데이터가 없을 때 로딩 화면을 표시합니다.
  }

  return (
    <form className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold p-5 text-gray-600">{product.name}</h1>
      <ProductImage key={product._id} src={product.image} alt={product.name} />
      <p>販売価格：{product.price}円（税込）</p>
      <div className="">
        購入数：
        <Input className="w-[30px] h-[40px]" type="number" />
      </div>
      <div>商品詳細</div>
      <p>
        G.E.M.シリーズが2024年で誕生15周年！
        記念して「はたけカカシ」の忍界大戦ver.が再登場。
        物語の最終決戦「忍界大戦」で忍連合戦闘大連隊第3部隊の隊長として戦う姿を立体化。
        かつての戦いで倒した敵の大きな武器「断刀“首斬り包丁”」を持ち、
        戦いの中で鳥肌が立つほど怒りを見せたシーンを再現。
        差し替えパーツで万華鏡写輪眼ver.にもなります。
        ------------------------------------------------------------------------------------------------
        【セット内容】 ・彩色済み完成品フィギュア…1 ・差し替え顔パーツ…1
        ・専用台座…1 【商品素材】 PVC、ABS 【対象年齢】 15才以上 【商品サイズ】
        全高約150mm 【ご注文受付数】 お一人様3個まで
        ※ご注文1回につき、1個購入可。3個購入時は3回分の手続きが必要。
        【商品の取り扱い】
        プレミアムバンダイ、ジャンプキャラクターズストア、あみあみ、アニメイト
        限定 ※その他一般小売店での販売はございません。 【決済方法】
        クレジットカード(出荷時決済)、Amazon Pay、楽天ペイ、
        PayPay、プレバンPay、あと払い（ペイディ）のみのお取り扱いとなります。
        【作品名】 NARUTO-ナルト- 疾風伝 【発売元】 株式会社メガハウス
        ------------------------------------------------------------------------------------------------
        ※写真は開発中のものです。
        デザイン・仕様は変更になる場合がございますのであらかじめご了承下さいませ。
        ※本商品は、他商品と同時にご購入いただくことはできません。
        ※ご注文後のキャンセルは、一切お受けできません。
        ※生産上の都合により、お届け日が変更となることがございます。あらかじめご了承下さい。
        ※本商品は準備数に限りがございます。準備数に達した場合、早期にご注文の受付を終了させて
        いただくことがございます。
        ※ご要望多数の場合、お届け時期を変更し、再度受注を行うことがございます。
        ※本商品は海外で販売する場合がございます。
        -----------------------------------------------------------------------
      </p>
      <div className="p-5">
        <Button>カートに入れる</Button>
      </div>
      <div className="p-5">
        <Button>注文する</Button>
      </div>
    </form>
  );
};

export default DetailsIntroductionPage;
