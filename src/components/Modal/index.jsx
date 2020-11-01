import React from 'react'
import { useSelector } from 'react-redux'
import { getModal } from '../../redux/Modal/Modal.selectors';
import TextConfirm from './TextConfirm';

const Modal = () => {
    const { modal, modalData } = useSelector(getModal)

    const render = {
        TextConfirm: <TextConfirm modalData={modalData} />,
    }

    return <>{render[modal]}</>
}

export default Modal;

