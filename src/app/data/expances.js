const expensesData = [

    // =====================================================
    // EXPENSE CATEGORIES
    // =====================================================

    {
        id: 1,
        module: "expense-categories",
        categoryId: "CAT001",
        categoryName: "Travel",
        description: "Business travel expenses",
        limit: 50000,
        approvalRequired: "Yes",
        status: "Active",
    },
    {
        id: 2,
        module: "expense-categories",
        categoryId: "CAT002",
        categoryName: "Food",
        description: "Meal and food expenses",
        limit: 15000,
        approvalRequired: "Yes",
        status: "Active",
    },


    // =====================================================
    // SUBMIT EXPENSE
    // =====================================================

    {
        id: 3,
        module: "submit-expense",
        expenseId: "EXP001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        category: "Travel",
        amount: 4500,
        expenseDate: "2026-09-01",
        description: "Client meeting travel",
        paymentMode: "Cash",
        receipt: "Yes",
        status: "Submitted",
    },
    {
        id: 4,
        module: "submit-expense",
        expenseId: "EXP002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        category: "Food",
        amount: 1200,
        expenseDate: "2026-09-02",
        description: "Client lunch",
        paymentMode: "Card",
        receipt: "Yes",
        status: "Submitted",
    },


    // =====================================================
    // EXPENSE REQUESTS
    // =====================================================

    {
        id: 5,
        module: "expense-requests",
        requestId: "REQ001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        category: "Travel",
        amount: 4500,
        requestDate: "2026-09-01",
        description: "Client meeting travel",
        manager: "Vikas Mehta",
        priority: "High",
        status: "Pending",
    },
    {
        id: 6,
        module: "expense-requests",
        requestId: "REQ002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        category: "Food",
        amount: 1200,
        requestDate: "2026-09-02",
        description: "Client lunch",
        manager: "Vikas Mehta",
        priority: "Medium",
        status: "Approved",
    },


    // =====================================================
    // EXPENSE APPROVAL
    // =====================================================

    {
        id: 7,
        module: "expense-approval",
        approvalId: "APR001",
        expenseId: "EXP001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        category: "Travel",
        amount: 4500,
        submittedDate: "2026-09-01",
        approver: "Vikas Mehta",
        approvalDate: "",
        remarks: "",
        status: "Pending",
    },
    {
        id: 8,
        module: "expense-approval",
        approvalId: "APR002",
        expenseId: "EXP002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        category: "Food",
        amount: 1200,
        submittedDate: "2026-09-02",
        approver: "Vikas Mehta",
        approvalDate: "2026-09-03",
        remarks: "Approved",
        status: "Approved",
    },


    // =====================================================
    // REIMBURSEMENTS
    // =====================================================

    {
        id: 9,
        module: "reimbursements",
        reimbursementId: "REIM001",
        expenseId: "EXP001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        category: "Travel",
        claimedAmount: 4500,
        approvedAmount: 4500,
        paidAmount: 4500,
        paymentDate: "2026-09-10",
        paymentMode: "Bank Transfer",
        status: "Paid",
    },
    {
        id: 10,
        module: "reimbursements",
        reimbursementId: "REIM002",
        expenseId: "EXP002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        category: "Food",
        claimedAmount: 1200,
        approvedAmount: 1200,
        paidAmount: 0,
        paymentDate: "",
        paymentMode: "Bank Transfer",
        status: "Pending",
    },

];

export default expensesData;