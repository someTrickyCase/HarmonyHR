"use client";

import { redirect } from "@/model/redirect";
import SomePage from "@/pages/SomePage";
import React from "react";

const Home = () => {
  redirect();

  return (
    <div>
      <SomePage title="HOME" />
    </div>
  );
};

export default Home;
