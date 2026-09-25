import { Client } from "pg";
import { ServiceError } from "./errors.js";

async function query(queryObject) {
  //console.log("Credenciais do postgres:", {
  //  host: process.env.POSTGRES_HOST,
  //  port: process.env.POSTGRES_PORT,
  //  user: process.env.POSTGRES_USER,
  //  password: process.env.POSTGRES_PASSWORD,
  //  database: process.env.POSTGRES_DB,
  //});
  let client;
  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    const serviceErrorObject = new ServiceError({
      message: "Erro na conexão com o banco de dados ou na query SQL.",
      cause: error,
    });
    throw serviceErrorObject;
  } finally {
    await client?.end();
  }
}

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: getSSLValues(),
  });
  await client.connect();
  return client;
}

const database = {
  query,
  getNewClient,
};

export default database;

function getSSLValues() {
  if (process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA,
    };
  } else {
    return process.env.NODE_ENV === "production" ? true : false;
  }
}
