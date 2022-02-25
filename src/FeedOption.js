import React from 'react';

function ModalOption({ Icon, title, color }) {
    return (
        <div className="feedOption">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default ModalOption