
"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaBook,
  FaUserTie,
  FaCog,
  FaFileAlt,
  FaHeadset,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const categories = [
  {
    title: "Getting Started",
    description: "Learn the basics and get started quickly.",
    icon: <FaBook />,
    count: "12 Articles",
  },
  {
    title: "Account & Profile",
    description: "Manage your account and profile settings.",
    icon: <FaUserTie />,
    count: "8 Articles",
  },
  {
    title: "System Settings",
    description: "Configure your system and preferences.",
    icon: <FaCog />,
    count: "15 Articles",
  },
  {
    title: "Documents",
    description: "Manage documents, files and resources.",
    icon: <FaFileAlt />,
    count: "10 Articles",
  },
];

const articles = [
  "How to create a new employee?",
  "How to update your profile information?",
  "How to manage employee attendance?",
  "How to create and manage leave requests?",
  "How to generate reports?",
];

export default function HelpCenter() {

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 px-6 py-12 text-center shadow-xl md:px-10">

          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative z-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur">
              <FaQuestionCircle />
            </div>

            <h1 className="text-3xl font-bold text-white md:text-4xl">
              How can we help you?
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-100 md:text-base">
              Search our knowledge base or browse through the
              categories below to find the information you need.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 flex max-w-2xl items-center rounded-2xl bg-white p-2 shadow-2xl">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center text-slate-400">
                <FaSearch />
              </div>

              <input
                type="text"
                placeholder="Search for articles, guides, FAQs..."
                className="h-11 flex-1 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* ================= CATEGORIES ================= */}
        <section className="mt-10">

          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Browse by Category
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Find answers based on the area you need help with.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    {category.icon}
                  </div>

                  <FaArrowRight className="text-sm text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500" />
                </div>

                <h3 className="mt-5 font-semibold text-slate-800">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                <p className="mt-4 text-xs font-semibold text-indigo-600">
                  {category.count}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ================= ARTICLES + SUPPORT ================= */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* Popular Articles */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">

            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-800">
                Popular Articles
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Most frequently viewed help articles.
              </p>
            </div>

            <div className="divide-y divide-slate-100">

              {articles.map((article, index) => (
                <div
                  key={index}
                  className="group flex cursor-pointer items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-sm text-indigo-500 group-hover:bg-indigo-50">
                      <FaBook />
                    </div>

                    <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600">
                      {article}
                    </span>

                  </div>

                  <FaArrowRight className="text-xs text-slate-300 group-hover:text-indigo-500" />
                </div>
              ))}

            </div>
          </div>

          {/* Support Card */}
          <div className="rounded-2xl bg-slate-900 p-7 text-white shadow-lg">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-xl text-indigo-400">
              <FaHeadset />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Still need help?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Can't find what you're looking for? Our support
              team is ready to help you.
            </p>

            <div className="mt-6 space-y-3">

              <button className="flex w-full items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-left text-sm transition hover:bg-white/10">
                <FaEnvelope className="text-indigo-400" />
                <span>Contact Support</span>
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-left text-sm transition hover:bg-white/10">
                <FaPhoneAlt className="text-indigo-400" />
                <span>Call Support</span>
              </button>

            </div>

            <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold transition hover:bg-indigo-700">
              Get Support
            </button>

          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="py-8 text-center">
          <p className="text-sm text-slate-400">
            Can't find the answer you're looking for?
            <span className="ml-1 cursor-pointer font-semibold text-indigo-600 hover:text-indigo-700">
              Contact our support team
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
