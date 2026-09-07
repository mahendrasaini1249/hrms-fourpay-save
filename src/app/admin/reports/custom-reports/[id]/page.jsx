"use client"
import View from '@/app/components/view/View'
import reportsData from '@/app/data/reports'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let Custom = reportsData.find((item) =>
        item.id === Number(id) && item.module === "custom-reports");

    if (!Custom) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Custom} />
        </div>
    )
}

