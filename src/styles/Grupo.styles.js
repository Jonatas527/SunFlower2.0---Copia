import styled from "styled-components"

export const Integrantes = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .home {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    
  }

  .integrantes {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 
    gap: 20px; 
  }

  .integrante {
    flex: 1 1 300px; 
    max-width: 300px;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .integrante img {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  .integrante h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .social-links a {
    font-size: 1.2em;
    color: #555;
    transition: color 0.3s;
  }

  .social-links a:hover {
    color: #000;
  }

  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

   .container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    border-radius: 70px;
  }


`
