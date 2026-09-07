"use client"
import EditForm from '@/app/components/form/EditForm'
import documentsData from '@/app/data/document'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let HrPolices = documentsData.find(
        (item) => item.id === Number(id) && item.module === "hr-policies")
    return (
        <div>
            <EditForm
                title="Edit Document Details"
                data={HrPolices}
            />
        </div>
    )
} 
