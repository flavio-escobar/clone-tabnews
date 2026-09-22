import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let updatedAtText = "Loading...";
  if (!isLoading && data) {
    updatedAtText = new Date(data.update_at).toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  }
  return <div>Updated at: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let databaseStatusInformation = "Loading...";
  if (!isLoading && data) {
    databaseStatusInformation = (
      <>
        <div>Database version: {data.dependencies.database.version}</div>
        <div>Max connections: {data.dependencies.database.max_connections}</div>
        <div>
          Opened connections: {data.dependencies.database.opened_connections}
        </div>
      </>
    );
  }
  return (
    <>
      <h2> Database Status</h2>
      <div>{databaseStatusInformation}</div>
    </>
  );
}
