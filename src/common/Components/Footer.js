import styled from "styled-components";
import Package from "../../../package.json";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterStyle = styled.footer``;

const Address = styled.address`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  height: 100%;
`;

const Dummy = styled.div``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;
  }
`;

const Creator = styled.div``;

const Mail = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <Address>
        <Dummy></Dummy>
        <Info>
          <div>
            &copy; {Package.description} {Package.version}
          </div>
          <div>
            {new Date().getFullYear()} {Package.author.name} All rights
            reserved.
          </div>
        </Info>
        <Creator>
          <Mail>
            <a
              href={`mailto:${Package.author.email}`}
              title={`${Package.author.email}`}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </Mail>
        </Creator>
      </Address>
    </FooterStyle>
  );
}
