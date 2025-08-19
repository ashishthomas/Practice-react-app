import React from "react";
import { Box, Container, Typography, Toolbar } from "@mui/material";

function Footer() {
  return (
    <>
      {/* Spacer to prevent content overlap */}
      <Toolbar />

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          py: 3,
          bgcolor: "#333",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="body1">
            Footer-Section &copy; 2025 React-learning All Rights Reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
