"use client"
import EditForm from '@/app/components/form/EditForm'
import attendanceData from '@/app/data/attendece'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let OvertimeData = attendanceData.find(
        (item) => item.id === Number(id) && item.module === "overtime")
    return (
        <div>
            <EditForm
                title="Edit Overtime Attendnce"
                data={OvertimeData}
            />
        </div>
    )
} 
