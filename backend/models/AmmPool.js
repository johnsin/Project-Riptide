const mongoose = require('mongoose');

const AmmPoolSchema = new mongoose.Schema({
  poolId: { type: String, required: true, unique: true },
  asset1: { type: String, required: true },
  asset2: { type: String, required: true },
  liquidity: { type: Number, required: true },
  yield: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AmmPool', AmmPoolSchema);