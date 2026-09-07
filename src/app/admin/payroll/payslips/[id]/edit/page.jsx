"use client"
import EditForm from '@/app/components/form/EditForm'
import payrollData from '@/app/data/payroll'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Payslips = payrollData.find(
        (item) => item.id === Number(id) && item.module === "payslips")
    return (
        <div>
            <EditForm
                title="Edit Payrolls"
                data={Payslips}
            />
        </div>
    )
} 
