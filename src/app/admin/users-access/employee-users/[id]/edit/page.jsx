"use client"
import EditForm from '@/app/components/form/EditForm'
import userAccessData from '@/app/data/user-acces'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    let { id } = useParams();

    let Employeeuser = userAccessData.find(
        (item) => item.id === Number(id) && item.module === "employee-users")
    return (
        <div>
            <EditForm
                title="Edit User Access Details"
                data={Employeeuser}
            />
        </div>
    )
} 
