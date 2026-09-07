"use client"
import View from '@/app/components/view/View'
import complianceData from '@/app/data/compliance'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let Statutory = complianceData.find((item) =>
        item.id === Number(id) && item.module === "statutory-reports");

    if (!Statutory) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Statutory} />
        </div>
    )
}

