import { Schema } from 'mongoose';

export const ProductSchema = new Schema(
  {
    index: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    create: { type: Date, default: Date.now },
  },
);
