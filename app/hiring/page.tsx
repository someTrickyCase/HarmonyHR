"use client";

import { redirect } from "@/model/redirect";
import SomePage from "@/pages/SomePage";
import React from "react";

const Hiring = () => {
  redirect();
  return (
    <div>
      <SomePage title='HIRING' />
    </div>
  );
};

export default Hiring;
