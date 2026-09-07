"use client"
import EditForm from '@/app/components/form/EditForm'
import payrollData from '@/app/data/payroll'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Deductions = payrollData.find(
        (item) => item.id === Number(id) && item.module === "deductions")
    return (
        <div>
            <EditForm
                title="Edit Payrolls"
                data={Deductions}
            />
        </div>
    )
} 
