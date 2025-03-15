const HOST_URL = window.location.protocol + "//" + window.location.hostname;

export const environment = {
  BACKEND_API:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000"
      : `${HOST_URL}`,
};
