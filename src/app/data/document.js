const documentsData = [

    // =========================
    // COMPANY DOCUMENTS
    // =========================

    {
        id: 1,
        module: "company-documents",
        documentId: "CD001",
        documentName: "Company Registration Certificate",
        documentType: "Registration",
        uploadedBy: "Admin",
        uploadDate: "2026-01-10",
        status: "Active"
    },
    {
        id: 2,
        module: "company-documents",
        documentId: "CD002",
        documentName: "Company PAN Card",
        documentType: "Tax Document",
        uploadedBy: "HR Admin",
        uploadDate: "2026-01-15",
        status: "Active"
    },

    // =========================
    // EMPLOYEE DOCUMENTS
    // =========================

    {
        id: 3,
        module: "employee-documents",
        documentId: "ED001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        documentName: "Aadhaar Card",
        documentType: "Identity Proof",
        uploadDate: "2026-02-05",
        status: "Verified"
    },
    {
        id: 4,
        module: "employee-documents",
        documentId: "ED002",
        employeeId: "EMP002",
        employeeName: "Priya Singh",
        documentName: "PAN Card",
        documentType: "Identity Proof",
        uploadDate: "2026-02-08",
        status: "Verified"
    },

    // =========================
    // HR POLICIES
    // =========================

    {
        id: 5,
        module: "hr-policies",
        policyId: "POL001",
        policyName: "Leave Policy",
        policyType: "HR Policy",
        effectiveDate: "2026-01-01",
        version: "v2.0",
        status: "Active"
    },
    {
        id: 6,
        module: "hr-policies",
        policyId: "POL002",
        policyName: "Work From Home Policy",
        policyType: "HR Policy",
        effectiveDate: "2026-02-01",
        version: "v1.2",
        status: "Active"
    },

    // =========================
    // APPOINTMENT LETTERS
    // =========================

    {
        id: 7,
        module: "appointment-letters",
        letterId: "AL001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        designation: "Software Developer",
        joiningDate: "2026-03-01",
        issueDate: "2026-02-15",
        status: "Issued"
    },
    {
        id: 8,
        module: "appointment-letters",
        letterId: "AL002",
        employeeId: "EMP002",
        employeeName: "Priya Singh",
        designation: "HR Executive",
        joiningDate: "2026-03-05",
        issueDate: "2026-02-18",
        status: "Issued"
    },

    // =========================
    // SALARY LETTERS
    // =========================

    {
        id: 9,
        module: "salary-letters",
        letterId: "SL001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        designation: "Software Developer",
        salary: "₹6,00,000",
        effectiveDate: "2026-04-01",
        issueDate: "2026-03-25",
        status: "Issued"
    },
    {
        id: 10,
        module: "salary-letters",
        letterId: "SL002",
        employeeId: "EMP002",
        employeeName: "Priya Singh",
        designation: "HR Executive",
        salary: "₹4,80,000",
        effectiveDate: "2026-04-01",
        issueDate: "2026-03-25",
        status: "Issued"
    },

    // =========================
    // EXPERIENCE LETTERS
    // =========================

    {
        id: 11,
        module: "experience-letters",
        letterId: "EL001",
        employeeId: "EMP003",
        employeeName: "Rahul Verma",
        designation: "Senior Developer",
        joiningDate: "2022-06-10",
        leavingDate: "2026-05-31",
        issueDate: "2026-06-01",
        status: "Issued"
    },
    {
        id: 12,
        module: "experience-letters",
        letterId: "EL002",
        employeeId: "EMP004",
        employeeName: "Neha Gupta",
        designation: "Accountant",
        joiningDate: "2023-01-15",
        leavingDate: "2026-06-15",
        issueDate: "2026-06-16",
        status: "Issued"
    },

    // =========================
    // JOINING DOCUMENTS
    // =========================

    {
        id: 13,
        module: "joining-documents",
        documentId: "JD001",
        employeeId: "EMP005",
        employeeName: "Rohit Kumar",
        documentName: "Joining Form",
        documentType: "Joining Document",
        joiningDate: "2026-07-01",
        submittedDate: "2026-06-28",
        status: "Verified"
    },
    {
        id: 14,
        module: "joining-documents",
        documentId: "JD002",
        employeeId: "EMP006",
        employeeName: "Sneha Sharma",
        documentName: "Bank Details Form",
        documentType: "Joining Document",
        joiningDate: "2026-07-05",
        submittedDate: "2026-07-02",
        status: "Pending"
    }

];

export default documentsData;