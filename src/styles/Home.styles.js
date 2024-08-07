import styled from "styled-components"

export const HeaderHome = styled.div`
    header {
        position: fixed;
        
        padding: 20px;
        width: 100%;
        z-index: 1000;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        display: flex;
        padding: 20px;
        list-style-type: none;
        margin: 10px;
    }
    li {
        color: #ffff;
        margin: 0 20px;
        font-size: 22px;
        cursor: pointer;
        transition: color 0.3 ease;
    }
    li:hover {
        color: #000;
    }
    .logo{
        padding: 0;
        height: 60px;
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
    .home h1{
        margin: 0 auto;
        max-width:800px;
      
    }
    .home p {
        margin: 0 auto;
        font-size: 2.5rem;
        max-width:700px;
    }



`