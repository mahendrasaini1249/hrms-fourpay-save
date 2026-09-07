"use client"
import View from '@/app/components/view/View'
import complianceData from '@/app/data/compliance'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let EsiData = complianceData.find((item) =>
        item.id === Number(id) && item.module === "esi");

    if (!EsiData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={EsiData} />
        </div>
    )
}

