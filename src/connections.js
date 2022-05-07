const config = {
  app: {
    version: "0.0.1",
    env: "development",
    public_url: "",
  },
  language: {
    key: "language",
    initial: "ru",
    list: ["uz", "oz", "ru", "en"],
  },
  api: {
    baseUrl: "https://dsaas.uz",
    // baseUrl: "https://5747-84-54-120-98.eu.ngrok.io",

  },
  sentry: {
    dsn: process.env.REACT_APP_SENTRY_DSN,
  },
};

export default config;
