"use client"
import View from '@/app/components/view/View'
import travelData from '@/app/data/travel'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let PlansData = travelData.find((item) =>
        item.id === Number(id) && item.module === "travel-plans");

    if (!PlansData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={PlansData} />
        </div>
    )
}
