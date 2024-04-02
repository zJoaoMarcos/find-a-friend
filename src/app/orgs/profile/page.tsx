
import { UpdateProfileForm } from "@/components/Forms/Organization/UpdateProfileForm";
import { Logo } from "@/components/Logo";
import { getOrganizationProfile } from "@/services/orgs";
import React from "react";

export default async function Profile() {
  const { organization } = await getOrganizationProfile()
 

  return (
    <main className="w-screen h-full flex flex-col items-center pt-10 bg-[#FDECED]">
      <div className="w-[700px] px-20 py-4 flex flex-row items-center gap-10 bg-navy-900 rounded-2xl text-white">
        <div className="h-16 w-16 flex items-center justify-center bg-[#F27006] rounded-2xl p-5">
          <Logo />
        </div>

        <div className="flex flex-col">
          <p className="text-3xl font-bold">{organization?.name}</p>
          <p className="text-base font-medium">
            {`${organization?.address} - ${organization?.address_number}, ${organization?.zip_code} `}
          </p>
          <p>{`${organization?.city} - ${organization?.state}`}</p>
        </div>
      </div>

      <UpdateProfileForm organization={organization}  />
    </main>
  );
}
