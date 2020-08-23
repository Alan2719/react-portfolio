import React from 'react';
import "../styles/infoContainer.css"

function InfoCont(props) {
    return <div className="container-main">{props.children}</div>
}

export default InfoCont;