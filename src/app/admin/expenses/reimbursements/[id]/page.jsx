"use client"
import View from '@/app/components/view/View'
import expensesData from '@/app/data/expances'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Reimbursements = expensesData.find((item) =>
        item.id === Number(id) && item.module === "reimbursements");

    if (!Reimbursements) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Reimbursements} />
        </div>
    )
}
