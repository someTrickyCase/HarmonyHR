"use client";

import { redirect } from "@/model/redirect";
import SomePage from "@/pages/SomePage";
import React from "react";

const Reports = () => {
  redirect();

  return (
    <div>
      <SomePage title='REPORTS' />
    </div>
  );
};

export default Reports;
