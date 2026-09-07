"use client"
import EditForm from '@/app/components/form/EditForm'
import attendanceData from '@/app/data/attendece'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let LateAttendance = attendanceData.find(
        (item) => item.id === Number(id) && item.module === "late-coming")
    return (
        <div>
            <EditForm
                title="Edit Late Attendance Attendnce"
                data={LateAttendance}
            />
        </div>
    )
} 
