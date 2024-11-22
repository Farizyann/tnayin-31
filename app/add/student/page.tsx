import AddStudent from '@/app/components/AddStudent'
import { Metadata } from 'next';
import React from 'react'

export default function AddStudentPage() {
  return (
    <AddStudent/>
  )
}

export const metadata: Metadata = {
  title: "Add Student",
};
