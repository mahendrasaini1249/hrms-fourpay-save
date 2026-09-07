"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function DeptChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="dept" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4f46e5" />
            </BarChart>
        </ResponsiveContainer>
    )
}