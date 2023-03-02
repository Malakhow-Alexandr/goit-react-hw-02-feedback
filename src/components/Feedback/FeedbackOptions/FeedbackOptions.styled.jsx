import styled from '@emotion/styled';

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  background-color: skyblue;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: color 250ms ease, box-shadow 250ms ease;
  &:active {
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
  &:hover {
    color: #fff;
  }
`;
