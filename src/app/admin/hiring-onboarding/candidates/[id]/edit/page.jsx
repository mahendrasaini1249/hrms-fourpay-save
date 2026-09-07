"use client"
import EditForm from '@/app/components/form/EditForm'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Candidates = hiringOnboardingData.find(
        (item) => item.id === Number(id) && item.module === "candidates")
    return (
        <div>
            <EditForm
                title="Edit Hiring & Onboarding"
                data={Candidates}
            />
        </div>
    )
}
