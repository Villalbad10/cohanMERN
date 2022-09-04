import styled from "styled-components";

export const colores = {
  fondo: "#E5E5E5",
};

export const ContainerLogin = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
`;

export const OptionLogin = styled.div`
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 4rem;
  padding-left: 4%;
  padding-right: 4%;
  height: 100%;
  width: 50%;
  h2 {
    padding-top: 20%;
    font-weight: 800;
  }
`;

export const ContFrom = styled.div`
  Button {
    background-color: #518ef8;
    border-radius: 1.5rem !important;
    border: 1px solid #518ef8;
    font-weight: 800;
    width: 100%;
  }
  Button:hover {
    background-color: #8699da;
    border: 1px solid #8699da;
  }
`;

export const LogoLogin = styled.div`
  height: 100%;
  width: 50%;

  img {
    padding-top: 8%;
    width: 80%;
  }
`;
