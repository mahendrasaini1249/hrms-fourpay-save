
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import documentsData from '@/app/data/document'
import React from 'react'

export default function page() {

    let JoiningData = documentsData.filter(
        (item) => item.module === "joining-documents")

    let columns = [
        {
            key: "documentId",
            label: "document Id"
        },
        {
            key: "employeeId",
            label: "employee Id"
        },
        {
            key: "employeeName",
            label: "employee Name"
        },
        {
            key: "documentName",
            label: "documentName"
        },
        {
            key: "status",
            label: "status"
        },
    ]

    const view = (row) => {
        console.log(row)
    }

    const Edit = (row) => {
        console.log(row)
    }

    const Delete = (row) => {
        console.log(row)
    }

    return (
        <div>
            <OrganizationTable data={JoiningData}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/documents/joining-documents"
            />
        </div>
    )
}
