"use client"
import View from '@/app/components/view/View'
import payrollData from '@/app/data/payroll'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let PayrollProcessing = payrollData.find((item) =>
        item.id === Number(id) && item.module === "payroll-processing");

    if (!PayrollProcessing) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={PayrollProcessing} />
        </div>
    )
}
