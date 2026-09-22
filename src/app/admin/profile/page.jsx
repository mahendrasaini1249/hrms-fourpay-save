
"use client";

import React, { useEffect, useState } from "react";

import {
    UserRound,
    Mail,
    ShieldCheck,
    CheckCircle2,
    BriefcaseBusiness,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import { getMyProfile } from "@/services/profileApi";

export default function ProfilePage() {

    const { user, token } = useAuth();

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    // Fetch Login User Profile
    useEffect(() => {

        const fetchProfile = async () => {

            if (!token) {
                setError("Please login first");
                setLoading(false);
                return;
            }

            try {

                const data = await getMyProfile(token);

                const profileData =
                    data?.user ||
                    data?.data ||
                    data;

                setProfile(profileData);

            } catch (error) {

                console.log("Profile Error:", error);

                setError(
                    error?.response?.data?.message ||
                    "Profile fetch failed"
                );

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, [token]);

    // Loading
    if (loading) {

        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">

                <div className="flex flex-col items-center gap-3">

                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600"></div>

                    <p className="text-sm text-slate-500">
                        Loading Profile...
                    </p>

                </div>

            </div>
        );

    }

    // Error
    if (error) {

        return (
            <div className="p-6">

                <div className="rounded-xl border border-red-200 bg-red-50 p-4">

                    <p className="text-sm font-medium text-red-600">
                        {error}
                    </p>

                </div>

            </div>
        );

    }

    // No Profile
    if (!profile) {

        return (
            <div className="p-6">

                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">

                    <p className="text-slate-500">
                        Profile not found
                    </p>

                </div>

            </div>
        );

    }

    // Login Basic Details
    const userName =
        profile?.name ||
        profile?.fullName ||
        user?.name ||
        "User";

    const email =
        profile?.email ||
        user?.email ||
        "-";

    const userRole = (
        profile?.role ||
        user?.role ||
        "user"
    ).toLowerCase();

    const firstLetter =
        userName.charAt(0).toUpperCase();

    // Role Color
    const roleConfig = {

        admin: {
            label: "Admin",
            color: "bg-purple-100 text-purple-700",
            iconColor: "bg-purple-100 text-purple-600",
        },

        hr: {
            label: "HR",
            color: "bg-emerald-100 text-emerald-700",
            iconColor: "bg-emerald-100 text-emerald-600",
        },

        manager: {
            label: "Manager",
            color: "bg-orange-100 text-orange-700",
            iconColor: "bg-orange-100 text-orange-600",
        },

        employee: {
            label: "Employee",
            color: "bg-blue-100 text-blue-700",
            iconColor: "bg-blue-100 text-blue-600",
        },

    };

    const currentRole = roleConfig[userRole] || {

        label: userRole,

        color: "bg-slate-100 text-slate-700",

        iconColor: "bg-slate-100 text-slate-600",

    };

    return (

        <div className="min-h-screen bg-slate-50">
            {/* Main Profile Card */}
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {/* Profile Banner */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 px-5 py-5 sm:px-10">

                    {/* Decorative Background */}
                    <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10"></div>

                    <div className="absolute -bottom-24 right-24 h-52 w-52 rounded-full bg-white/5"></div>

                    {/* Profile Content */}
                    <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center">

                        {/* Avatar */}
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white/40 bg-white text-5xl font-bold text-blue-600 shadow-lg">

                            {firstLetter}

                        </div>

                        {/* User Information */}
                        <div className="text-center sm:text-left">

                            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-blue-100">
                                Welcome Back
                            </p>

                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                {userName}
                            </h2>

                            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">

                                <span
                                    className={`rounded-full px-4 py-1.5 text-xs font-semibold ${currentRole.color}`}
                                >
                                    {currentRole.label}
                                </span>

                                <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white">

                                    <CheckCircle2 size={14} />

                                    Active Account

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Profile Body */}
                <div className="p-6 sm:p-10">

                    {/* Section Heading */}
                    <div className="mb-6 flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                            <UserRound size={20} />

                        </div>

                        <div>

                            <h3 className="text-lg font-bold text-slate-800">
                                Account Information
                            </h3>

                            <p className="text-xs text-slate-500">
                                Your registered login details
                            </p>

                        </div>

                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        {/* Full Name */}
                        <div className="group rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">

                            <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

                                    <UserRound size={20} />

                                </div>

                                <div className="min-w-0">

                                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                                        Full Name
                                    </p>

                                    <p className="break-words text-sm font-semibold text-slate-800">
                                        {userName}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Email */}
                        <div className="group rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">

                            <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">

                                    <Mail size={20} />

                                </div>

                                <div className="min-w-0">

                                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                                        Email Address
                                    </p>

                                    <p className="break-all text-sm font-semibold text-slate-800">
                                        {email}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Role */}
                        <div className="group rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">

                            <div className="flex items-start gap-4">

                                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${currentRole.iconColor}`}>

                                    <ShieldCheck size={20} />

                                </div>

                                <div className="min-w-0">

                                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                                        Account Role
                                    </p>

                                    <p className="text-sm font-semibold capitalize text-slate-800">
                                        {currentRole.label}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Account Status */}
                        <div className="group rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-blue-200 hover:bg-blue-50/30">

                            <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">

                                    <BriefcaseBusiness size={20} />

                                </div>

                                <div className="min-w-0">

                                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                                        Account Status
                                    </p>

                                    <div className="flex items-center gap-2">

                                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                                        <p className="text-sm font-semibold text-emerald-600">
                                            Active
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Bottom Note */}
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4">

                        <ShieldCheck
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-600"
                        />

                        <p className="text-xs leading-5 text-blue-700">
                            Your role and account information are managed through the HRMS system.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}