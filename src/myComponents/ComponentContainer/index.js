import styled from 'styled-components';

const ComponentContainer = styled.div`
    width: 80vw;
    border: 1px solid rgba(0,0,0,.3);
    border-radius: 5px;
    padding: 20px;
    margin: 50px 0px;
    background-color: #FFF;

    @media only screen and (max-width: 600px) {
        width: 95vw;
    }
`;

export default ComponentContainer;