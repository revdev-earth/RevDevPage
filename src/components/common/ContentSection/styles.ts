import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 100px 20%;
    background-color: ${({theme}) => theme.colors.secondary};
    text-align: center;
    color: ${({theme}) => theme.colors.primary};

    &:after {
        position: absolute;
        content: "";
        top: 40%;
        left: -8%;
        width: 400px;
        height: 400px;
        background-color: #fdfdff63;
        border-radius: 100%;
    }

    img {
        z-index: 1;
        position: absolute;
        width: 22%;
        
        &:nth-child(3) {
            top: 0;
            left: 0;
        }
        
        &:last-child {
            
        right: 0;
        bottom: 0;
        }
    }
`