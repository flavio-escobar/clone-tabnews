import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date();
  const postgresVersion = await database.query("SHOW server_version;"); //uma query é uma promessa
  const postgresConnections = await database.query(
    "SELECT current_setting('max_connections')::int AS max_connections, COUNT(*)::int AS used_connections FROM pg_stat_activity;",
  );

  response.status(200).json({
    update_at: updateAt.toISOString(),
    postgresVersion: parseFloat(postgresVersion.rows[0].server_version),
    postgresMaxConnections: parseInt(
      postgresConnections.rows[0].max_connections,
    ),
    postgresUsedConnections: parseInt(
      postgresConnections.rows[0].used_connections,
    ),
  });
}

export default status;
