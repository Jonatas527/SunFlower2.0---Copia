import styled from "styled-components";

export const Conteudo = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif; 
  }

  header {
    background-color: #00040D; 
    
  }

   
  .nav-bar img {
    padding: 0;
    height: 65px; 
    width: auto;
    margin-left:10px;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 0; 
    align-items: center;
  }

  .nav-list {
    display: flex;
    align-items: center;
    
  }

  .nav-list ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .nav-item {
    margin: 0 15px;  /* Margem dos itens do menu */
    margin-right: 40px;
  }

  .nav-link {
    text-decoration: none;
    font-size: 20px; /* Tamanho da fonte dos links do menu */
    color: #fff; /* Cor dos links do menu */
    font-weight: 400;
    cursor: pointer; /* Cursor de ponteiro */
    border: none; /* Sem borda */
  }
  .nav-link:hover {
    color:  #666060;
  }



  .mobile-menu-icon {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .home {
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
    font-size:  50px; /* Tamanho da fonte no desktop */
  }

  .home p {
    margin: 0 auto;
    font-size: 25px; /* Tamanho da fonte no desktop */
    max-width: 700px;
  }

  @media screen and (max-width: 730px) {
    .nav-bar {
      padding: 1.5rem 2rem; /* Ajusta o padding para telas menores */
    }
    .nav-item {
      display: none;
    }

    .mobile-menu-icon {
      display: block;
    }
    .mobile-menu-icon button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    .mobile-menu ul {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-bottom: 1rem;
    }
    .mobile-menu .nav-item {
      display: block;
      padding-top: 1.2rem;
    }


    .open {
      display: block;
    }

    .home h1 {
      margin: 0 auto;
      font-size: 2.2rem 
    }

    .home p {
      margin: 0 auto;
      font-size: 1.7rem; 
      max-width: 100%;
    }
  }
`

export const Video = styled.div`
  .short-video {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  @media (max-width: 730px) {
    .short-video {
      width: 100%;
      height: auto;
      flex-direction: column;
      align-items: center;
    }
    .short-video iframe {
      width: 100%;
      height: auto;
      max-width: 300px; 
    }
  }
`
  
