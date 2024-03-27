import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

import loginApi from '../client/login';


export default function Form(){
    const [formData, setFormData] = useState({ numEmpleado: '', psw: '' });
    const [formValid, setFormValid] = useState(false);

    const navigate = useNavigate();
    
    // Manejar cambios en los campos de entrada
    const handleInputChange = (name, value) => {
        const newFormData = { ...formData, [name]: value };        
        setFormData(newFormData);
        // Validar el formulario después de cada cambio en los campos
        validateForm(newFormData);
    };

    // Función para validar el formulario
    const validateForm = (data) => {
        // Verificar si todos los campos están llenos
        const isFormValid = Object.values(data).every(value => value !== '');
        setFormValid(isFormValid);
    };

    // Manejar envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (formValid) {
            try {
                // Enviar la solicitud al servidor
                const responseData = await loginApi.postLogin(formData);
                if ( responseData.result == 'success' ){
                    navigate('/home');
                } else {
                    console.log(responseData.data);
                }
            } catch (error) {
                console.error('Error al enviar la solicitud:', error);                
            }
        } else {
            console.log('Formulario inválido, no se puede enviar');
        }
    };

    const buttonClassName = formValid ? 'text-white bg-[#C44890] hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40' : 'text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40';

    return (
        <>
            <form className="w-full flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="numEmpleado" className="block mb-2 sm:text-sm text-xs font-medium text-gray-900">Numero de empleado</label>
                    <Input type="number" name="numEmpleado" onChange={handleInputChange} />
                </div>
                <div className="mb-5">
                    <label htmlFor="psw" className="block mb-2 sm:text-sm text-xs font-medium text-gray-900">Contraseña</label>                        
                    <Input type="password" name="psw" onChange={handleInputChange} />
                </div>
                
                <button id="btnLogin" type="submit" disabled={!formValid}  className={buttonClassName}>Aceptar</button>
            </form>
        </>
    );
}