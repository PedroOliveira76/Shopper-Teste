# Usa uma imagem base oficial do Node.js LTS
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante do código do projeto para o diretório de trabalho
COPY . .

# Expõe a porta em que a aplicação será executada
EXPOSE 3030

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
