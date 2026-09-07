"use client"
import View from '@/app/components/view/View'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let PromotionData = performanceData.find((item) =>
        item.id === Number(id) && item.module === "promotion");

    if (!PromotionData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={PromotionData} />
        </div>
    )
}
