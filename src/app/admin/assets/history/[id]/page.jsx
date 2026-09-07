"use client"
import View from '@/app/components/view/View'
import assetData from '@/app/data/asests'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let AssetHistory = assetData.find((item) =>
        item.id === Number(id) && item.module === "asset-history");

    if (!AssetHistory) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={AssetHistory} />
        </div>
    )
}
