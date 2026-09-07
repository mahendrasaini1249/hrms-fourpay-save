"use client"
import View from '@/app/components/view/View'
import performanceData from '@/app/data/performance'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let ManagerData = performanceData.find((item) =>
        item.id === Number(id) && item.module === "manager-assessment");

    if (!ManagerData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={ManagerData} />
        </div>
    )
}
