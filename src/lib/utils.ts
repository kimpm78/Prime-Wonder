// n 유형의 숫자를 사용하고 math.round를 사용하여 소수점 두 자리로 변환.
export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

// 全ての文書をオブジェクトに変換
export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString();
  return doc;
}

export const formatNumber = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatId = (x: string) => {
  return `..${x.substring(20, 24)}`;
};
