import { useEffect, useState } from "react";
import { SkeletonLoading } from "../Common/Skeleton";

export const BlogDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full md:my-8 md:px-28 lg:px-44  px-2 py-4 flex justify-between gap-2 md:flex-row flex-col-reverse ">
      <div className="md:w-2/3">
        <div className="w-full h-48 md:h-96 my-4">
          {isLoading && <SkeletonLoading />}
          <img
            className="w-full h-full object-fill rounded-md"
            src={
              "https://taxbharo-images.s3.us-east-1.amazonaws.com/blogs/1716353749919.png"
            }
            alt="Service"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <h1 className=" text-xl md:text-3xl font-bold text-blue-500 my-6">
          What is Public Limited Company?
        </h1>
        <p>
          A Public Limited Company (PLC) is a type of business entity with
          shares offered to the general public, often listed on a stock
          exchange. This structure allows companies to raise substantial capital
          from public investors, which can be pivotal for large-scale ventures.
          Key Characteristics of a Public Limited Company 1. Directors: To
          establish a Public Limited Company, the Companies Act, 2013 mandates a
          minimum of three directors. However, there is no cap on the maximum
          number of directors, providing flexibility in governance. 2. Limited
          Liability: Shareholders of a Public Limited Company enjoy limited
          liability. This means they are only liable for the company’s debts up
          to the amount they have invested. Unlike partnerships or sole
          proprietorships, shareholders’ personal assets are generally
          protected. However, they are still accountable for any illegal actions
          they may personally undertake. 3. Paid-up Capital: A Public Limited
          Company requires a minimum paid-up capital of ₹5 lakhs (or a higher
          amount as prescribed by law). This threshold underscores the company's
          ability to manage substantial financial responsibilities. 4.
          Prospectus: A PLC must issue a prospectus when offering shares to the
          public, as required by the Companies Act. This document outlines the
          company's business details and potential risks. In contrast, Private
          Limited Companies do not have this requirement since they cannot
          publicly solicit investments. 5. Name Requirement: As per the
          Companies Act, 2013, the name of a Public Limited Company must end
          with “Limited,” indicating its corporate structure. Advantages of a
          Public Limited Company Increased Capital: By offering shares to the
          public, PLCs can attract a broad range of investors, significantly
          boosting their capital reserves. Enhanced Visibility and Trust:
          Listing on the stock exchange can attract institutional investors like
          mutual funds, bringing greater credibility and visibility, which may
          lead to new business opportunities. Risk Diversification: Public
          ownership allows a broader distribution of market risks, as shares are
          widely held among various investors. Growth and Expansion: With access
          to public funding, PLCs can invest in new projects, promoting growth
          and expansion. Registration Requirements for a Public Limited Company
          To register a Public Limited Company, one must follow specific
          guidelines outlined by the Companies Act, 2013: Minimum seven
          shareholders and three directors are required. A minimum paid-up
          capital of ₹5 lakhs is mandatory. Obtain a Digital Signature
          Certificate (DSC) and Director Identification Number (DIN) for
          directors. Apply for the company name and submit necessary documents,
          including the Memorandum of Association (MOA) and Articles of
          Association (AOA), to the Registrar of Companies (ROC). Complete forms
          DIR-12, INC-7, and INC-22 as part of the registration. After ROC
          approval, apply for a ‘Certificate of Business Commencement.’
        </p>
      </div>
      <div>
        <p>
          <b> Related Services </b> <br />
          This feture is Coming Soon
        </p>
      </div>
    </div>
  );
};
