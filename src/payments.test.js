const { createCharge, getCharge } = require("./payments");

describe("payments", () => {
  test("creates a charge", () => {
    const charge = createCharge({ amount: 1000, customerId: "cus_1" });
    expect(charge.status).toBe("succeeded");
    expect(getCharge(charge.id).amount).toBe(1000);
  });

  test("rejects an invalid amount", () => {
    expect(() => createCharge({ amount: 0, customerId: "cus_1" })).toThrow(
      "amount must be positive",
    );
  });
});
