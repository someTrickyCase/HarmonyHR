"use client";

import { redirect } from "@/model/redirect";
import SomePage from "@/pages/SomePage";
import React from "react";

const Files = () => {
  redirect();

  return (
    <div>
      <SomePage title='FILES' />
    </div>
  );
};

export default Files;
