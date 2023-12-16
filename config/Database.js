import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const Database = new Sequelize({
    database: 'b2iobim6wv0db1b8vdtp',
    username: 'ualuujfll9mzkrde',
    password: 'R20jh72l4AxRrhCnuoxv',
    host: 'b2iobim6wv0db1b8vdtp-mysql.services.clever-cloud.com-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    dialectModule: mysql2,
});

export default Database;
