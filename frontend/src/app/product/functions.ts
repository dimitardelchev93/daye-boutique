import { compareTamponArrays } from 'app/tampon/functions';

import { Product, ProductBase, RawProductData, RawProductItem } from './types';

function isBaseProductItemValid(tampon: RawProductItem): boolean {
  return (
    typeof tampon.size === 'string' &&
    typeof tampon.coating === 'string' &&
    typeof tampon.amount === 'number'
  );
}

function parseTamponsFromXml(tamponsString: string): RawProductItem[] {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(tamponsString, 'application/xml');
  const tamponElements = xmlDoc.getElementsByTagName('tampon');

  return Array.from(tamponElements).map((tamponElement) => {
    return {
      size: tamponElement.getElementsByTagName('size')[0].textContent as string,
      coating: tamponElement.getElementsByTagName('coating')[0].textContent as string,
      amount: parseInt(tamponElement.getElementsByTagName('amount')[0].textContent || '0', 10),
    };
  });
}

export function validateAndNormalizeProduct(product: RawProductData): ProductBase | null {
  const invalidFields: string[] = [];
  let tampons: RawProductItem[] = [];

  if (Array.isArray(product.tampons)) {
    tampons = product.tampons;
  } else if (Array.isArray(product.tapons)) {
    tampons = product.tapons;
  } else if (typeof product.tampons === 'string') {
    tampons = parseTamponsFromXml(product.tampons);
  } else if (typeof product.tapons === 'string') {
    tampons = parseTamponsFromXml(product.tapons);
  }

  const validTampons = tampons
    .filter((tampon) => {
      if (!isBaseProductItemValid(tampon)) {
        invalidFields.push(`Invalid tampon: ${JSON.stringify(tampon)}`);
        return false;
      }
      return true;
    })
    .sort(
      (a, b) =>
        a.size?.localeCompare(b.size || '') ||
        a.coating?.localeCompare(b.coating || '') ||
        (a.amount || 0) - (b.amount || 0),
    );

  if (typeof product.price !== 'number') {
    invalidFields.push('Missing or invalid price');
  }

  if (typeof product.currency !== 'string') {
    invalidFields.push('Missing or invalid currency');
  }

  if (typeof product.productImage !== 'string') {
    invalidFields.push('Missing or invalid productImage');
  }

  if (invalidFields.length > 0) {
    console.error(
      `Error converting product to ProductBase. Invalid fields: ${invalidFields.join(
        ', ',
      )}. Product: `,
      product,
    );
    return null;
  }

  return {
    price: product.price,
    currency: product.currency,
    image: product.productImage,
    tampons: validTampons,
  } as ProductBase;
}

export function normalizeProductsData(products: RawProductData[]): ProductBase[] {
  return products.reduce((accumulator: ProductBase[], product) => {
    const normalizedProduct = validateAndNormalizeProduct(product);

    if (normalizedProduct !== null) {
      accumulator.push(normalizedProduct);
    }

    return accumulator;
  }, []);
}

export function getSortedOrderedProducts(orderedProducts: Product[]): Product[] {
  return orderedProducts.map((product) => {
    const sortedTampons = product.tampons.sort((a, b) => {
      const sizeCompare = a.size.localeCompare(b.size);
      const coatingCompare = a.coating.localeCompare(b.coating);
      const amountCompare = a.amount - b.amount;

      if (sizeCompare !== 0) {
        return sizeCompare;
      }
      if (coatingCompare !== 0) {
        return coatingCompare;
      }
      return amountCompare;
    });

    return {
      ...product,
      tampons: sortedTampons,
    };
  });
}

export function compareBaseProducts(baseProduct: ProductBase, product: ProductBase): boolean {
  return (
    baseProduct.price === product.price &&
    baseProduct.currency === product.currency &&
    baseProduct.image === product.image &&
    compareTamponArrays(baseProduct.tampons, product.tampons)
  );
}

export function checkIfProductExistsInProducts(
  product: ProductBase,
  sortedProducts: ProductBase[],
): boolean {
  for (const orderedProduct of sortedProducts) {
    if (compareBaseProducts(product, orderedProduct)) {
      return true;
    }
  }
  return false;
}
