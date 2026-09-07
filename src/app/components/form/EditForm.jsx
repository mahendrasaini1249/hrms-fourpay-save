"use client";

import React from "react";

export default function EditForm({
    title = "Edit Details",
    data = {},
}) {
    const fields = Object.keys(data).filter(
        (key) =>
            key !== "id" &&
            key !== "module"
    );

    const formatLabel = (key) => {
        return key
            .replace(/([A-Z])/g, " $1")
            .replace(/[-_]/g, " ")
            .replace(/^./, (char) => char.toUpperCase());
    };

    return (
        <div className="mx-auto w-full max-w-5xl">

            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

                {/* HEADER */}
                <div className="border-b border-slate-200 px-6 py-5">

                    <h1 className="text-xl font-semibold text-slate-800">
                        {title}
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Update the required details below.
                    </p>

                </div>


                {/* FORM */}
                <div className="p-6">

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {fields.map((key) => {

                            const value = data[key];

                            return (
                                <div
                                    key={key}
                                >

                                    {/* LABEL */}
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        {formatLabel(key)}
                                    </label>


                                    {/* INPUT */}
                                    <input
                                        type={
                                            typeof value === "number"
                                                ? "number"
                                                : "text"
                                        }
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>
                            );
                        })}

                    </div>


                    {/* BUTTONS */}
                    <div className="mt-8 flex justify-end gap-3 border-t border-slate-200 pt-5">

                        <button
                            type="button"
                            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            Update
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}