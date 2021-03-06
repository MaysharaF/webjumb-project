import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 21rem;

  @media only screen and (max-width: 1440px) {
    height: 19rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ImageItem = styled.div`
  width: 100%;
  height: 68%;
  padding: 5%;
  border: 1px solid var(--gray-150);

  @media only screen and (max-width: 1440px) {
    height: 60%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LabelCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export const ProductName = styled.div`
  ${LabelCSS}

  span {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--gray-500);
  }

  @media only screen and (max-width: 1440px) {
    height: 15%;
    span {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

export const Price = styled.div`
  ${LabelCSS}

  span {
    font-weight: 800;
    color: var(--red-600);
  }
`;

export const ButtonBuy = styled.button`
  ${LabelCSS}
  height: 12%;
  background: tomato;
  border-radius: 5px;
  font-weight: 800;
  color: var(--white);
  background: var(--teal-200);
  text-transform: uppercase;
  transition: ease 0.2s;

  :hover {
    background: var(--teal-350);
  }
`;
