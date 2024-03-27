import loginModel from '../model/login.js';
import userModel from '../model/user.js';
import response from '../model/response.js';

const controller = {};

controller.login = async (req, res) => {
    const login = new loginModel( req.body.numEmpleado, req.body.psw );
    const data  = await login.validateCredentials();
    let responseLogin = null;

    if ( data.length > 0 ){
        const dataUser = data[0];
        const user = new userModel( dataUser.numEmpleado, dataUser.nombre );
        await user.initialize();
        responseLogin = new response('success', user);
    } else {
        responseLogin = new response('failed', 'Numero de empleado o contraseña incorrectos.');
    }
    res.send(responseLogin);
};

export default controller;
