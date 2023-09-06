import { createPool, Pool } from 'mysql2/promise'// solo queremos el promise y no todo el modulo

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: '104.154.217.250',
        user: 'root',
        port:3306,
        password: 'caramelo',
        database: 'bdsonrisas'
    });
    return connection;
}
