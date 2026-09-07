"use client"
import EditForm from '@/app/components/form/EditForm'
import assetData from '@/app/data/asests'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let AssetAssgin = assetData.find((item) =>
        item.id === Number(id) && item.module === "assign-asset");

    return (
        <div>
            <EditForm
                title="Edit Assets Details"
                data={AssetAssgin}
            />
        </div>
    )
}
