/**
 * @param input A string a ser verificada.
 * @returns Uma promessa que resolve para um booleano indicando se a string é Base64.
 */
export async function isBase64(input:string): Promise<boolean> {
    
    if (typeof input !== 'string') {
        return false;
    }

    try {
        if (input.length % 4 !== 0) {
            return false;
        }

        const decoded = Buffer.from(input, 'base64').toString('utf-8');

        return decoded.length > 0;
    } catch {
        return false;
    }
}

