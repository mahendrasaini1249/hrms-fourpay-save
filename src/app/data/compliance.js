const complianceData = [

    // =========================
    // PF
    // =========================
    {
        id: 1,
        module: "pf",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        uanNumber: "100123456789",
        pfAmount: 1800,
        employerContribution: 1800,
        status: "Active"
    },
    {
        id: 2,
        module: "pf",
        employeeId: "EMP002",
        employeeName: "Priya Singh",
        uanNumber: "100987654321",
        pfAmount: 2100,
        employerContribution: 2100,
        status: "Active"
    },

    // =========================
    // ESI
    // =========================
    {
        id: 3,
        module: "esi",
        employeeId: "EMP003",
        employeeName: "Rahul Verma",
        esiNumber: "ESI10001",
        employeeContribution: 750,
        employerContribution: 2450,
        status: "Active"
    },
    {
        id: 4,
        module: "esi",
        employeeId: "EMP004",
        employeeName: "Neha Gupta",
        esiNumber: "ESI10002",
        employeeContribution: 680,
        employerContribution: 2200,
        status: "Active"
    },

    // =========================
    // TDS
    // =========================
    {
        id: 5,
        module: "tds",
        employeeId: "EMP005",
        employeeName: "Vikas Kumar",
        financialYear: "2026-27",
        taxableIncome: 650000,
        tdsAmount: 25000,
        status: "Deducted"
    },
    {
        id: 6,
        module: "tds",
        employeeId: "EMP006",
        employeeName: "Sneha Patel",
        financialYear: "2026-27",
        taxableIncome: 720000,
        tdsAmount: 32000,
        status: "Deducted"
    },

    // =========================
    // PROFESSIONAL TAX
    // =========================
    {
        id: 7,
        module: "professional-tax",
        employeeId: "EMP007",
        employeeName: "Rohit Meena",
        state: "Rajasthan",
        taxAmount: 200,
        month: "September",
        status: "Paid"
    },
    {
        id: 8,
        module: "professional-tax",
        employeeId: "EMP008",
        employeeName: "Pooja Sharma",
        state: "Maharashtra",
        taxAmount: 200,
        month: "September",
        status: "Pending"
    },

    // =========================
    // LABOUR COMPLIANCE
    // =========================
    {
        id: 9,
        module: "labour-compliance",
        complianceId: "LC001",
        complianceName: "Minimum Wages Compliance",
        department: "HR",
        dueDate: "2026-09-15",
        status: "Compliant"
    },
    {
        id: 10,
        module: "labour-compliance",
        complianceId: "LC002",
        complianceName: "Working Hours Compliance",
        department: "Operations",
        dueDate: "2026-09-20",
        status: "Pending"
    },

    // =========================
    // STATUTORY REPORTS
    // =========================
    {
        id: 11,
        module: "statutory-reports",
        reportId: "SR001",
        reportName: "PF Monthly Report",
        reportingMonth: "August 2026",
        submittedDate: "2026-09-05",
        status: "Submitted"
    },
    {
        id: 12,
        module: "statutory-reports",
        reportId: "SR002",
        reportName: "ESI Monthly Report",
        reportingMonth: "August 2026",
        submittedDate: "2026-09-06",
        status: "Submitted"
    },

    // =========================
    // COMPLIANCE CALENDAR
    // =========================
    {
        id: 13,
        module: "compliance-calendar",
        eventId: "CC001",
        eventName: "PF Payment Due",
        dueDate: "2026-09-15",
        department: "Payroll",
        status: "Upcoming"
    },
    {
        id: 14,
        module: "compliance-calendar",
        eventId: "CC002",
        eventName: "TDS Return Filing",
        dueDate: "2026-09-30",
        department: "Finance",
        status: "Upcoming"
    }

];

export default complianceData;