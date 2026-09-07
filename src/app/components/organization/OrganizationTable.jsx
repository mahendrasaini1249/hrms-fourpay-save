"use client";

import Link from "next/link";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

export default function OrganizationTable({
    data = [],
    columns = [],
    View,
    Edit,
    Delete,
    basePath = "",
}) {
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-slate-400 bg-white shadow-sm">

            <div className="w-full overflow-x-auto">

                <table className="w-full min-w-full table-fixed text-sm">

                    {/* ================= HEADER ================= */}
                    <thead className="bg-slate-50">
                        <tr className="border-b border-slate-400">

                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={`
                                        px-4 py-4
                                        text-center
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wide
                                        text-slate-700
                                        whitespace-normal
                                        break-words
                                        align-middle
                                        ${column.key === "programName"
                                            ? "w-[18%]"
                                            : column.key === "objectives"
                                                ? "w-[25%]"
                                                : ""
                                        }
                                    `}
                                >
                                    {column.label}
                                </th>
                            ))}

                            {(View || Edit || Delete) && (
                                <th
                                    className="
                                        w-[150px]
                                        px-4 py-4
                                        text-center
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wide
                                        text-slate-700
                                        whitespace-nowrap
                                        align-middle
                                    "
                                >
                                    Actions
                                </th>
                            )}

                        </tr>
                    </thead>


                    {/* ================= BODY ================= */}
                    <tbody className="divide-y divide-slate-300">

                        {data.length > 0 ? (

                            data.map((row) => (
                                <tr
                                    key={row.id}
                                    className="transition-colors duration-200 hover:bg-slate-100"
                                >

                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className="
                                                px-4
                                                py-5
                                                text-center
                                                text-slate-700
                                                whitespace-normal
                                                break-words
                                                align-middle
                                            "
                                        >

                                            {column.key === "status" ? (

                                                <span
                                                    className={`
                                                        inline-flex
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        font-semibold
                                                        ring-1
                                                        whitespace-nowrap
                                                        ${[
                                                            "Active",
                                                            "Open",
                                                            "Shortlisted",
                                                            "Completed",
                                                            "Confirmed",
                                                            "Approved",
                                                            "Paid",
                                                            "Generated",
                                                            "Submitted",
                                                            "Final",
                                                            "Assigned",
                                                            "Returned",
                                                            "Verified",
                                                            "Published",
                                                            "Read",
                                                            "Sent",
                                                            "Delivered",
                                                            "Present",
                                                            "Under Review",
                                                        ].includes(
                                                            String(row[column.key]).trim()
                                                        )
                                                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                                                            : "bg-red-50 text-red-700 ring-red-200"
                                                        }
                                                    `}
                                                >
                                                    {row[column.key]}
                                                </span>

                                            ) : (

                                                row[column.key]

                                            )}

                                        </td>
                                    ))}


                                    {/* ================= ACTIONS ================= */}
                                    {(View || Edit || Delete) && (
                                        <td
                                            className="
                                                w-[150px]
                                                px-4
                                                py-5
                                                align-middle
                                            "
                                        >

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-2
                                                    whitespace-nowrap
                                                "
                                            >

                                                {/* VIEW */}
                                                {View && (
                                                    <Link
                                                        href={`${basePath}/${row.id}`}
                                                        title="View"
                                                        className="
                                                            flex
                                                            h-9
                                                            w-9
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-lg
                                                            bg-blue-50
                                                            text-blue-600
                                                            transition
                                                            hover:bg-blue-100
                                                            hover:text-blue-700
                                                        "
                                                    >
                                                        <FaEye size={15} />
                                                    </Link>
                                                )}


                                                {/* EDIT */}
                                                {Edit && (
                                                    <Link
                                                        href={`${basePath}/${row.id}/edit`}
                                                        title="Edit"
                                                        className="
                                                            flex
                                                            h-9
                                                            w-9
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-lg
                                                            bg-amber-50
                                                            text-amber-600
                                                            transition
                                                            hover:bg-amber-100
                                                            hover:text-amber-700
                                                        "
                                                    >
                                                        <FaEdit size={15} />
                                                    </Link>
                                                )}


                                                {/* DELETE */}
                                                {Delete && (
                                                    <button
                                                        onClick={() => Delete(row)}
                                                        title="Delete"
                                                        className="
                                                            flex
                                                            h-9
                                                            w-9
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-lg
                                                            bg-red-50
                                                            text-red-600
                                                            transition
                                                            hover:bg-red-100
                                                            hover:text-red-700
                                                        "
                                                    >
                                                        <FaTrash size={14} />
                                                    </button>
                                                )}

                                            </div>

                                        </td>
                                    )}

                                </tr>
                            ))

                        ) : (

                            <tr>
                                <td
                                    colSpan={
                                        columns.length +
                                        (View || Edit || Delete ? 1 : 0)
                                    }
                                    className="
                                        px-6
                                        py-14
                                        text-center
                                        text-slate-400
                                    "
                                >
                                    No records found
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}