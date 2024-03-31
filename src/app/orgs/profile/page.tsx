"use client"

import { Organization } from "@/@types/Organzation";
import { UpdateProfileForm } from "@/components/Forms/Organization/UpdateProfileForm";
import { getOrganizationProfile } from "@/services/orgs";
import React from "react";

export default function Profile() {
  // turn component to server component with request sendding access token
  const [organization, setOrganization]  = React.useState<Organization>()
  
  React.useEffect(()  => {
    (async () => {
      const res = await getOrganizationProfile()
      setOrganization(res.organization)
    })()
  } ,[])


  if (!organization) { 
    return <p>Carregando...</p>
  }

  return (
    <main className="w-screen h-full flex flex-col items-center pt-10 bg-[#FDECED]">
      <UpdateProfileForm organization={organization}  />
    </main>
  );
}
