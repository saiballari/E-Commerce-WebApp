const requiredEnv = [
  "PORT",
  "MONGODB_URI",
  "JWT_SECRET",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export default true;