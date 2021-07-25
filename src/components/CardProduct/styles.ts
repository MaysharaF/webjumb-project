import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 50%;
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
