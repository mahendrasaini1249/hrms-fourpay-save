"use client"
import View from '@/app/components/view/View'
import leaveManagementData from '@/app/data/leaveData'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let LeaveType = leaveManagementData.find((item) =>
        item.id === Number(id) && item.module === "leave-types");

    if (!LeaveType) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={LeaveType} />
        </div>
    )
}
