"use client"
import EditForm from '@/app/components/form/EditForm'
import employeeSelfServiceData from '@/app/data/employeeSelfService'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Myprofile = employeeSelfServiceData.find(
        (item) => item.id === Number(id) && item.module === "my-profile")
    return (
        <div>
            <EditForm
                title="Edit Self Employee service Details"
                data={Myprofile}
            />
        </div>
    )
} 
