"use client"
import View from '@/app/components/view/View'
import communicationData from '@/app/data/communicatin'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let NotificationData = communicationData.find((item) =>
        item.id === Number(id) && item.module === "notifications");

    if (!NotificationData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={NotificationData} />
        </div>
    )
}
