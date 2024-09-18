"use client";

import { redirect } from "@/model/redirect";
import ProfilePage from "@/pages/ProfilePage";
import React from "react";

const Profile = () => {
  redirect();

  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default Profile;
