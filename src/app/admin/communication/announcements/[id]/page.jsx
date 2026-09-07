"use client"
import View from '@/app/components/view/View'
import communicationData from '@/app/data/communicatin'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let AnnouncementsData = communicationData.find((item) =>
        item.id === Number(id) && item.module === "announcements");

    if (!AnnouncementsData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={AnnouncementsData} />
        </div>
    )
}
