import { faker } from "@faker-js/faker";
import type { ElectricBill } from "./basic-table";

faker.seed(0);

const billingPeriods = [
  "Jan 2026",
  "Feb 2026",
  "Mar 2026",
  "Apr 2026",
  "May 2026",
  "Jun 2026",
];

export const data: ElectricBill[] = Array.from({ length: 12 }, () => {
  const usageKwh = faker.number.int({ min: 220, max: 980 });
  const peakKwh = faker.number.int({
    min: Math.floor(usageKwh * 0.4),
    max: Math.floor(usageKwh * 0.75),
  });
  const offPeakKwh = usageKwh - peakKwh;

  const ratePerKwh = faker.number.float({
    min: 0.24,
    max: 0.39,
    fractionDigits: 2,
  });

  const supplyCharge = faker.number.float({
    min: 12,
    max: 28,
    fractionDigits: 2,
  });

  const subtotal = Number((usageKwh * ratePerKwh + supplyCharge).toFixed(2));
  const gst = Number((subtotal * 0.1).toFixed(2));
  const total = Number((subtotal + gst).toFixed(2));

  return {
    accountNumber: `ACC-${faker.number.int({ min: 100000, max: 999999 })}`,
    customerName: faker.person.fullName(),
    billingPeriod: faker.helpers.arrayElement(billingPeriods),
    meterId: `MTR-${faker.number.int({ min: 100000, max: 999999 })}`,
    usageKwh,
    peakKwh,
    offPeakKwh,
    ratePerKwh,
    supplyCharge,
    subtotal,
    gst,
    total,
    paid: faker.datatype.boolean(),
  };
});
