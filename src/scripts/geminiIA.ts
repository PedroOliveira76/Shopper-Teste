require('dotenv').config();
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const genAI = new GoogleGenerativeAI(process.env.API_KEY_GOOGLE);
const fileManager = new GoogleAIFileManager(process.env.API_KEY_GOOGLE);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" }
});


function base64ToImage(base64: string, outputPath: string): Buffer {
    const buffer = Buffer.from(base64, 'base64');
    fs.writeFileSync(outputPath, buffer);
    return buffer
}

export async function geminiIAImage(imageBase64: string) {
    try {
        const imagePath = path.join(__dirname, '../../public', 'upload.jpg');

        base64ToImage(imageBase64, imagePath);
        
        const uploadResponse = await fileManager.uploadFile(imagePath, {
            mimeType: "image/jpeg",
            displayName: "Uploaded Image",
        });

        const result = await model.generateContent([
            {
                fileData: {
                    mimeType: uploadResponse.file.mimeType,
                    fileUri: uploadResponse.file.uri
                }
            },
            {
                text: `De acordo com essa imagem, precha esse campos(ps. o campo measure_type so pode ser ou WATER or GAS. o campo ID precisa ser gerado um GUID, gere um e coloque no ID.Pegue o base64 dessa image gere um buffer e coloque no campo "image"):
                { "type": "object",
                     "properties": {
                        "id": { "type": "GUID" },
                        "image": {"type": "string"}
                        "customer_code":{"type":"string"},
                        "measure_datetime":{"type":"string"},
                        "measure_type":{"type":"string"}}
                }`
            },
        ]);

        const getResponse = await fileManager.getFile(uploadResponse.file.name);

        return {linktemp: getResponse.uri, resultado: result.response.text(), caminho: imagePath};

    } catch (error) {
        throw error;
    }
}
