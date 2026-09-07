"use client"
import EditForm from '@/app/components/form/EditForm'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let OfferManagement = hiringOnboardingData.find(
        (item) => item.id === Number(id) && item.module === "offer-management")
    return (
        <div>
            <EditForm
                title="Edit Hiring & Onboarding"
                data={OfferManagement}
            />
        </div>
    )
}
