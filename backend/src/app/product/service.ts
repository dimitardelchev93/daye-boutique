import Product from '../../models/product';
import ProductItem from '../../models/product-item';
import { tamponsMatch } from '../product-item/util';
import {
  createProduct,
  deleteProduct,
  findAllProductsByUserId,
  findProductsByDetails,
  findProductByIdAndUserId,
  findAllProducts,
} from './model';

const productService = {
  async getProducts(userId?: number) {
    const products = userId
      ? await findAllProductsByUserId(userId)
      : await findAllProducts();

    return {
      status: 200,
      message: 'Products retrieved successfully',
      data: products,
    };
  },

  async addProduct(
    userId: number,
    price: number,
    currency: string,
    image: string,
    tampons: Array<{ size: string; coating: string; amount: number }>
  ) {
    const existingProducts = await findProductsByDetails(
      userId,
      price,
      currency,
      image
    );

    for (let i = 0; i < existingProducts?.length; i++) {
      if (
        existingProducts[i] &&
        tamponsMatch(existingProducts[i].toJSON()?.tampons, tampons)
      ) {
        return { status: 409, message: 'Product already exists' };
      }
    }

    const product = await createProduct(userId, price, currency, image);

    const productItems = await Promise.all(
      tampons.map((tampon) =>
        ProductItem.create({
          ...tampon,
          productId: product.id,
        })
      )
    );

    return {
      status: 201,
      message: 'Product added successfully',
      data: { ...product.toJSON(), productItems },
    };
  },

  async removeProduct(userId: number, productId: number) {
    const product = await findProductByIdAndUserId(productId, userId);

    if (!product) {
      return { status: 404, message: 'Product not found' };
    }

    await deleteProduct(product as Product);

    return { status: 200, message: 'Product removed successfully' };
  },
};

export default productService;
