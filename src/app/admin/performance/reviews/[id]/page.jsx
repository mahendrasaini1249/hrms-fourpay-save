"use client"
import View from '@/app/components/view/View'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let ReviewData = performanceData.find((item) =>
        item.id === Number(id) && item.module === "performance-reviews");

    if (!ReviewData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={ReviewData} />
        </div>
    )
}
