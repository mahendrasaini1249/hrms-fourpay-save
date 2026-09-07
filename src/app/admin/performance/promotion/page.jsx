"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import performanceData from '@/app/data/performance'
import React from 'react'

export default function page() {

    let PromotionData = performanceData.filter(
        (item) => item.module === "promotion")

    let columns = [
        {
            key: "promotionId",
            label: "promotion Id"
        },
        {
            key: "employeeName",
            label: "employee Name"
        },
        {
            key: "currentDesignation",
            label: "current Designation"
        },
        {
            key: "newDesignation",
            label: "new Designation"
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
            <OrganizationTable data={PromotionData}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/performance/promotion"
            />
        </div>
    )
}
