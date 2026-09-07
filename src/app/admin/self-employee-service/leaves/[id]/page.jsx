"use client"
import View from '@/app/components/view/View'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let MyLeaves = employeeSelfServiceData.find((item) =>
        item.id === Number(id) && item.module === "my-leaves");

    if (!MyLeaves) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={MyLeaves} />
        </div>
    )
}

