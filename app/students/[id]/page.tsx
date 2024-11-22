import StudentDetails from '@/app/components/StudentDetails';
import { Metadata } from 'next';
import React from 'react'

export default function StudentPage() {
  return (
    <StudentDetails/>
  )
}

export const metadata: Metadata = {
  title: "Students",
};

