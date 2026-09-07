"use client"
import View from '@/app/components/view/View'
import reportsData from '@/app/data/reports'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let AssetReport = reportsData.find((item) =>
        item.id === Number(id) && item.module === "asset-reports");

    if (!AssetReport) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={AssetReport} />
        </div>
    )
}

