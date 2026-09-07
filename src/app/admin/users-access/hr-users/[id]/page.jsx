"use client"
import View from '@/app/components/view/View'
import userAccessData from '@/app/data/user-acces'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let HrUsers = userAccessData.find((item) =>
        item.id === Number(id) && item.module === "hr-users");

    if (!HrUsers) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={HrUsers} />
        </div>
    )
}

