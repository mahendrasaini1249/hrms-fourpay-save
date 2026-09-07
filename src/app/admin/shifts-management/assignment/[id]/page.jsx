"use client"
import View from '@/app/components/view/View'
import shiftManagementData from '@/app/data/shift'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Assignement = shiftManagementData.find((item) =>
        item.id === Number(id) && item.module === "shift-assignment");

    if (!Assignement) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Assignement} />
        </div>
    )
}

