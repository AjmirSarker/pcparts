import { PCBuilder } from "./pcBuilder.model";

const createPcBuilder = async (payload) => {
  const result = await PCBuilder.create(payload);
  return result;
};
const getAllPcBuilder = async () => {
  const result = await PCBuilder.find();
  return result;
};

export const PcBuilderService = { createPcBuilder, getAllPcBuilder };
