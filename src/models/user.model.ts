import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../config';
import { IUser } from '../types/user.interface';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
}, {
  timestamps: true,
});

// Pre-save middleware / hook : will run before saving a document
userSchema.pre('save', async function (next) {
  // 'this' refers to the document about to be saved
  const user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // Hash password using bcrypt salt rounds from config
  user.password = await bcrypt.hash(
    user.password as string,
    Number(config.bcrypt_salt_rounds)
  );
  
  next();
});

// Post-save middleware / hook : will run directly after saving a document
userSchema.post('save', function (user, next) {
  // doc is the document that was just saved
  // For example, we want to erase password field before returning doc after creation
  // Or simply log the information
  console.log(`[Post-Save Hook]: A new user was created with email: ${user.email}`);
  
  // Note: Modifying doc here won't save it to DB (unless you call .save() again), 
  // but it does affect the object returned from the save() method in controller.
  user.password = '';
  
  next();
});

export const User = model<IUser>('User', userSchema);
