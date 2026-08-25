import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  if (request.method != "GET" && request.method != "POST") {
    return response.status(405).json({
      error: "O metodo HTTP enviado nao e suportado para este recurso.",
    });
  } else {
    const dbClient = await database.getNewClient();
    const defaultMigrationOptions = {
      dbClient: dbClient,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };
    try {
      if (request.method === "GET") {
        console.log("Entrou no GET");
        console.log("NEXT.JS env: ", process.env.NODE_ENV);
        console.log("DB_PASS env: ", process.env.POSTGRES_PASSWORD);
        const pendingMigrations = await migrationRunner(
          defaultMigrationOptions,
        );
        await dbClient.end();
        return response.status(200).json(pendingMigrations);
      }
      if (request.method === "POST") {
        console.log("Entrou no POST");
        const migratedMigrations = await migrationRunner({
          ...defaultMigrationOptions,
          dryRun: false,
        });
        await dbClient.end();
        if (migratedMigrations.length > 0) {
          return response.status(201).json(migratedMigrations);
        } else {
          return response.status(200).json(migratedMigrations);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      await dbClient.end();
    }
  }
  return response.status(405).end();
}
