import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { memo, useEffect } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

export const Disclaimer = memo(({ open, setOpen }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[98%] md:w-3/4 h-[85vh] md:h-[75vh] overflow-y-auto bg-white-500 shadow-md border-none  px-8 py-4 rounded-lg">
          <div className=" ">
            <div className="relative">
              <h1 className="text-2xl font-bold text-center text-black mb-8">
                Disclaimer
              </h1>
              <HighlightOffIcon
                onClick={handleClose}
                className="absolute top-4 right-4 cursor-pointer transform transition-transform  animate-bounce hover:scale-110"
                style={{ width: "36px", height: "36px" }}
              />
            </div>

            <div className=" text-black ">
              <p className="text-lg">
                The information contained in this website is for general
                information purposes only. The information is provided by
                www.taxbharo.in, a property of Taxbharo. While we endeavour to
                keep the information up to date and correct, we make no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability or
                availability with respect to the website or the information,
                products, services, or related graphics contained on the website
                for any purpose. Any reliance you place on such information is
                therefore strictly at your own risk.
              </p>
              <br />
              <p className="text-lg">
                In no event will we be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage, or
                any loss or damage whatsoever arising from loss of data or
                profits arising out of, or in connection with, the use of this
                website.
              </p>
              <br />
              <p className="text-lg">
                Through this website you are able to link to other websites
                which are not under the control of Taxbharo. We have no control
                over the nature, content and availability of those sites. The
                inclusion of any links does not necessarily imply a
                recommendation or endorse the views expressed within them.
              </p>
              <br />
              <p className="text-lg">
                Every effort is made to keep the website up and running
                smoothly. However, Taxbharo takes no responsibility for, and
                will not be liable for, the website being temporarily
                unavailable due to technical issues beyond our control.
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
});
Disclaimer.displayName = "Disclaimer";
