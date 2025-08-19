import { Modal, Typography, Box } from "@mui/material";
import React, { isValidElement } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalComp({ open, handleClose, message, modalHeader, children }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalHeader}
        </Typography>
        <Typography id="modal-modal-description sx={{ mt: 2 }}">
          {message}
        </Typography>
        {children ? children : <div>{children}</div>}
      </Box>
    </Modal>
  );
}

export default ModalComp;
