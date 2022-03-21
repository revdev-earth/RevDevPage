import styled from "styled-components";

export const Container = styled.section``


export const Section2 = styled.section`
    padding: 100px 15%;

`

export const Section3Content = styled.div`
    h2 {
        padding: 20px;
        color: ${({theme}) => theme.colors.whitePrimary};
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
export const Section4 = styled.div`
    padding: 100px 10%;
    display: flex;

    div {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 10px;

        &:nth-child(1){
            padding-right: 100px;
        }
        
        &:last-child{
            position: relative;

            h4 {
                color: ${({theme}) => theme.colors.secondary}
            }

            img{
                
                z-index: 2;
                
                &:nth-child(2){
                    z-index: 1;
                    position: absolute;
                    right: 0;
                    width: 200px;
                }
            }

        }
    }
`