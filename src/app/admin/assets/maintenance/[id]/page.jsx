"use client"
import View from '@/app/components/view/View'
import assetData from '@/app/data/asests'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Maintenance = assetData.find((item) =>
        item.id === Number(id) && item.module === "asset-maintenance");

    if (!Maintenance) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Maintenance} />
        </div>
    )
}
