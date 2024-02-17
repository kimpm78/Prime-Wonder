import Input from '@/components/atoms/Input';

const DetailsProductPage = () => {
  return (
    <form className="flex flex-col">
      <h1 className="text-3xl font-bold p-5 text-gray-700">商品詳細</h1>
      <div className="border-t border-gray-400 pt-4 pr-4 ml-4 mr-4" />
      <div className="text-2xl font-bold p-5">G.E.M.シリーズ</div>
      <div className="p-5">
        <img src="https://via.placeholder.com/500x500" alt="mock500" />
        <div className="text-right">
          <p>販売価格：20,000円（税込）</p>
          <div className="items-center text-right text-sm">
            購入数：
            <Input
              className="w-[80px] h-[35px]"
              type="number"
              placeholder="個数"
            />
          </div>
        </div>
        <div className="text-center bg-gray-300 w-full my-5">
          <h3>商品詳細</h3>
        </div>
        <div className="p-6">
          <p className="text-sm justify-center text- w-3/4">
            G.E.M.シリーズが2024年で誕生15周年！
            記念して「はたけカカシ」の忍界大戦ver.が再登場。
            物語の最終決戦「忍界大戦」で忍連合戦闘大連隊第3部隊の隊長として戦う姿を立体化。
            かつての戦いで倒した敵の大きな武器「断刀“首斬り包丁”」を持ち、
            戦いの中で鳥肌が立つほど怒りを見せたシーンを再現。
            差し替えパーツで万華鏡写輪眼ver.にもなります。
            ---------------------------------------------------------------------------------------
            【セット内容】
            <br /> ・彩色済み完成品フィギュア…1 ・差し替え顔パーツ…1
            ・専用台座…1 【商品素材】 PVC、ABS 【対象年齢】 15才以上
            【商品サイズ】
            <br /> 全高約150mm 【ご注文受付数】 お一人様3個まで
            ※ご注文1回につき、1個購入可。3個購入時は3回分の手続きが必要。
            <br />
            【商品の取り扱い】
            <br />
            プレミアムバンダイ、ジャンプキャラクターズストア、あみあみ、アニメイト
            限定 ※その他一般小売店での販売はございません。 【決済方法】
            クレジットカード(出荷時決済)、Amazon Pay、楽天ペイ、
            PayPay、プレバンPay、あと払い（ペイディ）のみのお取り扱いとなります。
            <br />
            【作品名】
            <br /> NARUTO-ナルト- 疾風伝
            <br /> 【発売元】 株式会社メガハウス
            <br />
            ----------------------------------------------------------------------------------------
            <br />
            ※写真は開発中のものです。
            <br />
            デザイン・仕様は変更になる場合がございますのであらかじめご了承下さいませ。
            <br />
            ※本商品は、他商品と同時にご購入いただくことはできません。
            <br />
            ※ご注文後のキャンセルは、一切お受けできません。
            <br />
            ※生産上の都合により、お届け日が変更となることがございます。あらかじめご了承下さい。
            <br />
            ※本商品は準備数に限りがございます。準備数に達した場合、早期にご注文の受付を終了させていただくことがございます。
            <br />
            ※ご要望多数の場合、お届け時期を変更し、再度受注を行うことがございます。
            <br />
            ※本商品は海外で販売する場合がございます。
            <br />
            -----------------------------------------------------------------------------------------
          </p>
        </div>
      </div>
    </form>
  );
};

export default DetailsProductPage;
