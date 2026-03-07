import mongoose, { Schema, models, model } from "mongoose"

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  category: String, // Added to categorize juices (e.g., "Thyroid Wellness")
  description: String,
  benefits: [String],
  ingredients: [String],
  dosage: String,
  volume: [String],
  certifications: {
    type: [String],
    default: ["GMP Certified", "ISO Certified", "No Added Sugar", "BPA Free"]
  },
  // Refined price structure for easier access in the frontend
  price: {
    ml500: { type: Number },
    ml1000: { type: Number }
  },
  image: String
}, {
  timestamps: true
})

export default models.Product || model("Product", ProductSchema)