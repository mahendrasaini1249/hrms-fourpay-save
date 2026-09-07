"use client";

export default function View({
    title = "Details",
    data = {},
}) {
    const fields = Object.keys(data).filter(
        (key) =>
            key !== "id" &&
            key !== "module"
    );

    return (
        <div className="mx-auto w-full max-w-5xl">

            {/* Main Card */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-7 py-6">
                    <div>

                        <h1 className="text-2xl font-semibold text-slate-800">
                            {title}
                        </h1>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <rect
                                width="20"
                                height="14"
                                x="2"
                                y="5"
                                rx="2"
                            />
                            <path d="M16 5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2" />
                            <path d="M2 10h20" />
                        </svg>
                    </div>

                </div>

                {/* Details */}
                <div className="px-7 py-7">

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {fields.map((key) => (
                            <div
                                key={key}
                                className="rounded-xl border border-slate-200 bg-white p-5"
                            >
                                {/* Label */}
                                <p className="mb-2 text-sm font-medium text-slate-500">
                                    {formatLabel(key)}
                                </p>

                                {/* Value */}
                                <p className="text-base font-semibold leading-6 text-slate-800">
                                    {String(data[key] ?? "-")}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-7 py-4">
                    <p className="text-xs text-slate-400">
                        HRMS Record Details
                    </p>

                </div>

            </div>
        </div>
    );
}

function formatLabel(key) {
    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/[-_]/g, " ")
        .replace(/^./, (char) => char.toUpperCase());
}