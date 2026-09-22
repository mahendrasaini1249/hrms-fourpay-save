"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/app/commoncomopents/Header";
import Sidebar from "@/app/commoncomopents/Sidebar";
import Breadcrumb from "@/app/commoncomopents/Breadcrumb";

import { useAuth } from "@/context/AuthContext";


export default function AdminLayout({ children }) {

    const router = useRouter();

    const {
        user,
        token,
        loading,
    } = useAuth();

    useEffect(() => {

        if (loading) {
            return;
        }


        if (!user || !token) {

            router.replace("/login");

        }

    }, [
        user,
        token,
        loading,
        router
    ]);


    // Auth check hone tak kuch mat dikhao
    if (loading) {

        return null;

    }


    // Login nahi hai
    if (!user || !token) {

        return null;

    }


    return (

        <div className="flex max-w-[1400px] mx-auto min-h-screen">


            {/* Sidebar */}

            <aside className="w-[20%] border-r">

                <Sidebar />

            </aside>

            {/* Main */}

            <main className="w-[80%]">

                {/* Header */}

                <Header />

                <section className="p-5">

                    {/* Breadcrumb */}

                    <Breadcrumb />

                    {/* Page */}

                    {children}

                </section>

            </main>

        </div>

    );

}