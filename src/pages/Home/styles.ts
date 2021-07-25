import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2% 0;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
  margin-bottom: 2%;
`;

export const SideBar = styled.div`
  display: flex;
  width: 23%;
  height: 100%;
  background: var(--gray-150);
  margin-right: 2%;
`;

export const InfoHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 77%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 55%;
  background: var(--gray-350);
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 45%;
  background: var(--white);

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: justify;
    font-size: 0.9rem;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10%;
  width: 100%;
  height: 100%;
`;

export const Links = styled.a`
  color: var(--brown-900);
  margin-bottom: 1rem;
  font-weight: 600;
  transition: ease 0.2s;
  padding: 2%;

  :hover {
    background: var(--gray-500);
    border-radius: 8px;
    color: var(--white);
  }
`;
