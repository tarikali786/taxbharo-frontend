import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { post } from "../Hook/api";

export const BugBounty = ({ setShowBug }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setShowBug(false);
  };

  const [discountValue, setDiscountValue] = useState({
    name: "",
    email: "",
    bugFound: "",
    image: null,
    remark: "",
  });

  const [loading, setLoading] = useState(false);

  const handleDiscountOnChange = ({ target }) => {
    const { name, value, files } = target;
    if (name === "image" && files) {
      setDiscountValue((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setDiscountValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDiscountSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData instance and append fields correctly
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: discountValue.name,
        email: discountValue.email,
        bugFound: discountValue.bugFound,
        remark: discountValue.remark,
      })
    );

    if (discountValue.image) {
      formData.append("files.image", discountValue.image);
    }

    try {
      const res = await post("/bug-bounties", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res?.data) {
        toast.success(
          "Thank you! Your bug report has been successfully submitted."
        );
        handleClose();
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error submitting bug report:", error);
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
      <Box className="absolute w-[90%] md:w-[460px] top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-500 py-8 px-6 rounded-xl shadow-2xl">
        <h1 className="text-xl md:text-2xl text-blue-500 font-bold text-center text-black mb-8">
          Bug Bounty
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
            label="Email ID"
            variant="outlined"
            required
            name="email"
            onChange={handleDiscountOnChange}
            value={discountValue.email}
          />
          <TextField
            label="Bug Found"
            variant="outlined"
            required
            name="bugFound"
            onChange={handleDiscountOnChange}
            value={discountValue.bugFound}
          />
          <div className="flex flex-col border px-2 py-2 rounded-md border-black-100">
            <label htmlFor="image" className="mb-1 text-black-300">
              Screenshot *
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleDiscountOnChange}
              required
            />
          </div>

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
