import React from 'react';
import { Button } from 'antd';

import { Container, Title, Description } from './empty.style';

const EmptyImage = [];
EmptyImage[0] = require('./empty-image.png');
EmptyImage[1] = require('./empty-image-2.png');
EmptyImage[2] = require('./empty-image-3.png');

const EmptyTitle = 'Ué...não encontrei nenhum dado aqui!';

const myEmpty = (props) => (
    <Container style={props.style}>
        <img src={props.image || EmptyImage[0]} alt="Imagem vazia" />
        <Title>{props.title || EmptyTitle}</Title>
        {props.description &&
            <Description>{props.description}</Description>
        }
        {props.button &&
            <Button
                type={"primary"}
                onClick={props.button.action}
            >
                {props.button.text}
            </Button>
        }
    </Container>
)

export default myEmpty;