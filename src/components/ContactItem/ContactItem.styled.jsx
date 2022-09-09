import styled from 'styled-components';

export const ItemLi = styled.li`
  font-family: 'Roboto', sans-serif;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  list-style: inside;
`;

export const Button = styled.button`
  cursor: pointer;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  border-radius: 4px;
  border-color: rgb(95, 149, 183);
  &:active {
    box-shadow: rgb(95, 149, 183) 0px 13px 27px -5px,
      rgb(95, 149, 183) 0px 8px 16px -8px;
    background-color: rgb(139, 173, 194);
  }
`;

export const Link = styled.a`
  list-style: none;
  font-style: italic;
  font-size: large;
  color: black;
  &:hover {
    background-color: #ebf1f3;
    font-weight: 700;
  }
`;
export const Img = styled.img`
  border-radius: 4px;
  padding-right: 4px;
  height: auto;
`;
