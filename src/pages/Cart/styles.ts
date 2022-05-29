import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  width: 500px; 
  height: 500px; 
  padding-bottom: 250px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Heebo', sans-serif;
  line-height: 1;
  font-size: 25px;
  font-weight: 700;
  color: #333;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
`;

export const Products = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 440px;
`;

export const TotalProducts = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: auto;

  span { 
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin-left: 20px;
  }

  h1 { 
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin-right: 20px;
  }
`;

export const Total = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ButtonBuy = styled.button`
  cursor: pointer;
  position: absolute;
  left: 25px;
  right: 0;
  bottom: 30px;

  height: 60px;
  width: 90%;
  border: none;
  border-radius: 10px;

  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: #3C74F2;

  &:hover {
    background-color: #3b59ef;
  }

  &:active {
    background-color: #34559b;
  }
`;

export const FreeShipping = styled.div`
  width: 70%;
  height: 40px;

  background-color: #ADF0A0;
  color: #418818;
  border-radius: 30px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;