/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai-content-generator_owner:cot6jL8XTbCE@ep-dawn-frog-a53szr9r.us-east-2.aws.neon.tech/Ai-content-generator?sslmode=require',
    }
  };