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
  return charges.get(id) ?? null;
}

function captureCharge(id) {
  const charge = charges.get(id);
  if (!charge) {
    throw new Error("charge not found");
  }
  charge.status = "captured";
  return charge;
}

module.exports = { createCharge, getCharge, captureCharge, charges };
