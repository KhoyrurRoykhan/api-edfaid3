import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const Database = new Sequelize('babqjoedkgdnxnrwoloh','ugalngiogruqqk1g','jA6ov17qgI5abOQ8d6mK',{
    host: 'babqjoedkgdnxnrwoloh-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    dialectModule: mysql2,
});

export default Database;
