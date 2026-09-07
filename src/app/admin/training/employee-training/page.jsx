"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import trainingData from '@/app/data/training'
import React from 'react'

export default function page() {

    let Employeetraining = trainingData.filter(
        (item) => item.module === "employee-training")

    let columns = [
        {
            key: "trainingId",
            label: "training Id "
        },
        {
            key: "employeeName",
            label: "employee Name"
        },
        {
            key: "courseName",
            label: "course Name"
        },
        {
            key: "programName",
            label: "program Name"
        },
        {
            key: "trainingType",
            label: "training Type"
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
            <OrganizationTable data={Employeetraining}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/training/employee-training"
            />
        </div>
    )
}
