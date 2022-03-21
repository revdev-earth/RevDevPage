import styled from "styled-components";

export const Container = styled.section``

export const Section1 = styled.section`


    p{
        margin: auto;
        width: 80%;
    }
`

export const Section2 = styled.section`
    padding: 100px 15%;

    ul {

        li {
            text-align: center;

            div {
                &:first-child{
                    width: 100%;
                    height: 400px;
                    background-color: ${({theme}) => theme.colors.secondary};
                    border-radius: 24px;
                }
                &:last-child{
                    z-index: 2;
                    position: relative;
                    margin: auto;
                    padding: 20px 100px;
                    top: -40px;
                    width: 90%;
                    background-color: ${({theme}) => theme.colors.whitePrimary};
                    box-shadow: 0px 5px 20px -15px #000;
                    border-radius: 24px;

                }
            }
        }
    }
`

export const Section3 = styled(Section1)`


    color: ${({theme}) => theme.colors.whitePrimary};

    h2 {
        padding: 20px;
    }
    
    a { 
        margin: auto;
        padding: 20px;
        width: 200px;
        color: ${({theme}) => theme.colors.whitePrimary};
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid ${({theme}) => theme.colors.whitePrimary};
        transition: .3s all ease-in-out;
        
        &:hover {
            border-radius: 8px;;
            transform: scale(1.05);
            border: 1px solid ${({theme}) => theme.colors.whitePrimary};
            box-shadow: 0px 2px 20px -5px #000;
        }
        
        &:active{
            transform: scaleY(.95);
            box-shadow: 0px 2px 5px -5px #000;
        }

    }
`