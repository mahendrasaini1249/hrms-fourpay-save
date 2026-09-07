"use client"
import EditForm from '@/app/components/form/EditForm'
import leaveManagementData from '@/app/data/leaveData'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let LeaveRequest = leaveManagementData.find(
        (item) => item.id === Number(id) && item.module === "leave-requests")
    return (
        <div>
            <EditForm
                title="Edit Leave Management"
                data={LeaveRequest}
            />
        </div>
    )
} 
