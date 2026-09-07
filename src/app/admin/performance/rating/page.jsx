"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import performanceData from '@/app/data/performance'
import React from 'react'

export default function page() {

    let RatingData = performanceData.filter(
        (item) => item.module === "performance-rating")

    let columns = [
        {
            key: "ratingId",
            label: "rating Id"
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
            key: "goalRating",
            label: "goal Rating"
        },
        {
            key: "ratingGrade",
            label: "rating Grade"
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
            <OrganizationTable data={RatingData}
                columns={columns}
                View={view}
                Edit={Edit}
                Delete={Delete}
                basePath="/admin/performance/rating"
            />
        </div>
    )
}
