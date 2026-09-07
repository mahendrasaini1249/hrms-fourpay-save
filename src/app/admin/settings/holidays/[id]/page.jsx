"use client"
import View from '@/app/components/view/View'
import settingsData from '@/app/data/setting'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let Holiday = settingsData.find((item) =>
        item.id === Number(id) && item.module === "holiday-settings");

    if (!Holiday) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Holiday} />
        </div>
    )
}

