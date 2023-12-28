import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const Database = new Sequelize('sql12673236','sql12673236','MBCDDwhbjk',{
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
    dialectModule: mysql2,
});

export default Database;
