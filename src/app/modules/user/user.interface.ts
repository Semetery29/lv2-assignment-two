import { Schema, model, connect, Types } from "mongoose";

export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: Types.Array<string>;
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Types.Array<Orders>;
};
