import React from "react";
function page({ params }) {
  return (
    <>
      <h1>this is my {params.page_no} blog</h1>
    </>
  );
}

export default page;
