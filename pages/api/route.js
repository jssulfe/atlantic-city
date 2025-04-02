import { connectDB } from "../../src/backend/shared/db/db";

export default async function GET() {
  try {
    const db = await connectDB();
    const [rows] = await db.execute("SELECT * FROM users");
    return Response.json("Mensaje de prueba");
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Error al consultar usuarios" },
      { status: 500 }
    );
  }
}
