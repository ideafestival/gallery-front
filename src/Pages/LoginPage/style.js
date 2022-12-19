import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 720px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    flex-direction: column;
    @media screen and (max-width: 720px) {
        width: 100vw;
    }
`;
