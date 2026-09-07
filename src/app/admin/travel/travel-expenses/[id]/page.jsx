"use client"
import View from '@/app/components/view/View'
import travelData from '@/app/data/travel'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let TravelExpenses = travelData.find((item) =>
        item.id === Number(id) && item.module === "travel-expenses");

    if (!TravelExpenses) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={TravelExpenses} />
        </div>
    )
}
