test("GET to api/v1/status should return 200 and the correct status information", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  console.log(response);
});
