"use client"
import EditForm from '@/app/components/form/EditForm'
import attendanceData from '@/app/data/attendece'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let EarlyAttendance = attendanceData.find(
        (item) => item.id === Number(id) && item.module === "early-leaving")
    return (
        <div>
            <EditForm
                title="Edit Early Attendnce"
                data={EarlyAttendance}
            />
        </div>
    )
} 
