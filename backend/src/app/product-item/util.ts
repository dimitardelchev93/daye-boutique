import ProductItem from 'src/models/product-item';

export function tamponsMatch(
  productItems: ProductItem[],
  tampons: Array<{ size: string; coating: string; amount: number }>
): boolean {
  if (productItems.length !== tampons.length) {
    return false;
  }

  const sortedProductItems = productItems
    .map((item) => ({
      size: item.size,
      coating: item.coating,
      amount: item.amount,
    }))
    .sort(
      (a, b) =>
        a.size.localeCompare(b.size) ||
        a.coating.localeCompare(b.coating) ||
        a.amount - b.amount
    );

  const sortedTampons = [...tampons].sort(
    (a, b) =>
      a.size.localeCompare(b.size) ||
      a.coating.localeCompare(b.coating) ||
      a.amount - b.amount
  );

  return sortedProductItems.every((item, index) => {
    const tampon = sortedTampons[index];

    return (
      item.size === tampon.size &&
      item.coating === tampon.coating &&
      item.amount === tampon.amount
    );
  });
}
