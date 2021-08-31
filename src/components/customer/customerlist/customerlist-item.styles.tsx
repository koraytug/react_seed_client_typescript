import styled from "styled-components";

export const Customer = styled.div`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: row; 
  align-items: center;
`;

export const CustomerIconContainer = styled.div<{imageUrl: string}>`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: 50px;
  margin: 10px;
`;


export const CustomerName = styled.span`
  font-weight: bold;
  font-size: medium;
`;

export const CustomerSurname = styled.span`
  font-weight: bold;
  font-size: medium; 
`;

export const CustomerInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
