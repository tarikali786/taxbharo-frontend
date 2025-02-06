import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
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
  const [calShow, setCalShow] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseShowText = (e) => {
    e.stopPropagation();
    setCalShow(false);
  };
  return (
    <>
      <div className=" fixed bottom-6 left-6 " onClick={handleOpen}>
        {calShow && (
          <div
            className=" relative transform transition-transform animate-bounce z-50 ml-1 mb-3 bg-yellow-500 w-[140px] 
          px-2 py-1 text-blue-600 *:-translate-x-1/2 rounded-md  rounded-bl-none "
          >
            Lorem ipsum dolor sit amet.
            <ArrowDropDownIcon
              className="  absolute -bottom-[33px] left-[12px]   text-yellow-500 "
              style={{ fontSize: "58px" }}
            />
            <CloseIcon
              onClick={handleCloseShowText}
              className="  absolute top-1 -right-2  cursor-pointer hover:text-white-500  text-black-500 "
              style={{ fontSize: "20px" }}
            />
          </div>
        )}

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
