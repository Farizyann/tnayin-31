import { Metadata } from 'next';
import React from 'react'
import Students from '../components/Students';

export default function StudentsPage() {
  return (
    <Students/>
  )
}

export const metadata: Metadata = {
  title: "Students",
};

