"use client"
import OrganizationTable from '@/app/components/organization/OrganizationTable'
import hiringOnboardingData from '@/app/data/hiring-onbarding'
import React from 'react'

export default function page() {

  let OfferManagment = hiringOnboardingData.filter((item) => item.module === "offer-management")

  let columns = [
    {
      key: "offerId",
      label: "offer Id"
    },
    {
      key: "candidateName",
      label: "candidate Name"
    },
    {
      key: "position",
      label: "position"
    },
    {
      key: "offeredSalary",
      label: "offered Salary"
    },

    {
      key: "offerStatus",
      label: "offer Status"
    },
  ]

  const view = (row) => {
    console.log(row)
  }

  const Edit = (row) => {
    console.log(row)
  }

  const Delete = (row) => {
    console.log(row)
  }

  return (
    <div>
      <OrganizationTable data={OfferManagment}
        columns={columns}
        View={view}
        Edit={Edit}
        Delete={Delete}
        basePath="/admin/hiring-onboarding/offer-management"
      />
    </div>
  )
}
