"use client"
import EditForm from '@/app/components/form/EditForm'
import payrollData from '@/app/data/payroll'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Bonus = payrollData.find(
        (item) => item.id === Number(id) && item.module === "bonuses")
    return (
        <div>
            <EditForm
                title="Edit Payrolls"
                data={Bonus}
            />
        </div>
    )
} 
