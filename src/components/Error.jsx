import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #511c19;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
  box-shadow: -1px 1px 4px rgb(255 255 255 / 9%)
`;
const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
