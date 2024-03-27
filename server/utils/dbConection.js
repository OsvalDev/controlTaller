import {DB_CONFIG} from '../config.js';
import sql from 'mssql';

const dbConfig = {
    user: DB_CONFIG.user,
    password: DB_CONFIG.password,
    server: DB_CONFIG.server,
    database: DB_CONFIG.database,    
    options: {
        encrypt: true,
        trustServerCertificate: false,        
    },
};

const makeQuery = async ( query ) =>{
    try {
        await sql.connect(dbConfig);
        const result = await sql.query(query);
        return result.recordset;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    } finally {
        sql.close();
    }
};

export default {makeQuery};
