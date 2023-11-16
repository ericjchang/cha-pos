import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    SKU: { type: String, default: '' },
    name: { type: String, default: '' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    description: { type: String, default: '' },
    qty: { type: Number, default: 0 },
    sellPrice: { type: Number, default: 0 },
    purchasePrice: { type: Number, default: 0 },
    active: { type: Boolean, default: 0 },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, opt) => {
        delete ret.__v;
      },
    },
    toJSON: {
      transform: (doc, ret, opt) => {
        delete ret.__v;
      },
    },
  }
);

Product.statics = statics;
module.exports = mongoose.model('Product', Product);
