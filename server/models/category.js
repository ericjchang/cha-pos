import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Category = Schema(
  {
    name: { type: String, default: '' },
    active: { type: Boolean, default: true },
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

Category.statics = statics;
module.exports = mongoose.model('Category', Category);
