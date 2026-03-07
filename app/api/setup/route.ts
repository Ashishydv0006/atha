import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"; 
import Product from "@/models/Product";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // 1. Establish Database Connection
    await connectDB();

    // 2. Load JSON data
    const filePath = path.join(process.cwd(), "data", "products.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: false, error: "JSON file missing" }, { status: 404 });
    }

    const fileData = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(fileData);

    // 3. Clear existing collection and insert new data
    // This is the most reliable way to force creation of a new database
    await Product.deleteMany({});
    const result = await Product.insertMany(products);

    return NextResponse.json({
      success: true,
      message: `Database seeded successfully with ${result.length} products.`,
    });
  } catch (error: any) {
    // This catches Mongoose validation errors
    console.error("SEEDING ERROR:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}