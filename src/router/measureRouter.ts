import { Router } from "express";
import { MeasureController } from "../controllers/measureImgController";

const measureRouter = Router();
const measureController = new MeasureController();

measureRouter.post('/upload', measureController.uploadImg)

export default measureRouter