import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { memo, useEffect } from "react";

export const Disclaimer = memo(({ onClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-2 md:px-12 py-6   overflow-y-auto">
      <div className="bg-white-500 shadow-lg w-full  md:max-w-[70%] rounded-lg max-h-screen overflow-y-auto">
        <div className="relative p-4 md:px-12 md:py-10">
          <h1 className="text-2xl font-bold text-center text-black mb-8">
            Disclaimer
          </h1>
          <HighlightOffIcon
            onClick={onClick}
            className="absolute top-4 right-4 cursor-pointer transform transition-transform  animate-bounce hover:scale-110"
            style={{ width: "36px", height: "36px" }}
          />
        </div>

        <div className="p-4 text-black ">
          <p className="text-lg">
            The information contained in this website is for general information
            purposes only. The information is provided by www.taxbharo.in, a
            property of Taxbharo. While we endeavour to keep the information up
            to date and correct, we make no representations or warranties of any
            kind, express or implied, about the completeness, accuracy,
            reliability, suitability or availability with respect to the website
            or the information, products, services, or related graphics
            contained on the website for any purpose. Any reliance you place on
            such information is therefore strictly at your own risk.
          </p>
          <br />
          <p className="text-lg">
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>
          <br />
          <p className="text-lg">
            Through this website you are able to link to other websites which
            are not under the control of Taxbharo. We have no control over the
            nature, content and availability of those sites. The inclusion of
            any links does not necessarily imply a recommendation or endorse the
            views expressed within them.
          </p>
          <br />
          <p className="text-lg">
            Every effort is made to keep the website up and running smoothly.
            However, Taxbharo takes no responsibility for, and will not be
            liable for, the website being temporarily unavailable due to
            technical issues beyond our control.
          </p>
        </div>
      </div>
    </div>
  );
});

Disclaimer.displayName = "Disclaimer";
