
"use client";

import React, { useState } from "react";
import {
    FaUserTie,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";

export default function page() {
 
    return (
        <div className="min-h-screen bg-slate-50 px-4 py-6 md:px-8">

            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Contact HR
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Get in touch with our HR team for any assistance.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    {/* HR Details */}
                    <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-6 text-white shadow-lg">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                            <FaUserTie />
                        </div>

                        <h2 className="mt-5 text-xl font-bold">
                            HR Department
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-blue-100">
                            Our HR team is available to help you with
                            employee-related queries and support.
                        </p>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-200" />
                                <span className="text-sm">
                                    hr@company.com
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-blue-200" />
                                <span className="text-sm">
                                    +91 98765 43210
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-blue-200" />
                                <span className="text-sm">
                                    Head Office, Jaipur
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">

                        <h2 className="text-lg font-bold text-slate-800">
                            Send a Message
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Send your query directly to the HR team.
                        </p>

                        <form className="mt-6 space-y-5">

                            {/* Subject */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter subject"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Message
                                </label>

                                <textarea
                                    name="message"                               
                                    placeholder="Write your message..."
                                    rows={5}
                                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                    required
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                            >
                                <FaPaperPlane />
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
