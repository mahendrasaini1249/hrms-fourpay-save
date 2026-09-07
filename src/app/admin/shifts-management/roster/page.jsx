
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import shiftManagementData from '@/app/data/shift'
import React from 'react'

export default function page() {

    let Roster = shiftManagementData.filter(
        (item) => item.module === "shift-roster")

    let columns = [
        {
            key: "rosterId",
            label: "roster Id"
        },
        {
            key: "employeeName",
            label: "employee Name"
        },
        {
            key: "shiftName",
            label: "shift Name"
        },
        {
            key: "shiftName",
            label: "shift Name"
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
            <OrganizationTable data={Roster}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/shifts-management/roster"
            />
        </div>
    )
}
