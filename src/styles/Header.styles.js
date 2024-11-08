import styled from "styled-components";

export const Header = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif; 
  }

  header {
    background-color: #00040D;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
    transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(-100%)")};
  }

  header.hidden {
    transform: translateY(-100%);
  }

  header:hover {
    transform: translateY(0);
  }

  .nav-bar img {
    padding: 0;
    height: 65px; 
    width: auto;
    margin-left: 10px;
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
    margin: 0 15px;
    margin-right: 40px;
  }

  .nav-link {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    border: none;
  }

  .nav-link:hover {
    color: #666060;
  }

  .mobile-menu-icon {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 730px) {
    .nav-bar {
      padding: 1.5rem 2rem;
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
`;
