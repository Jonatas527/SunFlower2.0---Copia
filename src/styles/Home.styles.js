import styled from "styled-components"


export const Conteudo = styled.div`
    header {
        position: fixed;
        background: ${props => props.theme.HomeCorFundo};
        padding: 5px 10px; 
        width: 100%;
        z-index: 1000;
        height: 50px; 
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%; 
    }
    ul {
        display: flex;
        padding: 0; 
        list-style-type: none;
        margin: 0;
    }
    li {
        color: #ffff;
        margin: 0 20px;
        font-size: 20px; 
        cursor: pointer;
        transition: color 0.3s ease;
    }
    li:hover {
        color: #938E8E;
    }
    .logo {
        padding: 0;
        height: 50px; 
        width: auto;
    }
    .home {
        font-size: 2rem;
        margin-bottom: 3rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;
        color: #DFDEFF;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 80px;
        padding: 0 20px;
    }
    .home h1 {
        margin: 0 auto;
        max-width: 800px;
    }
    .home p {
        margin: 0 auto;
        font-size: 2.5rem;
        max-width: 700px;
    }
    a {
        text-decoration: none;
    }
    .grup{
        color: #ffff;
        margin: 0 20px;
        font-size: 20px; 
        cursor: pointer;
        transition: color 0.3s ease;
    }
    
`

export const Video = styled.div`

 .short-video{
    display: flex;
    justify-content: center;
    padding-top: 20px;
 }

`
