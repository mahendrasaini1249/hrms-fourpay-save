"use client"
import View from '@/app/components/view/View'
import assetData from '@/app/data/asests'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let AssetAssgin = assetData.find((item) =>
        item.id === Number(id) && item.module === "assign-asset");

    if (!AssetAssgin) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={AssetAssgin} />
        </div>
    )
}
