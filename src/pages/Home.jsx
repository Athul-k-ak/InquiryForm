import React, { useState } from "react";
import InquiryForm from "../components/InquiryForm";
import ThankYou from "../components/ThankYou";

const Home = () => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="container">
      <br />
      {/* <center><h2>Product Inquiry Form</h2></center> */}
      <br />
      {submittedData ? (
        <ThankYou data={submittedData} />
      ) : (
        <InquiryForm onSubmit={setSubmittedData} />
      )}
    </div>
  );
};

export default Home;
