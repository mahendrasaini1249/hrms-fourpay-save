"use client"
import View from '@/app/components/view/View'
import attendanceData from '@/app/data/attendece'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let DailyAttendance = attendanceData.find((item) =>
        item.id === Number(id) && item.module === "daily");

    if (!DailyAttendance) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={DailyAttendance} />
        </div>
    )
}
