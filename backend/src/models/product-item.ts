import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Product from './product';

@Table
export default class ProductItem extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId!: number;

  @BelongsTo(() => Product)
  product!: Product;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  size!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  coating!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount!: number;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
