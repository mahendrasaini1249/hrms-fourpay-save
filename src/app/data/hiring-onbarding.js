const hiringOnboardingData = [

    // BACKGROUND VERIFICATION

    {
        id: 1,
        module: "background-verification",

        candidateName: "Rahul Sharma",
        candidateId: "CAN-001",
        verificationType: "Employment Verification",
        verificationAgency: "ABC Verification Services",
        verificationDate: "2026-08-10",
        result: "Verified",
        status: "Completed",
        remarks: "Previous employment successfully verified.",
    },

    {
        id: 2,
        module: "background-verification",

        candidateName: "Priya Singh",
        candidateId: "CAN-002",
        verificationType: "Education Verification",
        verificationAgency: "XYZ Verification Services",
        verificationDate: "2026-08-12",
        result: "Verified",
        status: "Completed",
        remarks: "Educational certificates verified successfully.",
    },


    // =====================================================
    // CANDIDATES
    // =====================================================

    {
        id: 3,
        module: "candidates",

        candidateId: "CAN-001",
        candidateName: "Rahul Sharma",
        email: "rahul.sharma@gmail.com",
        phone: "+91 98765 43210",
        position: "Software Developer",
        department: "IT",
        experience: "3 Years",
        source: "LinkedIn",
        status: "Shortlisted",
    },

    {
        id: 4,
        module: "candidates",

        candidateId: "CAN-002",
        candidateName: "Priya Singh",
        email: "priya.singh@gmail.com",
        phone: "+91 98765 12345",
        position: "HR Executive",
        department: "HR",
        experience: "2 Years",
        source: "Naukri",
        status: "Interview",
    },


    // =====================================================
    // CONFIRMATION
    // =====================================================

    {
        id: 5,
        module: "confirmation",

        employeeId: "EMP-001",
        employeeName: "Rahul Sharma",
        designation: "Software Developer",
        department: "IT",
        joiningDate: "2026-05-01",
        probationPeriod: "6 Months",
        confirmationDate: "2026-11-01",
        status: "Pending",
        remarks: "Confirmation review pending.",
    },

    {
        id: 6,
        module: "confirmation",

        employeeId: "EMP-002",
        employeeName: "Priya Singh",
        designation: "HR Executive",
        department: "HR",
        joiningDate: "2026-03-15",
        probationPeriod: "6 Months",
        confirmationDate: "2026-09-15",
        status: "Confirmed",
        remarks: "Employee successfully confirmed.",
    },


    // =====================================================
    // INTERVIEW FEEDBACK
    // =====================================================

    {
        id: 7,
        module: "interview-feedback",

        candidateId: "CAN-001",
        candidateName: "Rahul Sharma",
        position: "Software Developer",
        interviewer: "Amit Verma",
        interviewRound: "Technical Round",
        interviewDate: "2026-08-15",
        rating: 4,
        feedback: "Good technical knowledge and problem-solving skills.",
        recommendation: "Selected",
        status: "Completed",
    },

    {
        id: 8,
        module: "interview-feedback",

        candidateId: "CAN-002",
        candidateName: "Priya Singh",
        position: "HR Executive",
        interviewer: "Neha Gupta",
        interviewRound: "HR Round",
        interviewDate: "2026-08-18",
        rating: 3,
        feedback: "Good communication and HR process knowledge.",
        recommendation: "Hold",
        status: "Completed",
    },


    // =====================================================
    // INTERVIEWS
    // =====================================================

    {
        id: 9,
        module: "interviews",

        interviewId: "INT-001",
        candidateId: "CAN-001",
        candidateName: "Rahul Sharma",
        position: "Software Developer",
        interviewer: "Amit Verma",
        interviewRound: "Technical Round",
        interviewDate: "2026-08-15",
        interviewTime: "11:00 AM",
        mode: "Online",
        status: "Completed",
    },

    {
        id: 10,
        module: "interviews",

        interviewId: "INT-002",
        candidateId: "CAN-002",
        candidateName: "Priya Singh",
        position: "HR Executive",
        interviewer: "Neha Gupta",
        interviewRound: "HR Round",
        interviewDate: "2026-08-18",
        interviewTime: "02:00 PM",
        mode: "In-Person",
        status: "Scheduled",
    },


    // =====================================================
    // JOB APPLICATIONS
    // =====================================================

    {
        id: 11,
        module: "job-applications",

        applicationId: "APP-001",
        candidateId: "CAN-001",
        candidateName: "Rahul Sharma",
        jobPosition: "Software Developer",
        department: "IT",
        appliedDate: "2026-08-05",
        source: "LinkedIn",
        resume: "rahul-sharma-resume.pdf",
        status: "Shortlisted",
    },

    {
        id: 12,
        module: "job-applications",
        applicationId: "APP-002",
        candidateId: "CAN-002",
        candidateName: "Priya Singh",
        jobPosition: "HR Executive",
        department: "HR",
        appliedDate: "2026-08-07",
        source: "Naukri",
        resume: "priya-singh-resume.pdf",
        status: "Under Review",
    },


    // =====================================================
    // JOB POSITIONS
    // =====================================================

    {
        id: 13,
        module: "job-positions",

        positionId: "POS-001",
        positionName: "Software Developer",
        department: "IT",
        designation: "Software Developer",
        openings: 3,
        experienceRequired: "2-4 Years",
        employmentType: "Full Time",
        location: "Delhi",
        status: "Open",
    },

    {
        id: 14,
        module: "job-positions",

        positionId: "POS-002",
        positionName: "HR Executive",
        department: "HR",
        designation: "HR Executive",
        openings: 2,
        experienceRequired: "1-3 Years",
        employmentType: "Full Time",
        location: "Delhi",
        status: "Open",
    },


    // =====================================================
    // JOB POSTS
    // =====================================================

    {
        id: 15,
        module: "job-posts",

        jobPostId: "POST-001",
        jobTitle: "Software Developer",
        positionId: "POS-001",
        department: "IT",
        postedDate: "2026-08-01",
        closingDate: "2026-09-31",
        postedOn: "LinkedIn",
        applications: 28,
        status: "Active",
    },

    {
        id: 16,
        module: "job-posts",

        jobPostId: "POST-002",
        jobTitle: "HR Executive",
        positionId: "POS-002",
        department: "HR",
        postedDate: "2026-08-03",
        closingDate: "2026-09-03",
        postedOn: "Naukri",
        applications: 18,
        status: "Active",
    },


    // =====================================================
    // JOINING CHECKLIST
    // =====================================================

    {
        id: 17,
        module: "joining-checklist",

        checklistId: "JCL-001",
        employeeId: "EMP-001",
        employeeName: "Rahul Sharma",
        joiningDate: "2026-05-01",

        documentsSubmitted: true,
        idCardCreated: true,
        emailCreated: true,
        bankDetailsSubmitted: true,
        assetsAssigned: true,

        completionPercentage: 100,
        status: "Completed",
    },

    {
        id: 18,
        module: "joining-checklist",

        checklistId: "JCL-002",
        employeeId: "EMP-002",
        employeeName: "Priya Singh",
        joiningDate: "2026-03-15",

        documentsSubmitted: true,
        idCardCreated: true,
        emailCreated: false,
        bankDetailsSubmitted: true,
        assetsAssigned: false,

        completionPercentage: 60,
        status: "Pending",
    },


    // =====================================================
    // OFFER MANAGEMENT
    // =====================================================

    {
        id: 19,
        module: "offer-management",

        offerId: "OFF-001",
        candidateId: "CAN-001",
        candidateName: "Rahul Sharma",
        position: "Software Developer",
        department: "IT",
        offeredSalary: "₹8,00,000",
        offerDate: "2026-08-20",
        joiningDate: "2026-09-01",
        offerExpiryDate: "2026-08-27",
        offerStatus: "Accepted",
    },

    {
        id: 20,
        module: "offer-management",

        offerId: "OFF-002",
        candidateId: "CAN-002",
        candidateName: "Priya Singh",
        position: "HR Executive",
        department: "HR",
        offeredSalary: "₹5,00,000",
        offerDate: "2026-08-22",
        joiningDate: "2026-09-10",
        offerExpiryDate: "2026-08-29",
        offerStatus: "Pending",
    },


    // =====================================================
    // PROBATION
    // =====================================================

    {
        id: 21,
        module: "probation",

        employeeId: "EMP-001",
        employeeName: "Rahul Sharma",
        designation: "Software Developer",
        department: "IT",
        joiningDate: "2026-05-01",
        probationPeriod: "6 Months",
        probationEndDate: "2026-11-01",
        manager: "Amit Verma",
        performanceRating: 4,
        status: "In Progress",
        remarks: "Performance is satisfactory.",
    },

    {
        id: 22,
        module: "probation",

        employeeId: "EMP-002",
        employeeName: "Priya Singh",
        designation: "HR Executive",
        department: "HR",
        joiningDate: "2026-03-15",
        probationPeriod: "6 Months",
        probationEndDate: "2026-09-15",
        manager: "Neha Gupta",
        performanceRating: 5,
        status: "Completed",
        remarks: "Employee completed probation successfully.",
    },


    // =====================================================
    // RECRUITMENT PIPELINE
    // =====================================================

    {
        id: 23,
        module: "recruitment-pipeline",

        candidateId: "CAN-001",
        candidateName: "Rahul Sharma",
        position: "Software Developer",

        applied: true,
        screening: true,
        interview: true,
        technicalRound: true,
        hrRound: true,
        offer: true,
        hired: true,

        currentStage: "Hired",
        status: "Completed",
    },

    {
        id: 24,
        module: "recruitment-pipeline",

        candidateId: "CAN-002",
        candidateName: "Priya Singh",
        position: "HR Executive",

        applied: true,
        screening: true,
        interview: true,
        technicalRound: false,
        hrRound: false,
        offer: false,
        hired: false,

        currentStage: "Interview",
        status: "In Progress",
    },

];

export default hiringOnboardingData;