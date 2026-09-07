"use client"
import View from '@/app/components/view/View'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let GoalsData = performanceData.find((item) =>
        item.id === Number(id) && item.module === "goals-kpis");

    if (!GoalsData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={GoalsData} />
        </div>
    )
}
