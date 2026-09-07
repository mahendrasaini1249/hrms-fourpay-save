"use client"
import View from '@/app/components/view/View'
import supportTickets from '@/app/data/ticket'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Ticket = supportTickets.find((item) =>
        item.id === Number(id) && item.module === "ticket");

    if (!Ticket) {
        return <div>Record not found</div>;
    }

    return (
        <div>
            <View
                title='Details'
                data={Ticket} />
        </div>
    )
}
