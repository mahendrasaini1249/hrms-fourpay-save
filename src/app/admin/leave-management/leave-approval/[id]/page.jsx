"use client"
import View from '@/app/components/view/View'
import leaveManagementData from '@/app/data/leaveData'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let LeaveApproval = leaveManagementData.find((item) =>
        item.id === Number(id) && item.module === "leave-approval");

    if (!LeaveApproval) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={LeaveApproval} />
        </div>
    )
}
