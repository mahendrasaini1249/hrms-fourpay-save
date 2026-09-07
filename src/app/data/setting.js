const settingsData = [
    {
        id: 1,
        module: "general-settings",
        settingName: "General Settings",
        description: "general application",
        updatedBy: "Admin",
        updatedDate: "2026-09-01",
        status: "Active"
    },
    {
        id: 2,
        module: "company-settings",
        settingName: "Company Settings",
        companyName: "ABC Technologies Pvt. Ltd.",
        companyEmail: "info@abctech.com",
        updatedBy: "Admin",
        updatedDate: "2026-09-02",
        status: "Active"
    },
    {
        id: 3,
        module: "attendance-settings",
        settingName: "Attendance Settings",
        workingHours: "9 Hours",
        lateMarkAfter: "15 Minutes",
        updatedBy: "HR Manager",
        updatedDate: "2026-09-03",
        status: "Active"
    },
    {
        id: 4,
        module: "leave-settings",
        settingName: "Leave Settings",
        annualLeave: 24,
        sickLeave: 12,
        approvalRequired: true,
        updatedBy: "HR Manager",
        updatedDate: "2026-09-04",
        status: "Active"
    },
    {
        id: 5,
        module: "payroll-settings",
        settingName: "Payroll Settings",
        payrollCycle: "Monthly",
        salaryDate: "30th",
        currency: "INR",
        updatedBy: "Finance Manager",
        updatedDate: "2026-09-05",
        status: "Active"
    },
    {
        id: 6,
        module: "notification-settings",
        settingName: "Notification Settings",
        emailNotification: true,
        pushNotification: true,
        notificationFrequency: "Instant",
        updatedBy: "Admin",
        updatedDate: "2026-09-06",
        status: "Active"
    },
    {
        id: 7,
        module: "email-settings",
        settingName: "Email Settings",
        smtpHost: "smtp.gmail.com",
        smtpPort: 587,
        encryption: "TLS",
        updatedBy: "Admin",
        updatedDate: "2026-09-01",
        status: "Active"
    },
    {
        id: 8,
        module: "sms-settings",
        settingName: "SMS Settings",
        provider: "Twilio",
        senderId: "ABCTECH",
        smsNotification: true,
        updatedBy: "Admin",
        updatedDate: "2026-09-02",
        status: "Active"
    },
    {
        id: 9,
        module: "holiday-settings",
        settingName: "Holiday Settings",
        holidayCalendar: "India",
        totalHolidays: 18,
        year: 2026,
        updatedBy: "HR Manager",
        updatedDate: "2026-09-03",
        status: "Active"
    },
    {
        id: 10,
        module: "workflow-settings",
        settingName: "Workflow Settings",
        approvalLevel: 2,
        autoApproval: false,
        workflowType: "Manager Approval",
        updatedBy: "Admin",
        updatedDate: "2026-09-04",
        status: "Active"
    }
];

export default settingsData;