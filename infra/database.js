import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

async function query(queryObject) {
  return pool.query(queryObject);
}

export default {
  query,
};
