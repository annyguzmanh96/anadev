import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import usePixelPerfect from "../../hooks/usePixelPerfect";

const Wrapper = styled.div`
  ${spacing};
  background: #ffa3a1;
  text-align: center;
`;

function Footer() {
  const { PP } = usePixelPerfect();
  return (
    <Wrapper py={1}>
      <Container>
        <Box
          mt={4}
          onClick={() => {
            window.open("mailto:anamariaguzmanh1996@gmail.com?");
          }}
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
