"use client"
import View from '@/app/components/view/View'
import documentsData from '@/app/data/document'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let EmployeeDocument = documentsData.find((item) =>
        item.id === Number(id) && item.module === "employee-documents");

    if (!EmployeeDocument) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={EmployeeDocument} />
        </div>
    )
}
