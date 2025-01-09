import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import SouthIcon from "@mui/icons-material/South";
import CustomEventCalendar from "./TaxCalendar";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};
export const Calendar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className=" fixed bottom-6 left-6 " onClick={handleOpen}>
        <div className=" transform transition-transform animate-bounce z-50 ml-1 text-yellow-500">
          {/* <p className="text-lg ">Compliance <br /> Calendar</p> */}
          <SouthIcon style={{ fontSize: "50px" }} />
        </div>

        <div className="rounded-full z-50   shadow-sm bg-yellow-500 size-14 flex items-center justify-center  cursor-pointer ">
          <CalendarMonthIcon
            className="text-white-500 "
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>

      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CustomEventCalendar />
          </Box>
        </Modal>
      )}
    </>
  );
};
