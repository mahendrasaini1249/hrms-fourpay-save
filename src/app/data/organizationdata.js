const organizationData = [
    // =====================================================
    // COMPANY
    // =====================================================

    {
        id: 1,
        module: "company",

        companyName: "Four PaySave Hi Tech Solutions Pvt. Ltd.",
        legalName: "FourPaySave Hi Tech Solutions Private Limited",
        email: "info@techvision.com",
        phone: "+91 9876543210",
        website: "www.techvision.com",
        industry: "Information Technology",
        companySize: "51-200",
        foundedYear: 2018,
        registrationNumber: "U72900RJ2018PTC061234",
        taxId: "08AABCT1234A1Z5",
        address: "123, IT Park, Malviya Nagar",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        postalCode: "302017",

        status: "Active",
    },

    // =====================================================
    // BRANCHES
    // =====================================================

    {
        id: 2,
        module: "branch",

        branchCode: "JPR-HO",
        branchName: "Jaipur Head Office",
        manager: "Rahul Sharma",
        email: "jaipur@techvision.com",
        phone: "+91 9876500011",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        employees: 45,

        status: "Active",
    },

    {
        id: 3,
        module: "branch",

        branchCode: "DEL-01",
        branchName: "Delhi Branch",
        manager: "Amit Verma",
        email: "delhi@techvision.com",
        phone: "+91 9876500022",
        city: "New Delhi",
        state: "Delhi",
        country: "India",
        employees: 28,

        status: "Active",
    },

    {
        id: 4,
        module: "branch",

        branchCode: "MUM-01",
        branchName: "Mumbai Branch",
        manager: "Neha Kapoor",
        email: "mumbai@techvision.com",
        phone: "+91 9876500033",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        employees: 22,

        status: "Active",
    },

    {
        id: 5,
        module: "branch",

        branchCode: "BLR-01",
        branchName: "Bangalore Branch",
        manager: "Vikas Singh",
        email: "bangalore@techvision.com",
        phone: "+91 9876500044",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        employees: 35,

        status: "Active",
    },

    // =====================================================
    // DEPARTMENTS
    // =====================================================

    {
        id: 6,
        module: "department",

        departmentCode: "IT",
        departmentName: "Information Technology",
        head: "Rahul Sharma",
        phone: "+91 9876500011",
        branch: "Patna Branch",
        employees: 32,
        status: "Active",
    },

    {
        id: 7,
        module: "department",

        departmentCode: "HR",
        departmentName: "Human Resources",
        head: "Priya Singh",
        branch: "Pune Branch",
        employees: 8,
        phone: "+91 9876500033",
        status: "Active",
    },

    {
        id: 8,
        module: "department",

        departmentCode: "FIN",
        departmentName: "Finance",
        head: "Amit Verma",
        branch: "Delhi Branch",
        employees: 10,
        phone: "+91 9876500022",
        status: "Active",
    },

    {
        id: 9,
        module: "department",

        departmentCode: "SAL",
        departmentName: "Sales",
        head: "Neha Kapoor",
        branch: "Mumbai Branch",
        employees: 18,
        phone: "+91 9876500033",
        status: "Active",
    },

    {
        id: 10,
        module: "department",

        departmentCode: "MKT",
        departmentName: "Marketing",
        head: "Rohit Meena",
        branch: "Jaipur Head Office",
        employees: 12,
        phone: "+91 9876500033",
        status: "Active",
    },

    {
        id: 11,
        module: "department",

        departmentCode: "OPS",
        departmentName: "Operations",
        head: "Vikas Singh",
        branch: "Bangalore Branch",
        employees: 25,
        phone: "+91 9876500044",
        status: "Active",
    },

    // =====================================================
    // DESIGNATIONS
    // =====================================================

    {
        id: 12,
        module: "designation",

        designationCode: "CEO",
        designationName: "Chief Executive Officer",
        department: "Management",
        level: "L1",
        employees: 1,
        status: "Active",
    },

    {
        id: 13,
        module: "designation",

        designationCode: "CTO",
        designationName: "Chief Technology Officer",
        department: "Information Technology",
        level: "L2",
        employees: 1,
        status: "Active",
    },

    {
        id: 14,
        module: "designation",
        designationCode: "HRM",
        designationName: "HR Manager",
        department: "Human Resources",
        level: "L3",
        employees: 2,
        status: "Active",
    },

    {
        id: 15,
        module: "designation",

        designationCode: "TL",
        designationName: "Team Lead",
        department: "Information Technology",
        level: "L4",
        employees: 5,
        status: "Active",
    },

    {
        id: 16,
        module: "designation",
        designationCode: "SDE",
        designationName: "Software Developer",
        department: "Information Technology",
        level: "L5",
        employees: 18,
        status: "Active",
    },

    {
        id: 17,
        module: "designation",
        designationCode: "ACC",
        designationName: "Accountant",
        department: "Finance",
        level: "L5",
        employees: 6,

        status: "Active",
    },

    {
        id: 18,
        module: "designation",
        designationCode: "SM",
        designationName: "Sales Manager",
        department: "Sales",
        level: "L3",
        employees: 2,

        status: "Active",
    },

    {
        id: 19,
        module: "designation",

        designationCode: "SE",
        designationName: "Sales Executive",
        department: "Sales",
        level: "L5",
        employees: 14,

        status: "Active",
    },

    // =====================================================
    // TEAMS
    // =====================================================

    {
        id: 20,
        module: "team",

        teamCode: "DEV-01",
        teamName: "Frontend Development",
        department: "Information Technology",
        teamLead: "Rohit Sharma",
        phone: "9684627583",
        members: 7,
        branch: "Jaipur Head Office",

        status: "Active",
    },

    {
        id: 21,
        module: "team",

        teamCode: "DEV-02",
        teamName: "Backend Development",
        department: "Information Technology",
        teamLead: "Amit Singh",
        phone: "9684627583",
        members: 8,
        branch: "Jaipur Head Office",

        status: "Active",
    },

    {
        id: 22,
        module: "team",

        teamCode: "HR-01",
        teamName: "HR Operations",
        phone: "9684627583",
        department: "Human Resources",
        teamLead: "Priya Singh",
        members: 5,
        branch: "Jaipur Head Office",

        status: "Active",
    },

    {
        id: 23,
        module: "team",

        teamCode: "SAL-01",
        teamName: "Enterprise Sales",
        phone: "9684627583",
        department: "Sales",
        teamLead: "Neha Kapoor",
        members: 9,
        branch: "Mumbai Branch",

        status: "Active",
    },

    {
        id: 24,
        module: "team",

        teamCode: "MKT-01",
        teamName: "Digital Marketing",
        phone: "9684627583",
        department: "Marketing",
        teamLead: "Rohit Meena",
        members: 6,
        branch: "Jaipur Head Office",

        status: "Active",
    },

    // =====================================================
    // LOCATIONS
    // =====================================================

    {
        id: 25,
        module: "location",

        locationCode: "LOC-JPR",
        locationName: "Jaipur IT Park",
        branch: "Jaipur Head Office",
        address: "123, IT Park, Malviya Nagar",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        employees: 45,

        status: "Active",
    },

    {
        id: 26,
        module: "location",

        locationCode: "LOC-DEL",
        locationName: "Delhi Corporate Office",
        branch: "Delhi Branch",
        address: "45, Nehru Place",
        city: "New Delhi",
        state: "Delhi",
        country: "India",
        employees: 28,

        status: "Active",
    },

    {
        id: 27,
        module: "location",

        locationCode: "LOC-MUM",
        locationName: "Mumbai Business Center",
        branch: "Mumbai Branch",
        address: "78, Andheri East",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        employees: 22,

        status: "Active",
    },

    {
        id: 28,
        module: "location",

        locationCode: "LOC-BLR",
        locationName: "Bangalore Tech Hub",
        branch: "Bangalore Branch",
        address: "22, Whitefield",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        employees: 35,

        status: "Active",
    },

    // =====================================================
    // REPORTING MANAGERS
    // =====================================================

    {
        id: 29,
        module: "reporting-manager",

        employeeId: "EMP001",
        employeeName: "Rohit Sharma",
        designation: "Team Lead",
        department: "Information Technology",
        reportingManager: "Rahul Sharma",
        managerDesignation: "CTO",

        status: "Active",
    },

    {
        id: 30,
        module: "reporting-manager",

        employeeId: "EMP002",
        employeeName: "Amit Singh",
        designation: "Team Lead",
        department: "Information Technology",
        reportingManager: "Rahul Sharma",
        managerDesignation: "CTO",

        status: "Active",
    },

    {
        id: 31,
        module: "reporting-manager",

        employeeId: "EMP003",
        employeeName: "Pooja Sharma",
        designation: "Software Developer",
        department: "Information Technology",
        reportingManager: "Rohit Sharma",
        managerDesignation: "Team Lead",

        status: "Active",
    },

    {
        id: 32,
        module: "reporting-manager",

        employeeId: "EMP004",
        employeeName: "Karan Meena",
        designation: "Software Developer",
        department: "Information Technology",
        reportingManager: "Amit Singh",
        managerDesignation: "Team Lead",

        status: "Active",
    },

    {
        id: 33,
        module: "reporting-manager",

        employeeId: "EMP005",
        employeeName: "Priya Sharma",
        designation: "HR Executive",
        department: "Human Resources",
        reportingManager: "Priya Singh",
        managerDesignation: "HR Manager",

        status: "Active",
    },

    {
        id: 34,
        module: "reporting-manager",

        employeeId: "EMP006",
        employeeName: "Ravi Kumar",
        designation: "Sales Executive",
        department: "Sales",
        reportingManager: "Neha Kapoor",
        managerDesignation: "Sales Manager",

        status: "Active",
    },

    // =====================================================
    // ORGANIZATION CHART
    // =====================================================

    {
        id: 35,
        module: "organization-chart",

        employeeId: "EMP000",
        employeeName: "Rajesh Gupta",
        designation: "Chief Executive Officer",
        department: "Management",

        reportingManager: null,

        children: [
            {
                id: 36,
                employeeId: "EMP001",
                employeeName: "Rahul Sharma",
                designation: "Chief Technology Officer",
                department: "Information Technology",

                children: [
                    {
                        id: 37,
                        employeeId: "EMP002",
                        employeeName: "Rohit Sharma",
                        designation: "Team Lead",
                        department: "Frontend Development",

                        children: [
                            {
                                id: 38,
                                employeeId: "EMP003",
                                employeeName: "Pooja Sharma",
                                designation: "Software Developer",
                                department: "Information Technology",
                            },

                            {
                                id: 39,
                                employeeId: "EMP004",
                                employeeName: "Arjun Meena",
                                designation: "Software Developer",
                                department: "Information Technology",
                            },
                        ],
                    },

                    {
                        id: 40,
                        employeeId: "EMP005",
                        employeeName: "Amit Singh",
                        designation: "Team Lead",
                        department: "Backend Development",

                        children: [
                            {
                                id: 41,
                                employeeId: "EMP006",
                                employeeName: "Karan Meena",
                                designation: "Software Developer",
                                department: "Information Technology",
                            },

                            {
                                id: 42,
                                employeeId: "EMP007",
                                employeeName: "Vivek Sharma",
                                designation: "Software Developer",
                                department: "Information Technology",
                            },
                        ],
                    },
                ],
            },

            {
                id: 43,
                employeeId: "EMP008",
                employeeName: "Priya Singh",
                designation: "HR Manager",
                department: "Human Resources",

                children: [
                    {
                        id: 44,
                        employeeId: "EMP009",
                        employeeName: "Priya Sharma",
                        designation: "HR Executive",
                        department: "Human Resources",
                    },
                ],
            },

            {
                id: 45,
                employeeId: "EMP010",
                employeeName: "Neha Kapoor",
                designation: "Sales Manager",
                department: "Sales",

                children: [
                    {
                        id: 46,
                        employeeId: "EMP011",
                        employeeName: "Ravi Kumar",
                        designation: "Sales Executive",
                        department: "Sales",
                    },

                    {
                        id: 47,
                        employeeId: "EMP012",
                        employeeName: "Ankit Sharma",
                        designation: "Sales Executive",
                        department: "Sales",
                    },
                ],
            },
        ],
    },
];

export default organizationData;