import bd from '../utils/dbConection.js';

export default class User {
    constructor(numEmpleado, userName) {
        this.numEmpleado = numEmpleado;
        this.userName = userName;        
    }

    async initialize() {
        this.role = await this.getRole();
    }

    async getRole() {
        const query = 'SELECT roleName FROM [USER_ROLE] JOIN [ROLE] ON [USER_ROLE].idRole = [ROLE].id WHERE [USER_ROLE].idUser = @numEmpleado';
        const values = {
            numEmpleado: this.numEmpleado,
        };
        const result = await bd.makeQuery(query, values); 
        return result.map(rol => rol.roleName);
    }
}