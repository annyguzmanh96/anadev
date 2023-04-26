import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Wrapper = styled.div`
  ${spacing};
  background: #ffa3a1;
  text-align: center;
`;

function Footer() {
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
            variant="h4"
            style={{ fontFamily: "Vazirmatn, sans-serif", cursor: "pointer" }}
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
