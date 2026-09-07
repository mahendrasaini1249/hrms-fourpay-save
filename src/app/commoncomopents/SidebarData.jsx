import {
    Users,
    Building2,
    BriefcaseBusiness,
    CalendarCheck,
    CalendarDays,
    Wallet,
    ChartNoAxesCombined,
    GraduationCap,
    Receipt,
    Plane,
    Laptop,
    FileText,
    Megaphone,
    UserRound,
    Clock3,
    ShieldCheck,
    BarChart3,
    Settings,
    UserCog,
    CircleHelp,
} from "lucide-react";

const sidebarData = [

    // {
    //     id: "dashboard",
    //     title: "Dashboard",
    //     icon: Users,
    //     children: [
    //         {
    //             title: "Overview",
    //             path: "/admin/dashboard/overview",
    //         },
    //         {
    //             title: "HR Dashboard",
    //             path: "/admin/dashboard/hr-dashboard",
    //         },
    //         {
    //             title: "Employee Dashboard",
    //             path: "/admin/dashboard/employee-dashboard",
    //         },
    //         {
    //             title: "Attendance Dashboard",
    //             path: "/admin/dashboard/attendance-dashboard",
    //         },
    //         {
    //             title: "Leave Dashboard",
    //             path: "/admin/dashboard/leave-dashboard",
    //         },
    //         {
    //             title: "Payroll Dashboard",
    //             path: "/admin/dashboard/payroll-dashboard",
    //         },
    //     ],
    // },

    // ================= EMPLOYEE MANAGEMENT =================
    {
        id: "employee-management",
        title: "Employee Managment",
        icon: Users,
        children: [
            {
                title: "All Employees",
                path: "/admin/employeemanagement/all-employee",
            },
            {
                title: "Add Employee",
                path: "/admin/employeemanagement/add-employee",
            },
            {
                title: "Employee Directory",
                path: "/admin/employeemanagement/employee-directory",
            },
            {
                title: "Employee ID Cards",
                path: "/admin/employeemanagement/id-cards",
            },
            {
                title: "Emergency Contacts",
                path: "/admin/employeemanagement/emergency-contacts",
            },
            {
                title: "Employee History",
                path: "/admin/employeemanagement/employee-history",
            },
            {
                title: "Exit Employees",
                path: "/admin/employeemanagement/exit-employee",
            },
        ],
    },

    // ================= ORGANIZATION =================
    {
        id: "organization",
        title: "Organization",
        icon: Building2,
        children: [
            {
                title: "Company",
                path: "/admin/organization/company",
            },
            {
                title: "Branches",
                path: "/admin/organization/branches",
            },
            {
                title: "Departments",
                path: "/admin/organization/departments",
            },
            {
                title: "Designations",
                path: "/admin/organization/designations",
            },
            {
                title: "Teams",
                path: "/admin/organization/teams",
            },
            {
                title: "Locations",
                path: "/admin/organization/locations",
            },
            {
                title: "Reporting Managers",
                path: "/admin/organization/reporting-managers",
            },
            {
                title: "Organization Chart",
                path: "/admin/organization/chart",
            },
        ],
    },

    // ================= HIRING & ONBOARDING =================
    {
        id: "hiring-onboarding",
        title: "Hiring & Onboarding",
        icon: BriefcaseBusiness,
        children: [
            {
                title: "Job Positions",
                path: "/admin/hiring-onboarding/job-positions",
            },
            {
                title: "Job Posts",
                path: "/admin/hiring-onboarding/job-posts",
            },
            {
                title: "Job Applications",
                path: "/admin/hiring-onboarding/job-applications",
            },
            {
                title: "Candidates",
                path: "/admin/hiring-onboarding/candidates",
            },
            {
                title: "Interview Schedule",
                path: "/admin/hiring-onboarding/interviews",
            },
            {
                title: "Interview Feedback",
                path: "/admin/hiring-onboarding/interview-feedback",
            },
            {
                title: "Recruitment Pipeline",
                path: "/admin/hiring-onboarding/recruitment-pipeline",
            },
            {
                title: "Joining Checklist",
                path: "/admin/hiring-onboarding/joining-checklist",
            },
            {
                title: "Offer Management",
                path: "/admin/hiring-onboarding/offer-management",
            },
            {
                title: "Background Verification",
                path: "/admin/hiring-onboarding/background-verification",
            },
            {
                title: "Probation",
                path: "/admin/hiring-onboarding/probation",
            },
            {
                title: "Confirmation",
                path: "/admin/hiring-onboarding/confirmation",
            },
        ],
    },

    // ================= ATTENDANCE =================
    {
        id: "attendance",
        title: "Attendance",
        icon: CalendarCheck,
        children: [
            {
                title: "Daily Attendance",
                path: "/admin/attendance/daily",
            },
            {
                title: "Monthly Attendance",
                path: "/admin/attendance/monthly",
            },
            {
                title: "Check In / Check Out",
                path: "/admin/attendance/check-in-out",
            },
            {
                title: "Biometric Attendance",
                path: "/admin/attendance/biometric",
            },
            {
                title: "Self Attendance",
                path: "/admin/attendance/self",
            },
            {
                title: "Late Coming",
                path: "/admin/attendance/late-coming",
            },
            {
                title: "Early Leaving",
                path: "/admin/attendance/early-leaving",
            },
            {
                title: "Overtime",
                path: "/admin/attendance/overtime",
            },
            {
                title: "Attendance Regularization",
                path: "/admin/attendance/regularization",
            },
        ],
    },

    // ================= LEAVE MANAGEMENT =================
    {
        id: "leave-management",
        title: "Leave Management",
        icon: CalendarDays,
        children: [
            {
                title: "Leave Types",
                path: "/admin/leave-management/leave-types",
            },
            {
                title: "Leave Policies",
                path: "/admin/leave-management/leave-policies",
            },
            {
                title: "Apply Leave",
                path: "/admin/leave-management/leave-apply",
            },
            {
                title: "Leave Requests",
                path: "/admin/leave-management/leave-requests",
            },
            {
                title: "Leave Approval",
                path: "/admin/leave-management/leave-approval",
            },
            {
                title: "Leave Balance",
                path: "/admin/leave-management/leave-balance",
            },
            {
                title: "Holiday Calendar",
                path: "/admin/leave-management/leave-holidays",
            },
        ],
    },

    // ================= PAYROLL =================
    {
        id: "payroll",
        title: "Payroll",
        icon: Wallet,
        children: [

            {
                title: "Salary Structure",
                path: "/admin/payroll/salary-structure",
            },
            {
                title: "Salary Components",
                path: "/admin/payroll/salary-components",
            },
            {
                title: "Employee Salary",
                path: "/admin/payroll/employee-salary",
            },
            {
                title: "Generate Payroll",
                path: "/admin/payroll/generate",
            },
            {
                title: "Payroll Processing",
                path: "/admin/payroll/processing",
            },
            {
                title: "Payslips",
                path: "/admin/payroll/payslips",
            },
            {
                title: "Bonuses",
                path: "/admin/payroll/bonuses",
            },
            {
                title: "Deductions",
                path: "/admin/payroll/deductions",
            },
            {
                title: "Loans / Advances",
                path: "/admin/payroll/loans",
            },
            {
                title: "Tax / TDS",
                path: "/admin/payroll/tax",
            },
        ],
    },

    // ================= PERFORMANCE =================
    {
        id: "performance",
        title: "Performance",
        icon: ChartNoAxesCombined,
        children: [
            {
                title: "Goals / KPIs",
                path: "/admin/performance/goals",
            },
            {
                title: "Appraisals",
                path: "/admin/performance/appraisals",
            },
            {
                title: "Performance Reviews",
                path: "/admin/performance/reviews",
            },
            {
                title: "Self Assessment",
                path: "/admin/performance/self-assessment",
            },
            {
                title: "Manager Assessment",
                path: "/admin/performance/manager-assessment",
            },
            {
                title: "Performance Rating",
                path: "/admin/performance/rating",
            },
            {
                title: "Promotion",
                path: "/admin/performance/promotion",
            },
            {
                title: "Increment",
                path: "/admin/performance/increment",
            },
        ],
    },

    // ================= TRAINING =================
    {
        id: "training",
        title: "Training",
        icon: GraduationCap,
        children: [
            {
                title: "Training Programs",
                path: "/admin/training/programs",
            },
            {
                title: "Courses",
                path: "/admin/training/courses",
            },
            {
                title: "Trainers",
                path: "/admin/training/trainers",
            },
            {
                title: "Employee Training",
                path: "/admin/training/employee-training",
            },
            {
                title: "Training Calendar",
                path: "/admin/training/calendar",
            },
            {
                title: "Certifications",
                path: "/admin/training/certifications",
            },
        ],
    },

    // ================= EXPENSES =================
    {
        id: "expenses",
        title: "Expenses",
        icon: Receipt,
        children: [
            {
                title: "Expense Categories",
                path: "/admin/expenses/categories",
            },
            {
                title: "Submit Expense",
                path: "/admin/expenses/submit",
            },
            {
                title: "Expense Requests",
                path: "/admin/expenses/requests",
            },
            {
                title: "Expense Approval",
                path: "/admin/expenses/approval",
            },
            {
                title: "Reimbursements",
                path: "/admin/expenses/reimbursements",
            },
        ],
    },

    // ================= TRAVEL =================
    {
        id: "travel",
        title: "Travel",
        icon: Plane,
        children: [
            {
                title: "Travel Requests",
                path: "/admin/travel/travel-requests",
            },
            {
                title: "Travel Approval",
                path: "/admin/travel/travel-approval",
            },
            {
                title: "Travel Plans",
                path: "/admin/travel/plans",
            },
            {
                title: "Travel Expenses",
                path: "/admin/travel/travel-expenses",
            },
        ],
    },

    // ================= ASSETS =================
    {
        id: "assets",
        title: "Assets",
        icon: Laptop,
        children: [
            {
                title: "Asset Categories",
                path: "/admin/assets/assets-categories",
            },

            {
                title: "Assign Asset",
                path: "/admin/assets/assign",
            },
            {
                title: "Return Asset",
                path: "/admin/assets/return",
            },
            {
                title: "Asset History",
                path: "/admin/assets/history",
            },
            {
                title: "Asset Maintenance",
                path: "/admin/assets/maintenance",
            },
        ],
    },

    // ================= DOCUMENTS =================
    {
        id: "documents",
        title: "Documents",
        icon: FileText,
        children: [
            {
                title: "Company Documents",
                path: "/admin/documents/company-documents",
            },
            {
                title: "Employee Documents",
                path: "/admin/documents/employee",
            },
            {
                title: "HR Policies",
                path: "/admin/documents/policies",
            },
            {
                title: "Appointment Letters",
                path: "/admin/documents/appointment-letters",
            },
            {
                title: "Salary Letters",
                path: "/admin/documents/salary-letters",
            },
            {
                title: "Experience Letters",
                path: "/admin/documents/experience-letters",
            },
            {
                title: "Joining Documents",
                path: "/admin/documents/joining-documents",
            },
        ],
    },

    // ================= COMMUNICATION =================
    {
        id: "communication",
        title: "Communication",
        icon: Megaphone,
        children: [
            {
                title: "Announcements",
                path: "/admin/communication/announcements",
            },
            {
                title: "Notifications",
                path: "/admin/communication/notifications",
            },
            {
                title: "Internal Messages",
                path: "/admin/communication/messages",
            },
            {
                title: "communication Email",
                path: "/admin/communication/communication-email",
            },
            {
                title: "SMS",
                path: "/admin/communication/sms",
            },
            {
                title: "Employee Circulars",
                path: "/admin/communication/circulars",
            },
        ],
    },

    // ================= SELF SERVICE =================
    {
        id: "self-employee-service",
        title: "Employee Self Service",
        icon: UserRound,
        children: [
            {
                title: "My Profile",
                path: "/admin/self-employee-service/profile",
            },
            {
                title: "My Attendance",
                path: "/admin/self-employee-service/attendance",
            },
            {
                title: "My Leaves",
                path: "/admin/self-employee-service/leaves",
            },
            {
                title: "My Payslips",
                path: "/admin/self-employee-service/payslips",
            },
            {
                title: "My Documents",
                path: "/admin/self-employee-service/documents",
            },
            {
                title: "My Expenses",
                path: "/admin/self-employee-service/expenses",
            },
            {
                title: "My Assets",
                path: "/admin/self-employee-service/assets",
            },
            {
                title: "My Goals",
                path: "/admin/self-employee-service/goals",
            },
            {
                title: "My Performance",
                path: "/admin/self-employee-service/performance",
            },
            {
                title: "My Requests",
                path: "/admin/self-employee-service/requests",
            },
        ],
    },

    // ================= SHIFTS =================
    {
        id: "shifts-management",
        title: "Shift Management",
        icon: Clock3,
        children: [
            {
                title: "Shifts",
                path: "/admin/shifts-management/shifts",
            },
            {
                title: "Shift Assignment",
                path: "/admin/shifts-management/assignment",
            },
            {
                title: "Shift Roster",
                path: "/admin/shifts-management/roster",
            },
            {
                title: "Weekly Schedule",
                path: "/admin/shifts-management/schedule",
            },
            {
                title: "Night Shift",
                path: "/admin/shifts-management/night-shift",
            },
        ],
    },

    // ================= COMPLIANCE =================
    {
        id: "compliance",
        title: "Compliance",
        icon: ShieldCheck,
        children: [
            {
                title: "PF",
                path: "/admin/compliance/pf",
            },
            {
                title: "ESI",
                path: "/admin/compliance/esi",
            },
            {
                title: "TDS",
                path: "/admin/compliance/tds",
            },
            {
                title: "Professional Tax",
                path: "/admin/compliance/professional-tax",
            },
            {
                title: "Labour Compliance",
                path: "/admin/compliance/labour",
            },
            {
                title: "Statutory Reports",
                path: "/admin/compliance/statutory-reports",
            },
            {
                title: "Compliance Calendar",
                path: "/admin/compliance/calendar",
            },
        ],
    },

    // ================= REPORTS =================
    {
        id: "reports",
        title: "Reports",
        icon: BarChart3,
        children: [
            {
                title: "Employee Reports",
                path: "/admin/reports/employees-reports",
            },
            {
                title: "Attendance Reports",
                path: "/admin/reports/attendance-reports",
            },
            {
                title: "Leave Reports",
                path: "/admin/reports/leaves-reports",
            },
            {
                title: "Payroll Reports",
                path: "/admin/reports/payroll-reports",
            },
            {
                title: "Recruitment Reports",
                path: "/admin/reports/recruitment-reports",
            },
            {
                title: "Performance Reports",
                path: "/admin/reports/performance-reports",
            },
            {
                title: "Expense Reports",
                path: "/admin/reports/expenses-reports",
            },
            {
                title: "Asset Reports",
                path: "/admin/reports/assets-reports",
            },
            {
                title: "Training Reports",
                path: "/admin/reports/training-reports",
            },
            {
                title: "Compliance Reports",
                path: "/admin/reports/compliance-reports",
            },
            {
                title: "Custom Reports",
                path: "/admin/reports/custom-reports",
            },
        ],
    },

    // ================= SETTINGS =================
    {
        id: "settings",
        title: "Settings",
        icon: Settings,
        children: [
            {
                title: "General Settings",
                path: "/admin/settings/general",
            },
            {
                title: "Company Settings",
                path: "/admin/settings/company",
            },
            {
                title: "Attendance Settings",
                path: "/admin/settings/attendance",
            },
            {
                title: "Leave Settings",
                path: "/admin/settings/leave",
            },
            {
                title: "Payroll Settings",
                path: "/admin/settings/payroll",
            },
            {
                title: "Notification Settings",
                path: "/admin/settings/notification",
            },
            {
                title: "Email Settings",
                path: "/admin/settings/email",
            },
            {
                title: "SMS Settings",
                path: "/admin/settings/setting-sms",
            },
            {
                title: "Holiday Settings",
                path: "/admin/settings/holidays",
            },
            {
                title: "Workflow Settings",
                path: "/admin/settings/workflow",
            },
        ],
    },

    // ================= USER ACCESS =================
    {
        id: "users-access",
        title: "User & Access",
        icon: UserCog,
        children: [
            {
                title: "Admin Users",
                path: "/admin/users-access/admin-users",
            },
            {
                title: "HR Users",
                path: "/admin/users-access/hr-users",
            },
            {
                title: "Manager Users",
                path: "/admin/users-access/manager-users",
            },
            {
                title: "Employee Users",
                path: "/admin/users-access/employee-users",
            },
        ],
    },

    // ================= HELP =================
    {
        id: "help",
        title: "Help & Support",
        icon: CircleHelp,
        children: [
            {
                title: "Help Center",
                path: "/admin/help/help-center",
            },
            {
                title: "FAQs",
                path: "/admin/help/faqs",
            },
            {
                title: "Support Tickets",
                path: "/admin/help/tickets",
            },
            {
                title: "Contact HR",
                path: "/admin/help/contact-hr",
            },
        ],
    },
];

export default sidebarData;