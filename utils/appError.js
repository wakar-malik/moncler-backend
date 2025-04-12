class AppError extends Error {
  constructor(message, status) {
    super(message);

    this.status = status || 500;
    this.isAppError = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
