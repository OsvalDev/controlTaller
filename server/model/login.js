import bd from '../utils/dbConection.js';

export default class Login {
    constructor(numEmpleado, psw) {
        this.numEmpleado = numEmpleado;
        this.psw = psw;
    }

    async validateCredentials() {
        const query = 'SELECT * FROM USER WHERE numEmpleado = ' + this.numEmpleado + ' AND psw = ' + this.psw;
        const result = await bd.makeQuery( query );
        console.log( result );
    }

}
