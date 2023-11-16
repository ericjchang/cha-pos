import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import { Role } from '../common/constants';

const User = new Schema(
  {
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    role: { type: String, default: Role.User },
    password: { type: String, default: '' },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, opt) => {
        delete ret.password;
        delete ret.__v;
      },
    },
    toJSON: {
      transform: (doc, ret, opt) => {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

User.statics = statics;
module.exports = mongoose.model('User', User);
