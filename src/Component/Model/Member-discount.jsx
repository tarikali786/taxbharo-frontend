import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { post } from "../Hook/api";
import axios from "axios";

export const MemberDiscount = ({ setMemberShow }) => {
  const [open, setOpen] = useState(true); // Ensure open state exists
  const handleClose = () => {
    setOpen(false);
    setMemberShow(false);
  };

  const [discountValue, setDiscountValue] = useState({
    name: "",
    email: "",
    phone: "",
    remark: "",
  });

  const [loading, setLoading] = useState(false);

  const handleDiscountOnChange = ({ target }) => {
    const { name, value } = target;
    setDiscountValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDiscountSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await post("/member-discounts", { data: discountValue });
      console.log(res);

      if (res?.data) {
        toast.success(
          "Thank you! Your request for a member discount has been successfully submitted."
        );
        handleClose();
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error submitting discount request:", error);
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute w-[90%] md:w-[450px] top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-500 py-8 px-6 rounded-xl shadow-2xl">
        <h1 className="text-xl md:text-2xl text-blue-500 font-bold text-center text-black mb-8">
          Member Discounts
        </h1>

        <form onSubmit={handleDiscountSubmit} className="flex flex-col gap-4">
          <TextField
            label="Name"
            variant="outlined"
            required
            name="name"
            onChange={handleDiscountOnChange}
            value={discountValue.name}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            required
            name="phone"
            onChange={handleDiscountOnChange}
            value={discountValue.phone}
          />
          <TextField
            label="Email ID"
            variant="outlined"
            required
            name="email"
            onChange={handleDiscountOnChange}
            value={discountValue.email}
          />
          <TextField
            label="Query/Remarks"
            variant="outlined"
            multiline
            minRows={4}
            name="remark"
            onChange={handleDiscountOnChange}
            value={discountValue.remark}
          />
          <button
            type="submit"
            className={`bg-blue-500 py-3 text-white-500 font-semibold rounded-md ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </Box>
    </Modal>
  );
};
