
"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import shiftManagementData from '@/app/data/shift'
import React from 'react'

export default function page() {

    let Roster = shiftManagementData.filter(
        (item) => item.module === "night-shift")

    let columns = [
        {
            key: "shiftId",
            label: "shift Id"
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
            key: "startTime",
            label: "start Time"
        },
        {
            key: "endTime",
            label: "end Time"
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
                basePath="/admin/shifts-management/night-shift"
            />
        </div>
    )
}
