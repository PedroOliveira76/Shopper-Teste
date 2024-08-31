## Config do banco de dados
export const sequelize = new Sequelize('seu_database', 'seu_username', 'seu_password',{
    dialect:'seu_bancoDeDaods',
    host:'url da aplicação'
})


// Substitua em config de acordo com o seus dados do banco de dados.
## Config da API e PORT
Crie um .env e coloque as seguintes informações:
PORT = 3030 (troque a porta de acordo com a desejavel)
API_KEY_GOOGLE = "SUA API KEY DO GEMINI AQUI"

## Como rodar o projeto
# Lembre de alterar as váriaveis no docker-compose, colocando as variais do banco de dados !
# Navague para o caminho raiz shopper/visiongemini
# Construa o docker com o comando >  docker build -t visiongemini .
# Rode o contêiner > docker run -d -p 3030:3030 --name meu_visiongemini visiongemini
lembre de colocar a porta utilizada no .env

## Rotas
# A aplicação só possui uma rota

/api/upload
Essa rota recebe uma req.body{base64:string}
Ela faz uma verificação para saber se realmente a string está formatada corretamente e então gera uma img temporária.
Essa verificação é feita na no arquivo validation.ts na pastas Utils.
A img temporária é feita no arquivo geminiIA.ts.
A IA do gemini verifica essa IMG e retonar os seguintes dados:
{ "type": "object",
                     "properties": {
                        "id": { "type": "GUID" },
                        "image": {"type": "string"}
                        "customer_code":{"type":"string"},
                        "measure_datetime":{"type":"string"},
                        "measure_type":{"type":"string"}}
}
Ele gera erros de acordo com o retorno da IA caso não seja o esperado.

## Não consegui completar o desafio a tempo
Recebi um desafio e em 4 dias só consegui fazer isso. Nunca criei um backend que "conversasse" com uma IA e o máximo que consegui foi isso, lendo a documentação do gemini API. Usei o modelo MVC e tentei fazer o máximo que consegui. Gostei de usar uma IA para fazer uma aplicação e talvez eu finalize esse projeto!

