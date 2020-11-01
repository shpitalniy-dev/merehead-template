import React from 'react'

const AlertTemplate = (data) => {

    const renderIcon = () => {
        if (data?.condition === 'error') {
            return <i className="fas fa-exclamation-triangle" />
        } else if (data?.condition === 'success') {
            return <i className="fa fa-check-circle" />
        }
    }
    const renderAlert = () => {
        return (
            <>
                <div className={`notification notification--${data?.condition}`}>
                    <span className="d-flex notification__icon">
                        {renderIcon()}
                    </span>
                    <div className="notification__text">
                        <p>{data.customFields.message}</p>
                    </div>
                    <button className="notification__close" onClick={data.handleClose}>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.5166 7.48096L6.62035 22.3772"
                                stroke="white"
                                strokeWidth="2.71677"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.65332 7.45337L21.5496 22.3496"
                                stroke="white"
                                strokeWidth="2.71677"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </>
        )
    }
    return renderAlert()
}

export default AlertTemplate
