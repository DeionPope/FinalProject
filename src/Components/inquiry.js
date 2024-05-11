import React from "react";
import InquiryContainer from "./inquiryContainer";

const Apply = () => {
  return (
    <div>
      <h1 className="box-shadow-md">Application Form</h1>
      <InquiryContainer />
    </div>
  );
};

export default Apply;

//Most of the code for this page is in the ApplyContainer.  This page is where buyers will fill out an application and CRUD operations take place.