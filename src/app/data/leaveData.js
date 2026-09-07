const leaveManagementData = [

    // =====================================================
    // LEAVE APPLY
    // =====================================================

    {
        id: 1,
        module: "leave-apply",

        employeeId: "EMP001",
        employeeName: "Rahul Sharma",
        leaveType: "Casual Leave",
        fromDate: "2026-09-10",
        toDate: "2026-09-12",
        totalDays: 3,
        reason: "Personal work",
        appliedDate: "2026-09-02",
        status: "Pending",
    },

    {
        id: 2,
        module: "leave-apply",

        employeeId: "EMP002",
        employeeName: "Priya Verma",
        leaveType: "Sick Leave",
        fromDate: "2026-09-05",
        toDate: "2026-09-06",
        totalDays: 2,
        reason: "Fever and health issue",
        appliedDate: "2026-09-03",
        status: "Approved",
    },

    {
        id: 3,
        module: "leave-apply",

        employeeId: "EMP003",
        employeeName: "Amit Kumar",
        leaveType: "Earned Leave",
        fromDate: "2026-09-15",
        toDate: "2026-09-18",
        totalDays: 4,
        reason: "Family function",
        appliedDate: "2026-09-01",
        status: "Rejected",
    },


    // =====================================================
    // LEAVE APPROVAL
    // =====================================================

    {
        id: 4,
        module: "leave-approval",

        requestId: "LR001",
        employeeId: "EMP001",
        employeeName: "Rahul Sharma",
        leaveType: "Casual Leave",
        fromDate: "2026-09-10",
        toDate: "2026-09-12",
        totalDays: 3,
        reason: "Personal work",
        approverName: "Vikas Mehta",
        approverRole: "HR Manager",
        approvalDate: "",
        remarks: "",
        status: "Pending",
    },

    {
        id: 5,
        module: "leave-approval",

        requestId: "LR002",
        employeeId: "EMP002",
        employeeName: "Priya Verma",
        leaveType: "Sick Leave",
        fromDate: "2026-09-05",
        toDate: "2026-09-06",
        totalDays: 2,
        reason: "Health issue",
        approverName: "Vikas Mehta",
        approverRole: "HR Manager",
        approvalDate: "2026-09-03",
        remarks: "Approved",
        status: "Approved",
    },

    {
        id: 6,
        module: "leave-approval",

        requestId: "LR003",
        employeeId: "EMP004",
        employeeName: "Neha Singh",
        leaveType: "Casual Leave",
        fromDate: "2026-09-20",
        toDate: "2026-09-22",
        totalDays: 3,
        reason: "Out of station",
        approverName: "Vikas Mehta",
        approverRole: "HR Manager",
        approvalDate: "2026-09-04",
        remarks: "Project deadline pending",
        status: "Rejected",
    },


    // =====================================================
    // LEAVE BALANCE
    // =====================================================

    {
        id: 7,
        module: "leave-balance",

        employeeId: "EMP001",
        employeeName: "Rahul Sharma",
        leaveType: "Casual Leave",
        totalLeaves: 12,
        usedLeaves: 4,
        pendingLeaves: 2,
        availableLeaves: 6,
        year: 2026,
        status: "Active",
    },

    {
        id: 8,
        module: "leave-balance",

        employeeId: "EMP002",
        employeeName: "Priya Verma",
        leaveType: "Sick Leave",
        totalLeaves: 10,
        usedLeaves: 3,
        pendingLeaves: 0,
        availableLeaves: 7,
        year: 2026,
        status: "Active",
    },

    {
        id: 9,
        module: "leave-balance",

        employeeId: "EMP003",
        employeeName: "Amit Kumar",
        leaveType: "Earned Leave",
        totalLeaves: 18,
        usedLeaves: 6,
        pendingLeaves: 4,
        availableLeaves: 8,
        year: 2026,
        status: "Active",
    },

    {
        id: 10,
        module: "leave-balance",

        employeeId: "EMP004",
        employeeName: "Neha Singh",
        leaveType: "Casual Leave",
        totalLeaves: 12,
        usedLeaves: 8,
        pendingLeaves: 0,
        availableLeaves: 4,
        year: 2026,
        status: "Active",
    },


    // =====================================================
    // LEAVE HOLIDAYS
    // =====================================================

    {
        id: 11,
        module: "leave-holidays",

        holidayName: "Republic Day",
        holidayDate: "2026-01-26",
        day: "Monday",
        holidayType: "National Holiday",
        location: "All Offices",
        description: "Republic Day Holiday",
        status: "Active",
    },

    {
        id: 12,
        module: "leave-holidays",

        holidayName: "Holi",
        holidayDate: "2026-03-04",
        day: "Wednesday",
        holidayType: "Festival Holiday",
        location: "All Offices",
        description: "Holi Festival Holiday",
        status: "Active",
    },

    {
        id: 13,
        module: "leave-holidays",

        holidayName: "Independence Day",
        holidayDate: "2026-08-15",
        day: "Saturday",
        holidayType: "National Holiday",
        location: "All Offices",
        description: "Independence Day Holiday",
        status: "Active",
    },

    {
        id: 14,
        module: "leave-holidays",

        holidayName: "Diwali",
        holidayDate: "2026-11-08",
        day: "Sunday",
        holidayType: "Festival Holiday",
        location: "All Offices",
        description: "Diwali Festival Holiday",
        status: "Active",
    },

    {
        id: 15,
        module: "leave-holidays",

        holidayName: "Christmas",
        holidayDate: "2026-12-25",
        day: "Friday",
        holidayType: "National Holiday",
        location: "All Offices",
        description: "Christmas Holiday",
        status: "Active",
    },


    // =====================================================
    // LEAVE POLICIES
    // =====================================================

    {
        id: 16,
        module: "leave-policies",

        policyName: "Casual Leave Policy",
        leaveType: "Casual Leave",
        yearlyLimit: 12,
        monthlyLimit: 2,
        carryForward: "No",
        encashmentAllowed: "No",
        minimumDays: 1,
        maximumDays: 3,
        noticePeriod: "1 Day",
        applicableFor: "All Employees",
        description: "Casual leave policy for personal work.",
        status: "Active",
    },

    {
        id: 17,
        module: "leave-policies",

        policyName: "Sick Leave Policy",
        leaveType: "Sick Leave",
        yearlyLimit: 10,
        monthlyLimit: 3,
        carryForward: "No",
        encashmentAllowed: "No",
        minimumDays: 1,
        maximumDays: 7,
        noticePeriod: "Immediate",
        applicableFor: "All Employees",
        description: "Sick leave policy for medical conditions.",
        status: "Active",
    },

    {
        id: 18,
        module: "leave-policies",

        policyName: "Earned Leave Policy",
        leaveType: "Earned Leave",
        yearlyLimit: 18,
        monthlyLimit: 5,
        carryForward: "Yes",
        encashmentAllowed: "Yes",
        minimumDays: 1,
        maximumDays: 15,
        noticePeriod: "7 Days",
        applicableFor: "Permanent Employees",
        description: "Earned leave policy for permanent employees.",
        status: "Active",
    },

    {
        id: 19,
        module: "leave-policies",

        policyName: "Maternity Leave Policy",
        leaveType: "Maternity Leave",
        yearlyLimit: 180,
        monthlyLimit: 180,
        carryForward: "No",
        encashmentAllowed: "No",
        minimumDays: 30,
        maximumDays: 180,
        noticePeriod: "30 Days",
        applicableFor: "Eligible Female Employees",
        description: "Maternity leave as per company policy.",
        status: "Active",
    },


    // =====================================================
    // LEAVE REQUESTS
    // =====================================================

    {
        id: 20,
        module: "leave-requests",

        requestId: "REQ001",
        employeeId: "EMP001",
        employeeName: "Rahul Sharma",
        department: "Development",
        designation: "Frontend Developer",
        leaveType: "Casual Leave",
        fromDate: "2026-09-10",
        toDate: "2026-09-12",
        totalDays: 3,
        reason: "Personal work",
        requestDate: "2026-09-02",
        approvedBy: "",
        status: "Pending",
    },

    {
        id: 21,
        module: "leave-requests",

        requestId: "REQ002",
        employeeId: "EMP002",
        employeeName: "Priya Verma",
        department: "Human Resources",
        designation: "HR Executive",
        leaveType: "Sick Leave",
        fromDate: "2026-09-05",
        toDate: "2026-09-06",
        totalDays: 2,
        reason: "Medical issue",
        requestDate: "2026-09-03",
        approvedBy: "Vikas Mehta",
        status: "Approved",
    },

    {
        id: 22,
        module: "leave-requests",

        requestId: "REQ003",
        employeeId: "EMP003",
        employeeName: "Amit Kumar",
        department: "Sales",
        designation: "Sales Executive",
        leaveType: "Earned Leave",
        fromDate: "2026-09-15",
        toDate: "2026-09-18",
        totalDays: 4,
        reason: "Family function",
        requestDate: "2026-09-01",
        approvedBy: "Rajesh Kumar",
        status: "Approved",
    },

    {
        id: 23,
        module: "leave-requests",

        requestId: "REQ004",
        employeeId: "EMP004",
        employeeName: "Neha Singh",
        department: "Development",
        designation: "UI/UX Designer",
        leaveType: "Casual Leave",
        fromDate: "2026-09-20",
        toDate: "2026-09-22",
        totalDays: 3,
        reason: "Out of station",
        requestDate: "2026-09-04",
        approvedBy: "Vikas Mehta",
        status: "Rejected",
    },


    // =====================================================
    // LEAVE TYPES
    // =====================================================

    {
        id: 24,
        module: "leave-types",

        leaveTypeName: "Casual Leave",
        leaveCode: "CL",
        yearlyLimit: 12,
        paidLeave: "Yes",
        carryForward: "No",
        requiresApproval: "Yes",
        description: "Leave for personal or urgent work.",
        status: "Active",
    },

    {
        id: 25,
        module: "leave-types",

        leaveTypeName: "Sick Leave",
        leaveCode: "SL",
        yearlyLimit: 10,
        paidLeave: "Yes",
        carryForward: "No",
        requiresApproval: "Yes",
        description: "Leave for illness or medical reasons.",
        status: "Active",
    },

    {
        id: 26,
        module: "leave-types",

        leaveTypeName: "Earned Leave",
        leaveCode: "EL",
        yearlyLimit: 18,
        paidLeave: "Yes",
        carryForward: "Yes",
        requiresApproval: "Yes",
        description: "Earned paid leave for employees.",
        status: "Active",
    },

    {
        id: 27,
        module: "leave-types",

        leaveTypeName: "Maternity Leave",
        leaveCode: "ML",
        yearlyLimit: 180,
        paidLeave: "Yes",
        carryForward: "No",
        requiresApproval: "Yes",
        description: "Maternity leave for eligible employees.",
        status: "Active",
    },

    {
        id: 28,
        module: "leave-types",

        leaveTypeName: "Paternity Leave",
        leaveCode: "PL",
        yearlyLimit: 15,
        paidLeave: "Yes",
        carryForward: "No",
        requiresApproval: "Yes",
        description: "Paternity leave for eligible employees.",
        status: "Active",
    },

    {
        id: 29,
        module: "leave-types",

        leaveTypeName: "Leave Without Pay",
        leaveCode: "LWP",
        yearlyLimit: 30,
        paidLeave: "No",
        carryForward: "No",
        requiresApproval: "Yes",
        description: "Unpaid leave when paid leave balance is unavailable.",
        status: "Active",
    },

];

export default leaveManagementData;