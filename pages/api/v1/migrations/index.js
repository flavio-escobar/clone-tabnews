import { up } from "infra/migrations/1787447700901_test-migration";
import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: request ? false : true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: "true",
    migrationsTable: "pgmigrations",
  });
  response.status(200).json(migrations);
}
