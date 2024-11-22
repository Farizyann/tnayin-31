import StudentDetails from '@/app/components/StudentDetails';
import { Metadata } from 'next';
import React from 'react'

export default function StudentPage({params}:any) {
  return (
    <StudentDetails groupId={params.groupId} id={params.id}/>
  )
}

export const metadata: Metadata = {
  title: "Students",
};

