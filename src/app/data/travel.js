const travelData = [

    // =====================================================
    // TRAVEL REQUESTS
    // =====================================================

    {
        id: 1,
        module: "travel-requests",
        requestId: "TR001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        department: "IT",
        travelType: "Business",
        destination: "Mumbai",
        fromDate: "2026-09-10",
        toDate: "2026-09-12",
        purpose: "Client Meeting",
        estimatedCost: 15000,
        status: "Pending",
    },
    {
        id: 2,
        module: "travel-requests",
        requestId: "TR002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        department: "HR",
        travelType: "Business",
        destination: "Delhi",
        fromDate: "2026-09-15",
        toDate: "2026-09-17",
        purpose: "HR Conference",
        estimatedCost: 12000,
        status: "Approved",
    },


    // =====================================================
    // TRAVEL APPROVAL
    // =====================================================

    {
        id: 3,
        module: "travel-approval",
        approvalId: "TA001",
        requestId: "TR001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        destination: "Mumbai",
        travelDate: "2026-09-10",
        estimatedCost: 15000,
        approver: "IT Manager",
        approvalDate: "",
        remarks: "",
        status: "Pending",
    },
    {
        id: 4,
        module: "travel-approval",
        approvalId: "TA002",
        requestId: "TR002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        destination: "Delhi",
        travelDate: "2026-09-15",
        estimatedCost: 12000,
        approver: "HR Manager",
        approvalDate: "2026-09-05",
        remarks: "Approved for conference",
        status: "Approved",
    },


    // =====================================================
    // TRAVEL PLANS
    // =====================================================

    {
        id: 5,
        module: "travel-plans",
        planId: "TP001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        destination: "Mumbai",
        travelPurpose: "Client Meeting",
        departureDate: "2026-09-10",
        returnDate: "2026-09-12",
        transport: "Flight",
        hotel: "Taj Hotel",
        estimatedCost: 15000,
        status: "Confirmed",
    },
    {
        id: 6,
        module: "travel-plans",
        planId: "TP002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        destination: "Delhi",
        travelPurpose: "HR Conference",
        departureDate: "2026-09-15",
        returnDate: "2026-09-17",
        transport: "Flight",
        hotel: "Holiday Inn",
        estimatedCost: 12000,
        status: "Confirmed",
    },


    // =====================================================
    // TRAVEL EXPENSES
    // =====================================================

    {
        id: 7,
        module: "travel-expenses",
        expenseId: "TE001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        destination: "Mumbai",
        travelDate: "2026-09-10",
        travelExpenseType: "Flight",
        amount: 8500,
        description: "Round trip flight",
        receipt: "Yes",
        status: "Submitted",
    },
    {
        id: 8,
        module: "travel-expenses",
        expenseId: "TE002",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        destination: "Delhi",
        travelDate: "2026-09-15",
        travelExpenseType: "Hotel",
        amount: 6500,
        description: "Two nights hotel stay",
        receipt: "Yes",
        status: "Approved",
    },

];

export default travelData;