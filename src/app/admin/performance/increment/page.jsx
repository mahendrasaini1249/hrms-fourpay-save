"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import performanceData from '@/app/data/performance'
import React from 'react'

export default function page() {

    let IncrementData = performanceData.filter(
        (item) => item.module === "increment")

    let columns = [
        {
            key: "incrementId",
            label: "increment Id"
        },
        {
            key: "employeeName",
            label: "employee Name"
        },
        {
            key: "department",
            label: "department"
        },
        {
            key: "currentSalary",
            label: "current Salary"
        },
        {
            key: "incrementAmount",
            label: "increment Amount"
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
            <OrganizationTable data={IncrementData}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/performance/increment"
            />
        </div>
    )
}
