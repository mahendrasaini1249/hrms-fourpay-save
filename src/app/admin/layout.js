"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/app/commoncomopents/Header";
import Sidebar from "@/app/commoncomopents/Sidebar";
import Breadcrumb from "@/app/commoncomopents/Breadcrumb";

export default function AdminLayout({ children }) {

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {

            router.replace("/login");

        } else {

            setLoading(false);

        }

    }, [router]);

    // Auth check hone tak kuch mat dikhao
    if (loading) {
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

                <Header />

                <section className="p-5">

                    <Breadcrumb />

                    {children}

                </section>

            </main>

        </div>
    );
}