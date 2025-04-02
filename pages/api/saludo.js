import { connectDB } from "../../src/backend/shared/db/db";

export default async function handler(req, res) {
  try {
    const db = await connectDB();
    const [rows] = await db.query("SELECT * FROM atlantic_city.cliente");
    res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ error: error.message }, { status: 500 });
  }
}
