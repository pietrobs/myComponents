import React from 'react';
import styled from 'styled-components';
import { Icon, Checkbox } from 'antd';

const Container = styled.li`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    padding: 5px;
    margin: 3px 0px;

    .draggable-area{
        max-width: 20px;
        min-width: 20px;
        background-image: radial-gradient(#333 15%, transparent 0);
        background-size: 10px 10px;
        margin-right: 10px;
    }

    .data{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;

        .name{
            flex: 1;
            margin-left: 10px;
        }

        .color{
            width: 20px;
            min-width: 20px;
            height: 20px;
            background-color: lightblue;
            border-radius: 3px;
            align-self: center;
        }

    }

    .actions{
        display: flex;
        flex-direction: row;
        align-self: center;
    
        .icon-area{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;

            :hover{
                background-color: #ddd;
                color: darkblue;
                cursor: pointer;
            }
        }

    }
    
`;

const Item = (props) => {
    return (
        <Container style={props.style}>
            <span className="draggable-area"></span>

            <div className="data">
                <div style={{ display: 'flex' }}>
                    <span className="color"></span>
                    <span className="name">{props.item.name}</span>
                </div>
                <span className="price">125,00</span>
            </div>



            <div className="actions">
                <span className="icon-area">
                    <Checkbox style={{ alignSelf: 'center', margin: 5 }} />
                </span>
                <span className="icon-area">
                    <Icon type="edit" />
                </span>
                <span className="icon-area">
                    <Icon type="delete" />
                </span>
            </div>

        </Container>
    )
}

export default Item;