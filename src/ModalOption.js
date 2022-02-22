import React from 'react'

function ModalOption() {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className='headerOption__icon' src={avatar} alt="nimic" />}
            <div className="headerOption__title">{title}</div>
        </div>
    )
}

export default ModalOption