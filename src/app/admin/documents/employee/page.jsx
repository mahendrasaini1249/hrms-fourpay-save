
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import documentsData from '@/app/data/document'
import React from 'react'

export default function page() {

    let EmployeeDocument = documentsData.filter(
        (item) => item.module === "employee-documents")

    let columns = [
        {
            key: "documentId",
            label: "document Id "
        },
        {
            key: "employeeName",
            label: "employee Name"
        },
        {
            key: "documentType",
            label: "document Type"
        },
        {
            key: "uploadDate",
            label: "upload Date"
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
            <OrganizationTable data={EmployeeDocument}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/documents/employee"
            />
        </div>
    )
}
