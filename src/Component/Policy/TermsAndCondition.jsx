import { useState, useEffect } from "react";

export const TermsAndCondition = () => {
  const [policyContent, setPolicyContent] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        setPolicyContent(data.body);
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  return (
    <div className="w-full md:px-28 lg:px-44 px-2 py-4 my-4">
      <h1 className="text-center md:text-3xl text-2xl text-blue-500  font-semibold  mb-4 underline ">
        Terms & Conditions
      </h1>
      <div
        className="text-lg mt-10 text-black-400"
        dangerouslySetInnerHTML={{ __html: policyContent }}
      ></div>
    </div>
  );
};
