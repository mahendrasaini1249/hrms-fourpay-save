"use client"
import EditForm from '@/app/components/form/EditForm'
import settingsData from '@/app/data/setting'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Notification = settingsData.find(
        (item) => item.id === Number(id) && item.module === "notification-settings")
    return (
        <div>
            <EditForm
                title="Edit Settings"
                data={Notification}
            />
        </div>
    )
} 
