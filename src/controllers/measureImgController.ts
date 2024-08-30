import { Request, Response } from "express";
import { MeasureService } from "../services/measureImgService";
import { ImgRequest } from "../model/measureImg.model";


const measureService = new MeasureService();

export class MeasureController {
    public async uploadImg(req: Request, res: Response) {
        try {
            const { image } = req.body
            const getDataAI = await measureService.uploadImg(image)

            res.status(200).json(getDataAI?.json)
            ImgRequest.create(getDataAI?.json)
            return { imgLink: getDataAI?.link, imgData: getDataAI?.json }

        } catch (error) {
            res.status(400).json({
                error_code: 'IVALID_DATA',
                error_description: `${error}`
            })
        }
    }

    // public async confirmMeasure(req: Request, res: Response) {
    //     try {
    //         const { measure_uuid, confirmed_value } = req.body;

    //         if (typeof measure_uuid !== 'string' || typeof confirmed_value !== 'number') {
    //             return res.status(400).json({
    //                 error_code: "INVALID_DATA",
    //                 error_description: "Dados inválidos fornecidos."
    //             });
    //         }

    //         const result = await measureService.confirmMeasure(measure_uuid, confirmed_value);

    //         if (result.status !== 200) {
    //             return res.status(result.status).json(result);
    //         }

    //         return res.status(200).json({ success: true });

    //     } catch (error:any) {
    //         return res.status(500).json({
    //             error_code: 'SERVER_ERROR',
    //             error_description: `Erro interno do servidor: ${error.message}`
    //         });
    //     }
    // }


}