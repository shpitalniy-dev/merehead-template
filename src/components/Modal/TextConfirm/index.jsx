import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { HandleModal } from '../../../redux/Modal/Modal.actions'
import useOutsideClick from '../../../hooks/outsideClick'

const TextConfirm = ({ modalData }) => {
    const {
        title,
        element,
        onSubmit,
    } = modalData;
    const dispatch = useDispatch();
    const ref = useRef();
    useOutsideClick(ref, () => dispatch(HandleModal({ modal: '', modalData: '' })));

    return (
        <div className="pop-wrap active">
            <div className="pop-scroll">
                <div className="pop-bg"></div>
                <div className="pop-inside">
                    <div className="pop">
                        <div className="pop-in" ref={ref}>
                            <button className="close-modal" onClick={() => dispatch(HandleModal({ modal: '', modalData: '' }))}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7222 1L1 15.7222" stroke="#404040" strokeWidth="1.64" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M1 1L15.7222 15.7222" stroke="#404040" strokeWidth="1.64" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <div className="pop-confirmation-action">
                                <div className="pop-confirmation-action__title">
                                    <p>{title}</p>
                                </div>
                                <div className="pop-confirmation-action__text">
                                    <p>{element}</p>
                                </div>
                                <div className="button-wrap flex flex-sa">
                                    <button className="page-btn page-btn--type8" onClick={() => dispatch(HandleModal({ modal: '', modalData: '' }))}>
                                        <span className="page-btn__inner">
                                            Cancel
                                        </span>
                                    </button>
                                    <button className="page-btn" onClick={onSubmit}>
                                        <span className="page-btn__inner">
                                            Submit
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

TextConfirm.propTypes = {
    modalData: PropTypes.object.isRequired,
}

export default TextConfirm