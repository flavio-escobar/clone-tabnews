import bcryptjs from "bcryptjs";
import { createHmac } from "node:crypto";

async function hash(password) {
  const passwordWithPepper = applyPepper(password);
  const rounds = getNumberOfRounds();
  return await bcryptjs.hash(passwordWithPepper, rounds);
}

function applyPepper(password) {
  const pepper = process.env.PEPPER || "";
  if (!pepper) return password;

  const passwordWithPepper = createHmac("sha256", pepper)
    .update(password)
    .digest("base64");

  return passwordWithPepper;
}

function getNumberOfRounds() {
  return process.env.NODE_ENV === "production" ? 14 : 1;
}

async function compare(providedPassword, storedPassword) {
  const providedPasswordWithPepper = applyPepper(providedPassword);
  return await bcryptjs.compare(providedPasswordWithPepper, storedPassword);
}

const password = {
  hash,
  compare,
};

export default password;
