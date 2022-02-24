import React from 'react';
import './ModalOption.css';

function ModalOption({ Icon, title, color }) {
    return (
        <div className="modalOption">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default ModalOption