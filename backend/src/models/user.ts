import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  HasMany,
} from 'sequelize-typescript';
import bcrypt from 'bcrypt';
import Product from './product';

@Table
export default class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @HasMany(() => Product)
  products!: Product[];

  @BeforeCreate
  static async hashPasswordBeforeCreate(user: User) {
    const salt = await bcrypt.hashSync(user.password, 12);

    user.password = await bcrypt.hash(user.password, salt);
  }
}
