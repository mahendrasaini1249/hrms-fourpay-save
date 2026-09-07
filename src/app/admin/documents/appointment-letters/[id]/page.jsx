"use client"
import View from '@/app/components/view/View'
import documentsData from '@/app/data/document'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Appointment = documentsData.find((item) =>
        item.id === Number(id) && item.module === "appointment-letters");

    if (!Appointment) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Appointment} />
        </div>
    )
}
