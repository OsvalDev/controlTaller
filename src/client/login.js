import axios from 'axios';

const baseApiEndpoint = process.env.REACT_APP_SOCKET_URL;

const api = {};
api.postLogin = async (data) => {
    const endpoint = `${baseApiEndpoint}/login`;
    const body = {
        numEmpleado : data.numEmpleado,
        psw : data.psw
    };
    const response = await axios.post(endpoint, body);
    return response.data;
};

export default api;