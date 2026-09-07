"use client"
import EditForm from '@/app/components/form/EditForm'
import attendanceData from '@/app/data/attendece'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let SelfAttendance = attendanceData.find(
        (item) => item.id === Number(id) && item.module === "self")
    return (
        <div>
            <EditForm
                title="Edit Self Attendnce"
                data={SelfAttendance}
            />
        </div>
    )
} 
