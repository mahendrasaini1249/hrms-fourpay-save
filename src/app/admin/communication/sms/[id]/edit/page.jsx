"use client"
import EditForm from '@/app/components/form/EditForm'
import communicationData from '@/app/data/communicatin'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let SmsData = communicationData.find(
        (item) => item.id === Number(id) && item.module === "sms")
    return (
        <div>
            <EditForm
                title="Edit Communicatin Details"
                data={SmsData}
            />
        </div>
    )
} 
