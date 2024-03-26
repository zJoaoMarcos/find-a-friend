"use client";

import { useAuth } from "@/contexts/auth";
import React from "react";

export default function Profile() {
  const { organization } = useAuth();

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h2>{organization?.name}</h2>

      <div>{organization?.city}</div>
    </div>
  );
}
