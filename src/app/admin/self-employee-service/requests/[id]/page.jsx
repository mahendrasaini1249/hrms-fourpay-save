"use client"
import View from '@/app/components/view/View'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Requests = employeeSelfServiceData.find((item) =>
        item.id === Number(id) && item.module === "my-requests");

    if (!Requests) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Requests} />
        </div>
    )
}

