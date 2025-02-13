import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { toast } from "react-toastify";
import axios from "axios";
import { donateDoingData, donateMatterData } from "../../../data/data";
export const Donate = () => {
  const [donateValue, setDonateValue] = useState({
    order_id: "ORD134",
    billing_name: "",
    billing_email: "",
    amount: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChange = ({ target: { name, value } }) => {
    setDonateValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleAmount = (amount) => {
    setDonateValue((prev) => ({ ...prev, amount }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const api = "https://api.taxbharo.in/ccavRequestHandler";
      const response = await axios.post(api, donateValue, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response?.data?.data) {
        submitCCForm(response?.data?.data);
      } else {
        alert("Failed to initiate payment");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while initiating the payment. Please try again."
      );
    }
  };

  const submitCCForm = (encRequestData) => {
    const access_code = "AVIK49MA24CA22KIAC";
    const merchant_id = "3371562";

    // Dynamically create a form
    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

    // Add hidden fields to the form
    const merchantIdInput = document.createElement("input");
    merchantIdInput.type = "hidden";
    merchantIdInput.name = "merchant_id";
    merchantIdInput.value = merchant_id;
    form.appendChild(merchantIdInput);

    const encRequestInput = document.createElement("input");
    encRequestInput.type = "hidden";
    encRequestInput.name = "encRequest";
    encRequestInput.value = encRequestData; // Encrypted request data from backend
    form.appendChild(encRequestInput);

    const accessCodeInput = document.createElement("input");
    accessCodeInput.type = "hidden";
    accessCodeInput.name = "access_code";
    accessCodeInput.value = access_code;
    form.appendChild(accessCodeInput);

    // Append the form to the body and submit it
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="w-full md:px-10 lg:px-16 xl:px-44 px-6 py-14">
      {/* Hero section */}
      <div className="flex gap-4 items-center justify-between md:flex-row flex-col">
        <div className="md:w-1/2 w-full ">
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-500">
            Help Us Care for Street Animals – Donate to Taxbharo
          </h1>
          <p className="mt-3 text-lg">
            At *Taxbharo*, we believe all living beings deserve love and care.
            Street animals, like dogs and cats, are often ignored and suffer on
            our streets. Many are abandoned pets, some are victims of unethical
            breeders, and others struggle daily just to survive. But with your
            help, we can change their lives.
          </p>
        </div>
        <div className="md:w-[40%] md:h-[40vh] h-[30vh] w-full">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className=" object-fill rounded-xl"
          />
        </div>
      </div>
      {/* Form */}

      <div className="flex  gap-4 items-center justify-between mt-10">
        <div className="md:w-[40%] h-[50vh] md:block hidden">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className=" object-fill rounded-xl"
          />
        </div>

        <form onSubmit={handleSubmitForm} className=" mt-2 md:w-[40%]">
          <h1 className="text-xl font-semibold text-center text-blue-500">
            {" "}
            Donate Today
          </h1>
          <p className="mt-1 mb-6">
            Your kindness can bring hope to these voiceless companions.{" "}
          </p>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            required
            type="text"
            onChange={handleChange}
            name="billing_name"
            value={donateValue?.billing_name}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            required
            sx={{ marginY: "1rem" }}
            onChange={handleChange}
            name="billing_email"
            value={donateValue?.billing_email}
          />
          <div>
            <TextField
              id="outlined-basic"
              label=" Donation Amount"
              variant="outlined"
              fullWidth
              type="number"
              required
              onChange={handleChange}
              name="amount"
              value={donateValue?.amount}
            />
            <div className="flex gap-4 mt-4">
              {[500, 1000, 2500, 5000].map((amount) => (
                <Button
                  key={amount}
                  variant={
                    donateValue.amount === amount.toString()
                      ? "contained"
                      : "outlined"
                  }
                  color="primary"
                  onClick={() => handleAmount(amount.toString())}
                >
                  ₹{amount}
                </Button>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white-500 w-full py-3  rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Donate Now
            </button>
          </div>{" "}
        </form>
      </div>

      {/* Why Street Animals Matter*   */}
      <div className="mt-16">
        <h1 className="text-2xl md:text-3xl text-blue-500 font-semibold text-center">
          Why Street Animals Matter
        </h1>
        <div className=" grid md:grid-cols-3 mt-10 gap-6 ">
          {donateMatterData?.map((item, index) => (
            <div className=" shadow-lg px-3 py-3 rounded-xl " key={index}>
              <div className="size-12">
                <img src={item?.icon} alt="" />
              </div>
              <h2 className="mt-4 mb-2 text-lg  text-blue-500 font-semibold">
                {item?.title}
              </h2>
              <p>{item?.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h1 className=" text-2xl md:text-3xl text-blue-500 font-semibold text-center">
          What We Are Doing
        </h1>
        <div className=" grid md:grid-cols-3 mt-10 gap-6 ">
          {donateDoingData?.map((item, index) => (
            <div className=" shadow-lg px-3 py-3 rounded-xl " key={index}>
              <div className="size-12">
                <img src={item?.icon} alt="" />
              </div>
              <h2 className="mt-4 mb-2 text-lg  text-blue-500 font-semibold">
                {item?.title}
              </h2>
              <ul className=" list-disc pl-5 ">
                <li>{item?.content1}</li>
                {item?.content2 && <li> {item?.content2}</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <div className="mt-16  ">
        <h1 className="text-2xl text-center mb-1 md:text-3xl text-blue-500 font-semibold ">
          How Your Donation Helps
        </h1>
        <div className="mt-8 flex md:flex-row  flex-col-reverse items-center">
          <div className="md:w-1/2">
            <p className="text-xl  font-semibold">Your contribution will</p>
            <ul className=" list-disc pl-3 mt-3 flex flex-col gap-2 ">
              <li>
                Feed more animals <b>₹20 per meal</b>
              </li>
              <li>
                Rescue abandoned pets and cover medical expenses{" "}
                <b>₹2,000–₹5,000 per animal</b>
              </li>
              <li>Support sterilization and adoption programs. </li>
              <li>
                Build awareness about street animals and responsible pet
                ownership.
              </li>
            </ul>
          </div>
          <div className="md:w-[40%] md:h-[40vh] h-[30vh] w-full">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className=" object-fill rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-16  ">
        <h1 className="text-2xl text-center mb-1 md:text-3xl text-blue-500 font-semibold ">
          Where Your Money Goes
        </h1>
        <div className="mt-8 flex md:flex-row  flex-col-reverse items-center">
          <div className="md:w-1/2">
            <p className="text-xl  font-semibold">We ensure transparency </p>
            <ul className=" list-disc pl-3 mt-3 flex flex-col gap-2 ">
              <li>
                <b>50%</b> funds Taxbharo’s work, like feeding and rescuing
                animals.
              </li>
              <li>
                <b>50%</b> is donated to trusted animal welfare organizations,
                such as
                <p className="my-2">
                  - <b>Blue Cross of Hyderabad </b> for rescues and
                  sterilizations.{" "}
                </p>
                <p>
                  - <b>People for Animals Hyderabad </b> for adoption and
                  rehabilitation programs.
                </p>
              </li>
            </ul>
          </div>
          <div className="md:w-[40%] md:h-[40vh] h-[30vh] w-full">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className=" object-fill rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex md:flex-row  flex-col-reverse ">
        <div className="md:w-1/2">
          <h1 className="text-2xl mb-1 md:text-3xl text-blue-500 font-semibold ">
            What You Can Do
          </h1>
          <ul className=" list-disc pl-3 mt-3 flex flex-col gap-2 ">
            <li>
              <b>₹100</b> can feed 5 animals.
            </li>
            <li>
              <b>₹1000</b> can vaccinate an abandoned pet.
            </li>
            <li>
              <b>₹5000</b> can save and treat an injured animal.
            </li>
          </ul>
        </div>
        <div className="md:w-[40%] md:h-[40vh] h-[30vh] w-full">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className=" object-fill rounded-xl"
          />
        </div>
      </div>

      <div className=" mt-16 text-center">
        <h1 className="text-2xl text-center mb-2 md:text-3xl text-blue-500 font-semibold ">
          Why It Matters
        </h1>
        <p className="text-lg">
          Street animals are not just strays; they are forgotten family members,
          innocent souls discarded due to human neglect. Together, we can change
          their lives and give them the second chance they deserve.
        </p>
      </div>
    </div>
  );
};
