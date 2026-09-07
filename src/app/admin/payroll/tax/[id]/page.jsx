"use client"
import View from '@/app/components/view/View'
import payrollData from '@/app/data/payroll'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let taxData = payrollData.find((item) =>
        item.id === Number(id) && item.module === "tax-tds");

    if (!taxData) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={taxData} />
        </div>
    )
}
