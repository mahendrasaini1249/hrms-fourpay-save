"use client"
import View from '@/app/components/view/View'
import reportsData from '@/app/data/reports'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let Reports = reportsData.find((item) =>
        item.id === Number(id) && item.module === "leave-reports");

    if (!Reports) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Reports} />
        </div>
    )
}

