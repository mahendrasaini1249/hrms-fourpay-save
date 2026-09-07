"use client"
import View from '@/app/components/view/View'
import userAccessData from '@/app/data/user-acces'
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {

    let { id } = useParams();

    let AdminUser = userAccessData.find((item) =>
        item.id === Number(id) && item.module === "admin-users");

    if (!AdminUser) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={AdminUser} />
        </div>
    )
}

