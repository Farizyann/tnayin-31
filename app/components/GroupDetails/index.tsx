"use client";
import { getgroupByIdData, selectgroup } from "@/lib/features/group/groupSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import React, { useEffect } from "react";

const GroupDetails = ({ id }: { id: number }) => {
  const group = useAppSelector(selectgroup);
  console.log(group);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getgroupByIdData(id));
  }, [id]);
  return (
    <div>
      {group.message ? (
        <h1>Group not found</h1>
      ) : (
        <div>
          <h3>{group.name}</h3>

          {group.students?.length !=0 ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>See</th>
                  </tr>
                </thead>
                <tbody>
                  {group.students?.map((elm) => {
                    return (
                      <tr key={elm.id}>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>
                          <Link href={"/students/"+id+"/" + elm.id}>See More</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <>students ...</>
          )}
        </div>
      )}
    </div>
  );
};

export default GroupDetails;
