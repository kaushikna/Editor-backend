/* ======================= PostgreSQL DB properties ======================= */
exports.postgreSQL = {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  };
  
  