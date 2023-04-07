import styled from 'styled-components';

export const ModalWrapp = styled.div`
z-index: 1;
  position: absolute;
  top: 0;
  left: 50%;
    transform: translate(-50%, -50%);
  

  min-width: 250px;
  min-height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  background-color: #ff1a1a;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
`;

export const BtnY = styled.button`
border-radius:50%;
cursor: pointer;
width: 25px;
height: 25px;
border: none;
&:hover{
    scale:1.05;
}
`
export const BtnN = styled.button`
border-radius:50%;
cursor: pointer;
width: 25px;
height: 25px;
border: none;
 &:hover{
    scale:1.05;
}`