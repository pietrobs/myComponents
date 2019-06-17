import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    box-shadow: ${props => props.shadow ? '1px 2px 2px #AAA' : 'none'};
    background-color: ${props => props.background || 'white'};
    padding: 20px;
    margin: ${props => props.horizontal ? `${props.horizontal} 0` : `20px 0px` }
`;

export default Box;