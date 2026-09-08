
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {

        e.preventDefault();

        setError("");

        const storedUser = localStorage.getItem("registeredUser");

        if (!storedUser) {

            setError("Please register first.");

            setTimeout(() => {
                router.push("/register");
            }, 1000);

            return;
        }

        const user = JSON.parse(storedUser);

        if (
            formData.email !== user.email ||
            formData.password !== user.password
        ) {
            setError("Invalid email or password.");
            return;
        }

        localStorage.setItem("isLoggedIn", "true");

        router.replace("/admin/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

            {/* Login Card */}
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white px-7 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.12)]">

                {/* Header */}
                <div className="mb-6 text-center">

                    {/* HRMS Logo */}
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-200">
                        H
                    </div>

                    {/* HRMS Name */}
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                        HRMS
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Human Resource Management System
                    </p>

                    <p className="mt-2 text-sm font-medium text-slate-600">
                        Login to your account
                    </p>

                </div>

                {/* Error */}
                {error && (
                    <div className="mb-4 flex items-center rounded-lg border border-red-100 bg-red-50 px-3 py-2.5 text-sm text-red-600">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>

                    {/* Email */}
                    <div className="mb-4">

                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>

                    {/* Password */}
                    <div className="mb-5">

                        <label className="mb-1.5 block text-sm font-medium text-slate-700">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 hover:shadow-lg active:scale-[0.99]"
                    >
                        Login
                    </button>

                </form>

                {/* Register */}
                <div className="mt-5 border-t border-slate-100 pt-4 text-center">

                    <p className="text-sm text-slate-500">
                        Don't have an account?{" "}

                        <Link
                            href="/register"
                            className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
                        >
                            Register
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

