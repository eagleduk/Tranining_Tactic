import styled from "styled-components";

const StadiumStyle = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;

function Stadium({ children }) {
  return <StadiumStyle>{children}</StadiumStyle>;
}

export default Stadium;
