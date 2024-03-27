import loginModel from '../model/login.js';

const controller = {};

controller.login = (req, res) => {
    const login = new loginModel( req.body.numEmpleado, req.body.psw );
    login.validateCredentials();
    res.send('hola');
};

export default controller;
