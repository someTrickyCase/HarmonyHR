"use client";

import { redirect } from "@/model/redirect";
import SomePage from "@/pages/SomePage";
import React from "react";

const People = () => {
  redirect();

  return (
    <div>
      <SomePage title='PEOPLE' />
    </div>
  );
};

export default People;
