"use client"
import View from '@/app/components/view/View'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let JobApplication = hiringOnboardingData.find((item) =>
        item.id === Number(id) && item.module === "job-applications");

    if (!JobApplication) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={JobApplication} />
        </div>
    )
}
