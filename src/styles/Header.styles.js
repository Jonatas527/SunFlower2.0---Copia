

import styled from "styled-components";

export const Header = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif; 
  }

  header {
    background-color: #00040D; 
    box-shadow: 0px 3px 10px #464646; 
  }

  .nav-bar img {
    padding: 0;
    height: 65px; 
    width: auto;
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
    margin: 0 15px; /* Margem dos itens do menu */
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
   
    }
`