
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import documentsData from '@/app/data/document'
import React from 'react'

export default function page() {

    let CompanyDocument = documentsData.filter(
        (item) => item.module === "company-documents")

    let columns = [
        {
            key: "documentId",
            label: "document Id "
        },
        {
            key: "documentName",
            label: "document Name"
        },
        {
            key: "documentType",
            label: "document Type"
        },
        {
            key: "uploadedBy",
            label: "uploaded By"
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
            <OrganizationTable data={CompanyDocument}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/documents/company-documents"
            />
        </div>
    )
}
