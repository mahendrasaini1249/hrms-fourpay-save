"use client"
import View from '@/app/components/view/View'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let SelfAssistmance = performanceData.find((item) =>
        item.id === Number(id) && item.module === "self-assessment");

    if (!SelfAssistmance) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={SelfAssistmance} />
        </div>
    )
}
