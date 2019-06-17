import React from 'react';

import { Container } from './List.style';
import ListItem from './List.item.js'

const List = (props) => {
    console.log("LISTA:", props);

    return (
        <Container style={props.style}>
            <ul>
                {
                    props.items.map((item) => (
                        <ListItem item={item} />
                    ))
                }
            </ul>
        </Container>
    )
}

export default List;