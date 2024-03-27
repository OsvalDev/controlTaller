import {DB_CONFIG} from '../config.js';
import sql from 'mssql';

const dbConfig = {
    user: DB_CONFIG.user,
    password: DB_CONFIG.password,
    server: DB_CONFIG.server,
    database: DB_CONFIG.database,    
    options: {
        encrypt: true,
        trustServerCertificate: true,        
    },
};

const pool = new sql.ConnectionPool(dbConfig);

const makeQuery = async (query, values) => {
    try {
        await pool.connect();
        const request = pool.request();
        if (values) {
            for (const key in values) {
                request.input(key, values[key]);
            }
        }
        const result = await request.query(query);
        return result.recordset;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
};

process.on('exit', () => {
    pool.close();
});

export default {makeQuery};
