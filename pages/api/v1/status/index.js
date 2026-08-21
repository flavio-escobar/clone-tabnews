import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date();
  const databaseVersionResult = await database.query("SHOW server_version;"); //uma query é uma promessa
  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = request.query.databaseName;
  console.log(`Banco de dados selecionado ${databaseName}`);
  const databaseOpenedConnectionsResult = await database.query(
    `SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${databaseName}';`,
  );

  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    update_at: updateAt.toISOString(),
    dependencies: {
      database: {
        version: databaseVersionResult.rows[0].server_version,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
