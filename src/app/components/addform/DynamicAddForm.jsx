"use client";

export default function Form({
    title,
    fields,
    onSubmit,
    buttonText = "Save",
}) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-semibold text-slate-800">
                {title}
            </h2>

            <form onSubmit={onSubmit}>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {fields.map((field) => (
                        <div key={field.name}>

                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                {field.label}
                            </label>

                            {field.type === "select" ? (

                                <select
                                    name={field.name}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
                                >
                                    <option value="">
                                        Select {field.label}
                                    </option>

                                    {field.options?.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                            ) : (

                                <input
                                    type={field.type || "text"}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-500"
                                />

                            )}

                        </div>
                    ))}

                </div>

                <div className="mt-6 flex justify-end gap-3">

                    <button
                        type="button"
                        className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        {buttonText}
                    </button>

                </div>

            </form>

        </div>
    );
}