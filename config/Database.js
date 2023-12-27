import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const Database = new Sequelize('btfgnbuywd64cr2fp0qy','uvgfuxlyf5p7zgfq','7L8zCKiRTjbpRw5tStF1',{
    host: 'btfgnbuywd64cr2fp0qy-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    dialectModule: mysql2,
});

export default Database;
