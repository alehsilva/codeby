import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  width: 400px;
  height: 80px;

  div { 
    width: 45%;
    height: 100%;

    border: 1px solid #555;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }
`;