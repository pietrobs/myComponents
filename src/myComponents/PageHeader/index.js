import { Icon } from 'antd';
import React from 'react';
import Container from './pageHeader.style';

const PageHeader = ({ title, buttons, backLinkText, backLinkTo }) => (
    <Container>
        <div className="title-wrapper">
            {backLinkText && (
                //Alterar A por LINK quando houver o react-router-dom
                <a className="back-link" to={backLinkTo}>
                    <Icon type="left" /> {backLinkText}
                </a>
            )}
            <h1>{title}</h1>
        </div>
        {buttons && <div className="buttons-wrapper">{buttons}</div>}
    </Container>
);

export default PageHeader;
