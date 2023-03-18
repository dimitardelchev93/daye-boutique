import ProductItem from '../../models/product-item';
import Product from '../../models/product';

export async function findProductsByDetails(
  userId: number,
  price: number,
  currency: string,
  image: string
) {
  return await Product.findAll({
    where: { userId, price, currency, image },
    include: [
      {
        model: ProductItem,
      },
    ],
  });
}

export async function createProduct(
  userId: number,
  price: number,
  currency: string,
  image: string
) {
  return await Product.create({
    userId,
    price,
    currency,
    image,
  });
}

export async function findProductByIdAndUserId(
  productId: number,
  userId: number
) {
  return await Product.findOne({
    where: { id: productId, userId },
  });
}

export async function findAllProductsByUserId(userId: number) {
  return await Product.findAll({
    where: { userId },
    include: [
      {
        model: ProductItem,
      },
    ],
  });
}

export async function findAllProducts() {
  return await Product.findAll({
    include: [
      {
        model: ProductItem,
      },
    ],
  });
}

export async function deleteProduct(product: Product) {
  return await product.destroy();
}
