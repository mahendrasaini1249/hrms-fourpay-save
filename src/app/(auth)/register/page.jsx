
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.password.trim() ||
            !formData.role
        ) {
            toast.error("Please fill all fields");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    password: formData.password,
                    role: formData.role,
                }
            );

            console.log("Register Response:", response.data);

            toast.success(
                response.data?.message || "Registration successful!"
            );

            setFormData({
                name: "",
                email: "",
                password: "",
                role: "",
            });

            setTimeout(() => {
                router.replace("/login");
            }, 1500);

        } catch (error) {
            console.log("Register Error:", error);

            if (error.response) {
                toast.error(
                    error.response.data?.message ||
                    "Registration failed"
                );
            } else if (error.request) {
                toast.error("Backend server is not running.");
            } else {
                toast.error(
                    "Something went wrong. Please try again."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="light"
            />

            {/* Register Card */}
            <div className="w-full max-w-sm rounded-xl bg-white px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.10)] border border-slate-100">

                {/* Header */}
                <div className="text-center mb-3 py-4">

                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white shadow">
                        H
                    </div>

                    <p className="text-sm text-slate-700">
                        Register for your HRMS account
                    </p>

                </div>

                <form onSubmit={handleRegister}>

                    {/* Name */}
                    <div className="mb-2.5">
                        <label className="mb-1 block text-xs font-medium text-slate-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-2.5">
                        <label className="mb-1 block text-xs font-medium text-slate-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2.5">
                        <label className="mb-1 block text-xs font-medium text-slate-700">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                        />

                        <p className="mt-0.5 text-[10px] text-slate-400">
                            Minimum 6 characters
                        </p>
                    </div>

                    {/* Role */}
                    <div className="mb-3">
                        <label className="mb-1 block text-xs font-medium text-slate-700">
                            Role
                        </label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                        >
                            <option value="">
                                Select your role
                            </option>

                            <option value="employee">
                                Employee
                            </option>

                            <option value="manager">
                                Manager
                            </option>

                            <option value="hr">
                                HR
                            </option>

                            <option value="admin">
                                Admin
                            </option>
                        </select>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-blue-400"
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>

                </form>

                {/* Login */}
                <div className="mt-3 border-t border-slate-100 pt-3 text-center">

                    <p className="text-xs text-slate-500">
                        Already have an account?{" "}

                        <Link
                            href="/login"
                            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}
