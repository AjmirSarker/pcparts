import { PcBuilderService } from "./pcBuilder.service";

const createPcBuilder = async (req, res) => {
  const { ...allInfo } = req.body;
  const result = await PcBuilderService.createPcBuilder(allInfo);
  res.status(200).send(result);
};
const getAllPcBuilder = async (req, res) => {
    const result = await PcBuilderService.getAllPcBuilder();
    res.status(200).send(result);
}

export const PcBuilderController = { createPcBuilder,getAllPcBuilder };
