"use client"
import View from '@/app/components/view/View'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    let { id } = useParams();

    const OfferManagement = hiringOnboardingData.find(
        (item) =>
            item.id === Number(id) &&
            item.module === "offer-management");

    if (!OfferManagement) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Job Post Details'
                data={OfferManagement} />
        </div>
    )
}
