"use client"
import View from '@/app/components/view/View'
import complianceData from '@/app/data/compliance'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let PfData = complianceData.find((item) =>
        item.id === Number(id) && item.module === "pf");

    if (!PfData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={PfData} />
        </div>
    )
}

