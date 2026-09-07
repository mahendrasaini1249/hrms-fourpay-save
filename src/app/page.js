import React from 'react'
import TotalEmployeesCard from '@/app/components/doshboard/TotalEmployeesCard';
import ActiveEmployeesCard from '@/app/components/doshboard/ActiveEmployeesCard';
import ExitedEmployeesCard from '@/app/components/doshboard/ExitedEmployeesCard';
import TotalLeaveBalanceCard from '@/app/components/doshboard/TotalLeaveBalanceCard';
import employees from '@/app/data/employee-management';
import DeptChart from '@/app/components/doshboard/DeptChart';
import StatusPieChart from '@/app/components/doshboard/StatusPieChart';
import EmployeeTable from '@/app/components/employees/EmployeeTable';

export default function page() {

    const deptCounts = employees.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1
        return acc
    }, {})


    const deptData = Object.entries(deptCounts).map(([dept, count]) => ({
        dept,
        count,
    }))

    // employment status
    const statusCounts = employees.reduce((acc, emp) => {
        acc[emp.employmentStatus] = (acc[emp.employmentStatus] || 0) + 1
        return acc
    }, {})

    const statusData = Object.entries(statusCounts).map(([name, value]) => ({
        name,
        value,
    }))

    return (
        <>
            <div className='grid grid-cols-4 gap-4'>
                <TotalEmployeesCard employees={employees} />
                <ActiveEmployeesCard employees={employees} />
                <ExitedEmployeesCard employees={employees} />
                <TotalLeaveBalanceCard employees={employees} />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 ">
                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-lg font-semibold mb-4">Department wise Employees</h2>
                    <DeptChart data={deptData} />
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-lg font-semibold">Employment Status</h2>
                    <StatusPieChart data={statusData} />
                </div>
            </div>

            {/* Employess-tables */}
            <EmployeeTable employees={employees} />
        </>
    );
}