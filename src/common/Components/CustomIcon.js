import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${(props) => props.theme.icon.normal};
  &:hover {
    color: ${(props) =>
      !props["data-is-active"]
        ? props.theme.icon.normal
        : props.theme.icon.hover};
  }
  &:active {
    color: ${(props) =>
      !props["data-is-active"]
        ? props.theme.icon.normal
        : props.theme.icon.active};
  }
  &:disabled {
    color: ${(props) =>
      !props["data-is-active"]
        ? props.theme.icon.normal
        : props.theme.icon.disabled};
  }
`;

function CustomIcon(props) {
  return <CustomFontAwesomeIcon {...props} />;
}

export default CustomIcon;
