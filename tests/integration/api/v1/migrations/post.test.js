import database from "infra/database";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("DROP schema public cascade; CREATE schema public;");
}

test("POST to api/v1/migration should return 201 and the correct status information", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody1 = await response1.json();
  expect(Array.isArray(responseBody1)).toBe(true);
  expect(responseBody1.length).toBeGreaterThan(0);
  expect(response1.status).toBe(201);
  console.log(response1.status);
  console.log(responseBody1);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody2 = await response2.json();
  expect(Array.isArray(responseBody2)).toBe(true);
  expect(responseBody2.length).toBe(0);
  expect(response2.status).toBe(200);
  console.log(response2.status);
  console.log(responseBody2);
});
