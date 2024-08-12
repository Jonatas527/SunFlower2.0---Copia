import styled from 'styled-components';

export const Container = styled.div`

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.card {
  background-color: #282828;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 250px;
}

.card img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.button {
  background-color: #4285f4;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #3367d6;
}
`;

