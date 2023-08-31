import mongoose from "mongoose";

// Define the schema for your data
const speakerSchema = new mongoose.Schema({
  Model: String,
  InputSensitivity: String,
  FrequencyResponse: String,
  Price: Number,
  Brand: String,
  Type: String,
  SystemRequirements: String,
  Details: String,
  Category: String,
  ProductId: Number,
  img1: String,
  img2: String,
  AvgRatings: Number,
  Status: String,
  Reviews: [String], // Assuming you want to store reviews as an array of strings
});

// Create a model using the schema

export const pro = mongoose.model("pro", speakerSchema);
