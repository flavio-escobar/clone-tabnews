export class InternalServerError extends Error {
  constructor({ cause }) {
    super(
      " Um erro interno não esperado aconteceu. Por favor, tente novamente mais tarde.",
      { cause },
    );
    this.name = "InternalServerError";
    this.action = "Entre em contato com o suporte";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      cause: this.cause?.message,
      action: this.action,
      statusCode: this.statusCode,
    };
  }
}
