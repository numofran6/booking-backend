import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password
      },
      message: 'Passwords do not match'
    }
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

usersSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)
  this.confirmPassword = undefined

  next()
})

const User = mongoose.model('users', usersSchema)

export default User