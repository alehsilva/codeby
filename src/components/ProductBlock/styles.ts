import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  margin: 20px;

  h1 { 
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #333;
  }

  h2 { 
    margin-bottom: 0;
    font-size: 12px;
    color: #ccc;
  }

  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
  }

  h4 {
    font-size: 11px;
    color: red;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;

  border: 1px solid #ccc;
`