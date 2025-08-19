import React, { useState } from "react";
import CommonModal from "../ReUseComp/ModalComp";

function MUI_Component() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button className="btn btn-primary m-2 " onClick={handleOpen}>
        Open modal
      </button>
      <CommonModal
        open={open}
        handleClose={handleClose}
        message="Modal Test Design"
        modalHeader="Modal Header"
      >
        <h1>This is Modal</h1>
      </CommonModal>
    </div>
  );
}

export default MUI_Component;
