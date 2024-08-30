import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('seu_database', 'seu_username', 'seu_password',{
    dialect:'mysql',
    host:'localhost'
})

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });
