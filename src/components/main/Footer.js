import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { spacing } from "@mui/system";

import usePixelPerfect from "../../hooks/usePixelPerfect";
import PPD from "../../utils/PPD";
import QR from ".././../assets/png/qrcode.png";

const Wrapper = styled.div`
  ${spacing};
  background: #ffa3a1;
  text-align: center;
  padding-top: ${PPD(50)};
  padding-bottom: ${PPD(30)};
`;

function Footer() {
  const { PP } = usePixelPerfect();
  return (
    <Wrapper py={1}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt={"QR-code"}
          src={QR}
          style={{ borderRadius: PP(8), width: PP(150) }}
        />
        <Box
          mt={4}
          onClick={() => {
            window.open("mailto:anamariaguzmanh1996@gmail.com?");
          }}
          style={{ marginLeft: PP(50) }}
        >
          <Typography
            color="#fff"
            style={{
              fontFamily: "Vazirmatn, sans-serif",
              cursor: "pointer",
              fontSize: `${PP(30)}`,
            }}
          >
            <span
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              anamariaguzmanh1996@gmail.com
            </span>{" "}
            <br />
            <br />
            Copyright© 2023 - Ana María Guzmán Hoyos
            <br />
          </Typography>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Footer;
