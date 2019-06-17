import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
    
    img{
        align-self: center;
        height: ${(props) => props.width || '120px'};
        filter: grayscale(100%);
        opacity: .5;
    }

    @media only screen and (max-width: 600px) {
          width: 80%;
    }
`;

const Title = styled.h1`
    font-size: 14pt;
    color: #444;
`;

const Description = styled.p`
    font-size: 12pt;
    color: #666;
`;

export { Container, Title, Description };