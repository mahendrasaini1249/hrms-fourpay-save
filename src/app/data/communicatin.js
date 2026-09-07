const communicationData = [

    // =========================
    // ANNOUNCEMENTS
    // =========================

    {
        id: 1,
        module: "announcements",
        announcementId: "ANN001",
        title: "Annual Company Meeting",
        message: "Annual company meeting will be held on 15 September.",
        publishedBy: "HR Admin",
        publishDate: "2026-09-01",
        status: "Published"
    },
    {
        id: 2,
        module: "announcements",
        announcementId: "ANN002",
        title: "Holiday Announcement",
        message: "Office will remain closed on 2 October.",
        publishedBy: "Admin",
        publishDate: "2026-09-02",
        status: "Published"
    },

    // =========================
    // NOTIFICATIONS
    // =========================

    {
        id: 3,
        module: "notifications",
        notificationId: "NOT001",
        title: "Leave Approval",
        message: "Your leave request has been approved.",
        recipient: "Amit Sharma",
        notificationDate: "2026-09-03",
        type: "Leave",
        status: "Read"
    },
    {
        id: 4,
        module: "notifications",
        notificationId: "NOT002",
        title: "Document Verification",
        message: "Your submitted document has been verified.",
        recipient: "Priya Singh",
        notificationDate: "2026-09-04",
        type: "Document",
        status: "Unread"
    },

    // =========================
    // INTERNAL MESSAGES
    // =========================

    {
        id: 5,
        module: "internal-messages",
        messageId: "MSG001",
        sender: "HR Admin",
        receiver: "Amit Sharma",
        subject: "Leave Discussion",
        message: "Please discuss your upcoming leave with HR.",
        sentDate: "2026-09-01",
        status: "Read"
    },
    {
        id: 6,
        module: "internal-messages",
        messageId: "MSG002",
        sender: "Team Lead",
        receiver: "Priya Singh",
        subject: "Project Update",
        message: "Please share the latest project update.",
        sentDate: "2026-09-03",
        status: "Unread"
    },

    // =========================
    // EMAIL
    // =========================

    {
        id: 7,
        module: "email",
        emailId: "EML001",
        recipient: "amit@example.com",
        subject: "Performance Review",
        message: "Your performance review is scheduled for next week.",
        sentBy: "HR Department",
        sentDate: "2026-09-02",
        status: "Sent"
    },
    {
        id: 8,
        module: "email",
        emailId: "EML002",
        recipient: "priya@example.com",
        subject: "Training Program",
        message: "You are invited to attend the upcoming training program.",
        sentBy: "HR Department",
        sentDate: "2026-09-04",
        status: "Sent"
    },

    // =========================
    // SMS
    // =========================

    {
        id: 9,
        module: "sms",
        smsId: "SMS001",
        mobileNumber: "9876543210",
        message: "Your leave request has been approved.",
        sentBy: "HR Admin",
        sentDate: "2026-09-03",
        status: "Delivered"
    },
    {
        id: 10,
        module: "sms",
        smsId: "SMS002",
        mobileNumber: "9123456780",
        message: "Your salary has been credited successfully.",
        sentBy: "Payroll",
        sentDate: "2026-09-05",
        status: "Delivered"
    },

    // =========================
    // EMPLOYEE CIRCULARS
    // =========================

    {
        id: 11,
        module: "employee-circulars",
        circularId: "CIR001",
        title: "Office Timing Update",
        description: "Office timings will be changed from next month.",
        issuedBy: "HR Department",
        issueDate: "2026-09-01",
        applicableTo: "All Employees",
        status: "Active"
    },
    {
        id: 12,
        module: "employee-circulars",
        circularId: "CIR002",
        title: "Dress Code Guidelines",
        description: "Employees are requested to follow the updated dress code.",
        issuedBy: "HR Department",
        issueDate: "2026-09-03",
        applicableTo: "All Employees",
        status: "Active"
    }

];

export default communicationData;