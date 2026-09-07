"use client"
import View from '@/app/components/view/View'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let IncrementData = performanceData.find((item) =>
        item.id === Number(id) && item.module === "increment");

    if (!IncrementData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={IncrementData} />
        </div>
    )
}
