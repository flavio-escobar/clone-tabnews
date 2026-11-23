import email from "infra/email.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await email.send({
      from: "Luli <contato@luli.com>",
      to: "<contato@example.com>",
      subject: "Test assunto",
      text: "This is a test email.",
    });

    await email.send({
      from: "Luli <contato@luli.com>",
      to: "<contato@example.com>",
      subject: "ultimo email enviado",
      text: "corpo do ultimo email enviado.",
    });

    const lastEmail = await orchestrator.getLastEmail();

    expect(lastEmail.sender).toBe("<contato@luli.com>");
    expect(lastEmail.recipients[0]).toBe("<contato@example.com>");
    expect(lastEmail.subject).toBe("ultimo email enviado");
    expect(lastEmail.text).toBe("corpo do ultimo email enviado.\n");
  });
});
