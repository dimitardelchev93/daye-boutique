import { ProductItemBase } from 'app/product/types';
import { Colors } from 'theme';

export function randomColor(colors: Colors, excludeColors?: Array<string | null>): string {
  const colorKeys = (Object.keys(colors) as Array<keyof Colors>).filter(
    (key) => key !== 'text' && key !== 'background',
  );
  let newColor: string;

  do {
    newColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
  } while (excludeColors?.includes(newColor));

  return newColor;
}

export function compareTamponArrays(arr1: ProductItemBase[], arr2: ProductItemBase[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (
      arr1[i].size !== arr2[i].size ||
      arr1[i].coating !== arr2[i].coating ||
      arr1[i].amount !== arr2[i].amount
    ) {
      return false;
    }
  }

  return true;
}
