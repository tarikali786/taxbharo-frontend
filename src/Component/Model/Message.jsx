import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const Message = React.memo(({ msg, onClick, color = "#28A745" }) => {
  return (
    <div
      className={`fixed top-24 right-4 bg-[${color}] z-50 text-white-500 rounded-lg px-4 py-4 `}
    >
      <p className="relative pr-10">
        {msg}
        <HighlightOffIcon
          onClick={onClick}
          className="absolute top-0 right-0 cursor-pointer  "
          style={{ width: "24px", height: "24px" }}
        />
      </p>
    </div>
  );
});

Message.displayName = "Message";
