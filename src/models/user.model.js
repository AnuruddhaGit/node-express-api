const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    index: true
  },
  last_name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
    index: true
  },

  phone: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  is_active: { type: Boolean, default: false },
  is_verified: { type: Boolean, default: false },
  is_deleted: { type: Boolean, default: false }
}, {
  timestamps: true
});
module.exports = mongoose.model('User', UserSchema)