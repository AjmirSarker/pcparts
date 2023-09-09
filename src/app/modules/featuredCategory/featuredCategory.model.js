import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  Speaker: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  UPS: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  RAM: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  ROM: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  SSD: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  PSU: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  GPU: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  Mouse: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  MotherBoard: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  Monitor: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  Keyboard: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  CPU: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  CpuCooler: {
    Category: String,
    Name: String,
    imgLink: String,
  },
  Casing: {
    Category: String,
    Name: String,
    imgLink: String,
  },
});

// Create a model based on the schema
export const Category = mongoose.model("Category", categorySchema);


