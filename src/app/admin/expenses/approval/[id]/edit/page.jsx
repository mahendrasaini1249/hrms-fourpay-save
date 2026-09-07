"use client"
import EditForm from '@/app/components/form/EditForm'
import expensesData from '@/app/data/expances'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let ApprovalData = expensesData.find(
        (item) => item.id === Number(id) && item.module === "expense-approval")
    return (
        <div>
            <EditForm
                title="Edit expances Details"
                data={ApprovalData}
            />
        </div>
    )
} 
