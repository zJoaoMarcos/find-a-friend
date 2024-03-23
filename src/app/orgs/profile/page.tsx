"use client";

import { Organization } from "@/@types/Organzation";
import { getOrganizationProfile } from "@/services/orgs";
import React from "react";

export default function Profile() {
  const [profile, setProfile] = React.useState<Organization>();

  React.useEffect(() => {
    (async () => {
      const res = await getOrganizationProfile();

      setProfile(res.organization);
    })();
  }, []);

  return <h2 className="text-4xl text-black">{profile?.name}</h2>;
}
