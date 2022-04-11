import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        
        
            top: 0;
            left: 0;
        &:last-child {
        top: auto;
        left: auto;
        right: 0;
        bottom: 0;
        }
    }

    @media (max-width: 800px){
        &:after {
            width: 200px;
            height: 200px;
            top: auto;
            
            bottom: -60px;
        }

        img {
        width: 30%;
        }
    }
    
    @media (max-width: 400px){
        &:after {
            width: 150px;
            height: 150px;
            top: auto;
            bottom: -50px;
        }
        img {
        width: 50%;
        }
        
    }
`