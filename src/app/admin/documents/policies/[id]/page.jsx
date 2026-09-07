"use client"
import View from '@/app/components/view/View'
import documentsData from '@/app/data/document'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let HrPolices = documentsData.find((item) =>
        item.id === Number(id) && item.module === "hr-policies");

    if (!HrPolices) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={HrPolices} />
        </div>
    )
}
