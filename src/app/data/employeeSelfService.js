const employeeSelfServiceData = [

    // =========================
    // MY PROFILE
    // =========================

    {
        id: 1,
        module: "my-profile",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        department: "IT",
        designation: "Software Developer",
        email: "amit@example.com",
        phone: "9876543210",
        status: "Active"
    },
    {
        id: 2,
        module: "my-profile",
        employeeId: "EMP002",
        employeeName: "Priya Singh",
        department: "HR",
        designation: "HR Executive",
        email: "priya@example.com",
        phone: "9123456780",
        status: "Active"
    },

    // =========================
    // MY ATTENDANCE
    // =========================

    {
        id: 3,
        module: "my-attendance",
        attendanceId: "ATT001",
        employeeId: "EMP001",
        date: "2026-09-04",
        checkIn: "09:15 AM",
        checkOut: "06:10 PM",
        workingHours: "8h 55m",
        status: "Present"
    },
    {
        id: 4,
        module: "my-attendance",
        attendanceId: "ATT002",
        employeeId: "EMP002",
        date: "2026-09-04",
        checkIn: "09:30 AM",
        checkOut: "06:05 PM",
        workingHours: "8h 35m",
        status: "Present"
    },

    // =========================
    // MY LEAVES
    // =========================

    {
        id: 5,
        module: "my-leaves",
        leaveId: "LV001",
        employeeId: "EMP001",
        leaveType: "Casual Leave",
        fromDate: "2026-09-10",
        toDate: "2026-09-11",
        days: 2,
        status: "Approved"
    },
    {
        id: 6,
        module: "my-leaves",
        leaveId: "LV002",
        employeeId: "EMP002",
        leaveType: "Sick Leave",
        fromDate: "2026-09-08",
        toDate: "2026-09-08",
        days: 1,
        status: "Pending"
    },

    // =========================
    // MY PAYSLIPS
    // =========================

    {
        id: 7,
        module: "my-payslips",
        payslipId: "PAY001",
        employeeId: "EMP001",
        month: "August 2026",
        basicSalary: "₹40,000",
        deductions: "₹4,000",
        netSalary: "₹36,000",
        status: "Generated"
    },
    {
        id: 8,
        module: "my-payslips",
        payslipId: "PAY002",
        employeeId: "EMP002",
        month: "August 2026",
        basicSalary: "₹32,000",
        deductions: "₹3,200",
        netSalary: "₹28,800",
        status: "Generated"
    },

    // =========================
    // MY DOCUMENTS
    // =========================

    {
        id: 9,
        module: "my-documents",
        documentId: "DOC001",
        employeeId: "EMP001",
        documentName: "Aadhaar Card",
        documentType: "Identity Proof",
        uploadDate: "2026-08-10",
        status: "Verified"
    },
    {
        id: 10,
        module: "my-documents",
        documentId: "DOC002",
        employeeId: "EMP002",
        documentName: "PAN Card",
        documentType: "Identity Proof",
        uploadDate: "2026-08-12",
        status: "Verified"
    },

    // =========================
    // MY EXPENSES
    // =========================

    {
        id: 11,
        module: "my-expenses",
        expenseId: "EXP001",
        employeeId: "EMP001",
        expenseType: "Travel",
        expenseDate: "2026-08-25",
        amount: "₹2,500",
        description: "Client Visit",
        status: "Approved"
    },
    {
        id: 12,
        module: "my-expenses",
        expenseId: "EXP002",
        employeeId: "EMP002",
        expenseType: "Food",
        expenseDate: "2026-08-28",
        amount: "₹800",
        description: "Business Lunch",
        status: "Pending"
    },

    // =========================
    // MY ASSETS
    // =========================

    {
        id: 13,
        module: "my-assets",
        assetId: "AST001",
        employeeId: "EMP001",
        assetName: "Laptop",
        assetType: "IT Equipment",
        assignedDate: "2026-01-10",
        condition: "Good",
        status: "Assigned"
    },
    {
        id: 14,
        module: "my-assets",
        assetId: "AST002",
        employeeId: "EMP002",
        assetName: "Mobile Phone",
        assetType: "IT Equipment",
        assignedDate: "2026-02-15",
        condition: "Good",
        status: "Assigned"
    },

    // =========================
    // MY GOALS
    // =========================

    {
        id: 15,
        module: "my-goals",
        goalId: "GOAL001",
        employeeId: "EMP001",
        goalTitle: "Complete React Project",
        targetDate: "2026-12-31",
        progress: "70%",
        priority: "High",
        status: "In Progress"
    },
    {
        id: 16,
        module: "my-goals",
        goalId: "GOAL002",
        employeeId: "EMP002",
        goalTitle: "HR Process Improvement",
        targetDate: "2026-11-30",
        progress: "50%",
        priority: "Medium",
        status: "In Progress"
    },

    // =========================
    // MY PERFORMANCE
    // =========================

    {
        id: 17,
        module: "my-performance",
        reviewId: "REV001",
        employeeId: "EMP001",
        reviewPeriod: "2026 H1",
        reviewer: "Team Lead",
        rating: "4.5/5",
        reviewDate: "2026-07-15",
        status: "Completed"
    },
    {
        id: 18,
        module: "my-performance",
        reviewId: "REV002",
        employeeId: "EMP002",
        reviewPeriod: "2026 H1",
        reviewer: "HR Manager",
        rating: "4.2/5",
        reviewDate: "2026-07-18",
        status: "Completed"
    },

    // =========================
    // MY REQUESTS
    // =========================

    {
        id: 19,
        module: "my-requests",
        requestId: "REQ001",
        employeeId: "EMP001",
        requestType: "Work From Home",
        requestDate: "2026-09-02",
        description: "WFH for one day",
        priority: "Normal",
        status: "Approved"
    },
    {
        id: 20,
        module: "my-requests",
        requestId: "REQ002",
        employeeId: "EMP002",
        requestType: "Salary Certificate",
        requestDate: "2026-09-04",
        description: "Required for bank",
        priority: "Normal",
        status: "Pending"
    }

];

export default employeeSelfServiceData;