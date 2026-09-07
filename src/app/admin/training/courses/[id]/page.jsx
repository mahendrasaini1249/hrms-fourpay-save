"use client"
import View from '@/app/components/view/View'
import trainingData from '@/app/data/training'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let CouresesData = trainingData.find((item) =>
        item.id === Number(id) && item.module === "courses");

    if (!CouresesData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={CouresesData} />
        </div>
    )
}
