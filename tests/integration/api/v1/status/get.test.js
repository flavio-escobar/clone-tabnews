test("GET to api/v1/status should return 200 and the correct status information", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdatedAt);
  expect(Number.isFinite(responseBody.postgresVersion)).toBe(true);
  expect(Number.isInteger(responseBody.postgresMaxConnections)).toBe(true);
  expect(Number.isInteger(responseBody.postgresUsedConnections)).toBe(true);

  console.log(responseBody);
});
