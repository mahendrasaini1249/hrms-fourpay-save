"use client"
import View from '@/app/components/view/View'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let AppraisalsData = performanceData.find((item) =>
        item.id === Number(id) && item.module === "appraisals");

    if (!AppraisalsData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={AppraisalsData} />
        </div>
    )
}
