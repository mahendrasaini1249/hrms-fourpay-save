"use client"
import View from '@/app/components/view/View'
import reportsData from '@/app/data/reports'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let Recruitment = reportsData.find((item) =>
        item.id === Number(id) && item.module === "recruitment-reports");

    if (!Recruitment) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Recruitment} />
        </div>
    )
}

