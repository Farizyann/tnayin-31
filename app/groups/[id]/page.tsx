import GroupDetails from "@/app/components/GroupDetails";
import { Metadata } from "next";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import React from "react";

export default function GroupPage({ params }: any) {
  return <GroupDetails id={params.id} />;
}

export const metadata: Metadata = {
  title: "Group",
};
