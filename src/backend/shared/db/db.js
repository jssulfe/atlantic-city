import mysql from "mysql2/promise";

export async function connectDB() {
  try {
    console.log(process.env.DB_HOST);
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    console.log("✅ Conexión a la base de datos exitosa");
    return connection;
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error.message);
    throw new Error("No se pudo conectar a la base de datos");
  }
}
