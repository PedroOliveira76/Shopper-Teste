import { ImgRequest } from "../model/measureImg.model";
import { geminiIAImage } from "../scripts/geminiIA";
import { isBase64 } from '../utils/validator'
const fs = require('fs');

export class MeasureService {

    public async uploadImg(image: string) {

        try {
            const isbase64 = await isBase64(image)
            if (isbase64 === true) {
                const dadosIA = await geminiIAImage(image)
                const imgLink = dadosIA.linktemp
                const imgPath = dadosIA.caminho
                const objectImg = JSON.parse(dadosIA.resultado)

                return { link: imgLink, json: objectImg }
            }
        }

        catch (error) {

            console.log(`Ocorreu um erro: ${error}`);
            throw error
        }


    }
}