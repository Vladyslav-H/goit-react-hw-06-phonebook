import styled from 'styled-components';

export const Button = styled.button`
  min-width: 50px;
  height: 20px;
  margin-left: 20px;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 5px;
  color: #fff;
  background-color: red;

  box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.5);
  transition: transform 250ms linear, color 250ms linear,
    background-color 250ms linear;

  &:hover {
    color: red;
    background-color: #fff;
    border: 2px solid red;
    font-weight: 600;
    transform: scale(1.1);
  }
`;

export const ContactItemStyled = styled.li`
  position: relative;
      min-width: 300px;
  height: 30px;
  display: flex;
  justify-content: space-between;
align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 0px 11px -5px rgba(0,0,0,0.75);

  &:nth-child(4n + 1) {
    background-color: #c4dfe6;
    color:#003b46;
  }
  &:nth-child(4n + 2) {
    background-color: #66a5ad;
    color:#07575b;
  }
  &:nth-child(4n + 3) {
    background-color: #07575b;
    color: #66a5ad;
  }
  &:nth-child(4n + 4) {
    background-color: #003b46;
    color:#c4dfe6;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
