"use client"
import EditForm from '@/app/components/form/EditForm'
import documentsData from '@/app/data/document'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Appointment = documentsData.find(
        (item) => item.id === Number(id) && item.module === "appointment-letters")
    return (
        <div>
            <EditForm
                title="Edit Document Details"
                data={Appointment}
            />
        </div>
    )
} 
