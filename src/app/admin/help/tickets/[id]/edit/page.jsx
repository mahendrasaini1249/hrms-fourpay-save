"use client"
import EditForm from '@/app/components/form/EditForm'
import supportTickets from '@/app/data/ticket'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Ticket = supportTickets.find(
        (item) => item.id === Number(id) && item.module === "ticket")
    return (
        <div>
            <EditForm
                title="Edit Tickets Details"
                data={Ticket}
            />
        </div>
    )
} 
