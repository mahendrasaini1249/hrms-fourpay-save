
"use client";

import React, { useState } from "react";
import {
    FaSearch,
    FaQuestionCircle,
    FaChevronDown,
    FaHeadset,
} from "react-icons/fa";

const faqData = [
    {
        id: 1,
        question: "How do I create a new employee?",
        answer:
            "Go to the Employee Management section, click on Add Employee, enter the required employee details, and click Save.",
        category: "Employees",
    },
    {
        id: 2,
        question: "How can I update employee information?",
        answer:
            "Open the Employee Management section, find the employee, click the Edit option, update the required details, and save the changes.",
        category: "Employees",
    },
    {
        id: 3,
        question: "How do I apply for leave?",
        answer:
            "Go to the Leave Management section, click Apply Leave, select the leave type and dates, enter the reason, and submit the request.",
        category: "Leave",
    },
    {
        id: 4,
        question: "How can I check my attendance?",
        answer:
            "You can check your attendance from the Attendance section, where you can view attendance records, working hours, and attendance status.",
        category: "Attendance",
    },
    {
        id: 5,
        question: "How do I add a new department?",
        answer:
            "Open the Department Management section, click Add Department, enter the department details, and save the information.",
        category: "Departments",
    },
    {
        id: 6,
        question: "How can I upload a document?",
        answer:
            "Go to the Documents section, click Upload Document, select the required file, enter the document details, and upload it.",
        category: "Documents",
    },
    {
        id: 7,
        question: "How do I update my profile?",
        answer:
            "Open your profile from the account menu, click Edit Profile, update your personal information, and click Save Changes.",
        category: "Account",
    },
    {
        id: 8,
        question: "How can I change my password?",
        answer:
            "Go to Profile Settings, select Change Password, enter your current password and new password, then confirm the changes.",
        category: "Account",
    },
    {
        id: 9,
        question: "How can I generate a report?",
        answer:
            "Open the Reports section, select the required report type, choose the required filters or date range, and click Generate Report.",
        category: "Reports",
    },
    {
        id: 10,
        question: "What should I do if I face a problem with the system?",
        answer:
            "If you face any issue, contact the support team through the Help Center or Support section and provide details about the problem.",
        category: "Support",
    },
];

export default function page() {
    const [openFaq, setOpenFaq] = useState(null);
    const [search, setSearch] = useState("");

    const filteredFaqs = faqData.filter((faq) => {
        const searchText = search.toLowerCase();

        return (
            faq.question.toLowerCase().includes(searchText) ||
            faq.answer.toLowerCase().includes(searchText) ||
            faq.category.toLowerCase().includes(searchText)
        );
    });

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-6 md:px-8">

            <div className="mx-auto max-w-5xl">

                {/* ================= HEADER ================= */}

                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 px-6 py-10 text-center shadow-xl md:px-10">

                    {/* Background circles */}

                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

                    <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />

                    <div className="relative z-10">

                        {/* Icon */}

                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur">
                            <FaQuestionCircle />
                        </div>

                        {/* Title */}

                        <h1 className="text-3xl font-bold text-white md:text-4xl">
                            Frequently Asked Questions
                        </h1>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 md:text-base">
                            Find quick answers to the most common questions
                            about the system and its features.
                        </p>

                        {/* Search */}

                        <div className="mx-auto mt-7 flex max-w-2xl items-center rounded-2xl bg-white p-2 shadow-2xl">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center text-slate-400">
                                <FaSearch />
                            </div>

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search your question..."
                                className="h-11 flex-1 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />

                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="mr-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-100"
                                >
                                    Clear
                                </button>
                            )}

                            <button className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                                Search
                            </button>

                        </div>

                    </div>
                </div>

                {/* ================= FAQ SECTION ================= */}

                <div className="mt-8">

                    <div className="mb-5 flex items-center justify-between">

                        <div>
                            <h2 className="text-xl font-bold text-slate-800">
                                Common Questions
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                {filteredFaqs.length} questions available
                            </p>
                        </div>

                    </div>

                    {/* FAQ LIST */}

                    <div className="space-y-3">

                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => {

                                const isOpen = openFaq === faq.id;

                                return (
                                    <div
                                        key={faq.id}
                                        className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${isOpen
                                            ? "border-indigo-200 shadow-md"
                                            : "border-slate-200 shadow-sm hover:border-indigo-100 hover:shadow-md"
                                            }`}
                                    >

                                        {/* QUESTION */}

                                        <button
                                            onClick={() =>
                                                toggleFaq(faq.id)
                                            }
                                            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                                        >

                                            <div className="flex min-w-0 items-center gap-4">

                                                {/* Number */}

                                                <div
                                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${isOpen
                                                        ? "bg-indigo-600 text-white"
                                                        : "bg-indigo-50 text-indigo-600"
                                                        }`}
                                                >
                                                    {String(faq.id).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </div>

                                                {/* Question */}

                                                <div className="min-w-0">

                                                    <h3
                                                        className={`text-sm font-semibold md:text-base ${isOpen
                                                            ? "text-indigo-700"
                                                            : "text-slate-700"
                                                            }`}
                                                    >
                                                        {faq.question}
                                                    </h3>

                                                    <span className="mt-1 inline-block rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500">
                                                        {faq.category}
                                                    </span>

                                                </div>

                                            </div>

                                            {/* Arrow */}

                                            <div
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${isOpen
                                                    ?
                                                    "bg-indigo-50 text-indigo-600"
                                                    :

                                                    "bg-slate-50 text-slate-400"
                                                    }`}
                                            >
                                                <FaChevronDown
                                                    className={`text-xs transition-transform duration-200 ${isOpen
                                                        ?

                                                        "rotate-180"
                                                        :

                                                        ""
                                                        }`}
                                                />
                                            </div>

                                        </button>

                                        {/* ANSWER */}

                                        {isOpen && (
                                            <div className="px-5 pb-5">

                                                <div className="ml-14 rounded-xl bg-indigo-50/60 px-5 py-4">

                                                    <p className="text-sm leading-7 text-slate-600">
                                                        {faq.answer}
                                                    </p>

                                                </div>

                                            </div>
                                        )}

                                    </div>
                                );
                            })
                        ) : (
                            /* ================= NO RESULT ================= */

                            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-xl text-slate-400">
                                    <FaSearch />
                                </div>

                                <h3 className="mt-4 text-lg font-semibold text-slate-700">
                                    No questions found
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Try searching with a different keyword.
                                </p>

                                <button
                                    onClick={() => setSearch("")}
                                    className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
                                >
                                    Clear Search
                                </button>

                            </div>
                        )}

                    </div>
                </div>

                {/* ================= SUPPORT CARD ================= */}

                <div className="mt-8 overflow-hidden rounded-2xl bg-slate-900 p-6 shadow-lg md:p-8">

                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-xl text-indigo-400">
                                <FaHeadset />
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Still have questions?
                                </h3>

                                <p className="mt-1 text-sm text-slate-400">
                                    Our support team is ready to help you.
                                </p>
                            </div>

                        </div>

                        <button className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 md:w-auto">
                            Contact Support
                        </button>

                    </div>

                </div>

                {/* ================= FOOTER ================= */}

                <div className="py-8 text-center">

                    <p className="text-xs text-slate-400">
                        Need more help? Contact our support team for
                        assistance.
                    </p>

                </div>

            </div>
        </div>
    );
}
