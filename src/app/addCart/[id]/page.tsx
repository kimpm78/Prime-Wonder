// 'use client';
import Button from '@/components/atoms/Button';

const AddCartPage = () => {
  return (
    <form className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold p-5 text-gray-700">マイページ</h1>
      <div className="">
        <h1 className="font-bold">商品名</h1>
        <p>数量</p>
        <p>価格（税込）</p>
        <div className="gap-2">
          <Button>追加</Button>
          <Button type="submit">削除</Button>
        </div>
      </div>
    </form>
  );
};

export default AddCartPage;
