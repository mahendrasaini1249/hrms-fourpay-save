"use client"
import View from '@/app/components/view/View'
import trainingData from '@/app/data/training'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Employeetraining = trainingData.find((item) =>
        item.id === Number(id) && item.module === "training-calendar");

    if (!Employeetraining) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Employeetraining} />
        </div>
    )
}
