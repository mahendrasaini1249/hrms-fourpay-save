"use client"
import View from '@/app/components/view/View'
import trainingData from '@/app/data/training'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let ProgramData = trainingData.find((item) =>
        item.id === Number(id) && item.module === "training-programs");

    if (!ProgramData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={ProgramData} />
        </div>
    )
}
