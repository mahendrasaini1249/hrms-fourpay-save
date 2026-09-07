"use client"
import View from '@/app/components/view/View'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    let { id } = useParams();

    const JobData = hiringOnboardingData.find(
        (item) =>
            item.id === Number(id) &&
            item.module === "job-posts");

    if (!JobData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Job Post Details'
                data={JobData} />
        </div>
    )
}
