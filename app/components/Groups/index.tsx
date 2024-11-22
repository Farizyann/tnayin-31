"use client";
import { getGroupsApi } from "@/lib/features/group/groupApi";
import { getgroupsData, selectgroups } from "@/lib/features/group/groupSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import React, { useEffect } from "react";

const Groups = () => {
  const groups = useAppSelector(selectgroups);
  console.log(groups);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getgroupsData());
  }, []);
  return (
    <div>
      {groups.map((elm) => (
        <div key={elm.id}>
          <h3>{elm.name}</h3>
          <Link href={'/groups/'+elm.id}>See More</Link>
        </div>
      ))}
    </div>
  );
};

export default Groups;
