import styled from "styled-components";

export function play(fn, ms = 2000) {
  return new Promise((resolve, reject) => {
    if (typeof fn === "function") fn();
    setTimeout((e) => {
      resolve();
    }, ms);
  }).catch((err) => console.log("play ", err));
}

export function tacticsActions(locations, references) {
  return locations.map((position) => {
    return references.map((reference, index) => {
      return {
        target: reference,
        action: (reference) => {
          const [left, top] = position?.[index];
          reference.style.left = `${left}%`;
          reference.style.top = `${top}%`;
        },
      };
    });
  });
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ContainerFormat = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled(ContainerFormat)``;

export const FooterContainer = styled(ContainerFormat)`
  height: 35px;
  color: ${(props) => props.theme.footer.borderColor};
  border-radius: 4px;
  border: 1px solid;
  padding: 4px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.footer.hoverColor};
  }
`;
