import React, {useState} from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal/Modal';

import CircleButton from '../components/CircleButton';

import Add from '../icons/Add';

export default function Settings(){
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return (
        <>
            <Card>
                <div className='w-full flex'>
                    <h1 className='font-bold text-xl flex-1'>Configuracion</h1>                    
                    <CircleButton onclickFun={ handleOpenModal } icon={ <Add /> } />
                </div>
            </Card>

            {showModal && (
                <Modal handleClose={handleCloseModal} title={'Agregar un modulo'} >                    
                    <h2>¡Este es un modal!</h2>
                    <p>¡Contenido del modal aquí!</p>                    
                </Modal>
            )}
        </>
    );
}