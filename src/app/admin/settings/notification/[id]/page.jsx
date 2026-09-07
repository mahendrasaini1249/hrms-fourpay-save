"use client"
import View from '@/app/components/view/View'
import settingsData from '@/app/data/setting'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let Notification = settingsData.find((item) =>
        item.id === Number(id) && item.module === "notification-settings");

    if (!Notification) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Notification} />
        </div>
    )
}

