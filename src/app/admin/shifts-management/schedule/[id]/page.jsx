"use client"
import View from '@/app/components/view/View'
import shiftManagementData from '@/app/data/shift'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Roster = shiftManagementData.find((item) =>
        item.id === Number(id) && item.module === "weekly-schedule");

    if (!Roster) {
        return <div>Record not found</div>;
    }
    return (
        <div>
            <View
                title='Details'
                data={Roster} />
        </div>
    )
}

