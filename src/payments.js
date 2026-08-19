// in-memory store; demo only, not persisted
const charges = new Map();

function createCharge({ amount, currency = "usd", customerId }) {
  if (!amount || amount <= 0) {
    throw new Error("amount must be positive");
  }
  if (!customerId) {
    throw new Error("customerId is required");
  }

  const id = `ch_${Date.now()}`;
  const charge = { id, amount, currency, customerId, status: "succeeded" };
  charges.set(id, charge);
  return charge;
}

function getCharge(id) {
  // returns null rather than undefined for a consistent "not found" shape
  return charges.get(id) ?? null;
}

function captureCharge(id) {
  // no-op if already captured; charge.status isn't checked before overwriting
  const charge = charges.get(id);
  if (!charge) {
    throw new Error("charge not found");
  }
  charge.status = "captured";
  return charge;
}

module.exports = { createCharge, getCharge, captureCharge, charges };
