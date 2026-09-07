const employees = [
  {
    id: 1,
    employeeId: "EMP001",
    // ================= BASIC INFORMATION =================
    firstName: "Rahul",
    lastName: "Sharma",
    fullName: "Rahul Sharma",
    gender: "Male",
    dateOfBirth: "1998-05-14",
    bloodGroup: "B+",
    maritalStatus: "Single",

    // ================= CONTACT INFORMATION =================
    email: "rahul.sharma@company.com",
    personalEmail: "rahul.sharma@gmail.com",
    phone: " 9876543210",
    alternatePhone: " 9876501234",

    address: {
      street: "Mansarovar",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302020",
    },

    // ================= JOB INFORMATION =================
    department: "IT",
    departmentId: 1,

    designation: "Frontend Developer",
    designationId: 1,

    role: "Employee",

    employmentType: "Full Time",
    employmentStatus: "Active",

    joiningDate: "2025-06-10",
    confirmationDate: "2025-12-10",

    reportingManager: "Amit Verma",
    reportingManagerId: 101,

    branch: "Jaipur Branch",
    branchId: 1,

    location: "Jaipur",

    workMode: "Office",

    shift: "General Shift",

    // ================= SALARY INFORMATION =================
    salary: {
      basic: 30000,
      allowances: 8000,
      deductions: 2000,
      grossSalary: 38000,
      netSalary: 36000,
      salaryType: "Monthly",
    },

    // ================= DOCUMENT INFORMATION =================
    documents: {
      aadhaar: "XXXX-XXXX-1234",
      pan: "ABCDE1234F",
      passport: "",
      drivingLicense: "",
    },

    // ================= EMERGENCY CONTACT =================
    emergencyContact: {
      name: "Suresh Sharma",
      relation: "Father",
      phone: " 9876543000",
      alternatePhone: "",
    },

    // ================= BANK INFORMATION =================
    bankDetails: {
      bankName: "HDFC Bank",
      accountNumber: "XXXXXXXX1234",
      ifsc: "HDFC0001234",
      accountHolderName: "Rahul Sharma",
    },

    // ================= EDUCATION =================
    education: [
      {
        degree: "Bachelor of Technology",
        specialization: "Computer Science",
        institution: "Rajasthan University",
        passingYear: 2021,
      },
    ],

    // ================= EXPERIENCE =================
    experience: [
      {
        company: "ABC Technologies",
        designation: "Junior Developer",
        startDate: "2022-07-01",
        endDate: "2025-06-05",
        experience: "3 Years",
      },
    ],

    // ================= LEAVE =================
    leaveBalance: {
      casualLeave: 8,
      sickLeave: 6,
      earnedLeave: 10,
      totalLeave: 24,
    },

    // ================= ID CARD =================
    idCard: {
      cardNumber: "CARD-EMP001",
      issueDate: "2025-06-10",
      expiryDate: "2027-06-10",
      status: "Exited",
    },

    // ================= PROFILE =================
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTqqii001x9K939hPSk8bgAXnbnRgvdO480VUx4ArzA&s=10",

    // ================= EMPLOYEE HISTORY =================
    history: [
      {
        id: 1,
        date: "2025-06-10",
        action: "Joined Company",
        description: "Joined as Frontend Developer",
      },

    ],

    // ================= META =================
    createdAt: "2025-06-10",
    updatedAt: "2026-08-20",
  },

  // =========================================================
  // EMPLOYEE 2
  // =========================================================

  {
    id: 2,
    employeeId: "EMP002",

    firstName: "Priya",
    lastName: "Singh",
    fullName: "Priya Singh",
    gender: "Female",
    dateOfBirth: "1996-09-21",
    bloodGroup: "O+",
    maritalStatus: "Married",

    email: "priya.singh@company.com",
    personalEmail: "priya.singh@gmail.com",
    phone: "9876543211",
    alternatePhone: " 9876501235",

    address: {
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302021",
    },

    department: "Human Resources",
    departmentId: 2,

    designation: "HR Manager",
    designationId: 2,

    role: "HR",

    employmentType: "Full Time",
    employmentStatus: "Active",

    joiningDate: "2023-04-15",
    confirmationDate: "2023-10-15",

    reportingManager: "Neha Gupta",
    reportingManagerId: 102,

    branch: "Jaipur Branch",
    branchId: 1,

    location: "Jaipur",

    workMode: "Office",

    shift: "General Shift",

    salary: {
      basic: 50000,
      allowances: 12000,
      deductions: 3000,
      grossSalary: 62000,
      netSalary: 59000,
      salaryType: "Monthly",
    },

    documents: {
      aadhaar: "XXXX-XXXX-2345",
      pan: "BCDEF2345G",
      passport: "P1234567",
      drivingLicense: "",
    },

    emergencyContact: {
      name: "Ravi Singh",
      relation: "Husband",
      phone: " 9876543001",
      alternatePhone: "",
    },

    bankDetails: {
      bankName: "ICICI Bank",
      accountNumber: "XXXXXXXX2345",
      ifsc: "ICIC0001234",
      accountHolderName: "Priya Singh",
    },

    education: [
      {
        degree: "MBA",
        specialization: "Human Resources",
        institution: "University of Rajasthan",
        passingYear: 2019,
      },
    ],

    experience: [
      {
        company: "XYZ Pvt Ltd",
        designation: "HR Executive",
        startDate: "2019-06-01",
        endDate: "2023-04-01",
        experience: "4 Years",
      },
    ],

    leaveBalance: {
      casualLeave: 10,
      sickLeave: 8,
      earnedLeave: 12,
      totalLeave: 30,
    },

    idCard: {
      cardNumber: "CARD-EMP002",
      issueDate: "2023-04-15",
      expiryDate: "2026-04-15",
      status: "Active",
    },

    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_3JokCe998nTm1SucgEZRKEB2vinJ6IxkGiJuOwZdQ&s=10",

    history: [
      {
        id: 1,
        date: "2023-04-15",
        action: "Joined Company",
        description: "Joined as HR Manager",
      },

    ],

    createdAt: "2023-04-15",
    updatedAt: "2026-08-20",
  },

  // =========================================================
  // EMPLOYEE 3
  // =========================================================

  {
    id: 3,
    employeeId: "EMP003",

    firstName: "Amit",
    lastName: "Verma",
    fullName: "Amit Verma",
    gender: "Male",
    dateOfBirth: "1995-02-18",
    bloodGroup: "A+",
    maritalStatus: "Married",

    email: "amit.verma@company.com",
    personalEmail: "amit.verma@gmail.com",
    phone: " 9876543212",
    alternatePhone: " 9876501236",

    address: {
      street: "Malviya Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302017",
    },

    department: "IT",
    departmentId: 1,

    designation: "Senior Software Engineer",
    designationId: 3,

    role: "Manager",

    employmentType: "Full Time",
    employmentStatus: "Active",

    joiningDate: "2021-01-20",
    confirmationDate: "2021-07-20",

    reportingManager: "Rajesh Kumar",
    reportingManagerId: 103,

    branch: "Jaipur Branch",
    branchId: 1,

    location: "Jaipur",

    workMode: "Hybrid",

    shift: "General Shift",

    salary: {
      basic: 70000,
      allowances: 15000,
      deductions: 5000,
      grossSalary: 85000,
      netSalary: 80000,
      salaryType: "Monthly",
    },

    documents: {
      aadhaar: "XXXX-XXXX-3456",
      pan: "CDEFG3456H",
      passport: "P2345678",
      drivingLicense: "RJ14-20210012345",
    },

    emergencyContact: {
      name: "Pooja Verma",
      relation: "Wife",
      phone: " 9876543002",
      alternatePhone: "",
    },

    bankDetails: {
      bankName: "SBI",
      accountNumber: "XXXXXXXX3456",
      ifsc: "SBIN0001234",
      accountHolderName: "Amit Verma",
    },

    education: [
      {
        degree: "B.Tech",
        specialization: "Computer Science",
        institution: "RTU Kota",
        passingYear: 2016,
      },
    ],

    experience: [
      {
        company: "Tech Solutions",
        designation: "Software Engineer",
        startDate: "2016-07-01",
        endDate: "2021-01-10",
        experience: "4.5 Years",
      },
    ],

    leaveBalance: {
      casualLeave: 7,
      sickLeave: 5,
      earnedLeave: 15,
      totalLeave: 27,
    },

    idCard: {
      cardNumber: "CARD-EMP003",
      issueDate: "2021-01-20",
      expiryDate: "2027-01-20",
      status: "Active",
    },

    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsF0TdytYlVOA_GmrQna7bSpP_Bho1j0zgt26juD2PA&s=10",

    history: [
      {
        id: 1,
        date: "2021-01-20",
        action: "Joined Company",
        description: "Joined as Software Engineer",
      },

    ],

    createdAt: "2021-01-20",
    updatedAt: "2026-08-20",
  },

  // =========================================================
  // EMPLOYEE 4
  // =========================================================

  {
    id: 4,
    employeeId: "EMP004",

    firstName: "Neha",
    lastName: "Gupta",
    fullName: "Neha Gupta",
    gender: "Female",
    dateOfBirth: "1997-11-05",
    bloodGroup: "AB+",
    maritalStatus: "Single",

    email: "neha.gupta@company.com",
    personalEmail: "neha.gupta@gmail.com",
    phone: " 9876543213",
    alternatePhone: " 9876501237",

    address: {
      street: "C-Scheme",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302001",
    },

    department: "Finance",
    departmentId: 3,

    designation: "Finance Executive",
    designationId: 4,

    role: "Employee",

    employmentType: "Full Time",
    employmentStatus: "Active",

    joiningDate: "2024-02-01",
    confirmationDate: "2024-08-01",

    reportingManager: "Rakesh Mehta",
    reportingManagerId: 104,

    branch: "Jaipur Branch",
    branchId: 1,

    location: "Jaipur",

    workMode: "Office",

    shift: "General Shift",

    salary: {
      basic: 40000,
      allowances: 9000,
      deductions: 2500,
      grossSalary: 49000,
      netSalary: 46500,
      salaryType: "Monthly",
    },

    documents: {
      aadhaar: "XXXX-XXXX-4567",
      pan: "DEFGH4567I",
      passport: "",
      drivingLicense: "RJ14-20220045678",
    },

    emergencyContact: {
      name: "Anil Gupta",
      relation: "Father",
      phone: " 9876543003",
      alternatePhone: "",
    },

    bankDetails: {
      bankName: "Axis Bank",
      accountNumber: "XXXXXXXX4567",
      ifsc: "UTIB0001234",
      accountHolderName: "Neha Gupta",
    },

    education: [
      {
        degree: "B.Com",
        specialization: "Accounting",
        institution: "University of Rajasthan",
        passingYear: 2019,
      },
    ],

    experience: [
      {
        company: "Finance Corp",
        designation: "Account Executive",
        startDate: "2019-07-01",
        endDate: "2024-01-15",
        experience: "4.5 Years",
      },
    ],

    leaveBalance: {
      casualLeave: 9,
      sickLeave: 7,
      earnedLeave: 10,
      totalLeave: 26,
    },

    idCard: {
      cardNumber: "CARD-EMP004",
      issueDate: "2024-02-01",
      expiryDate: "2027-02-01",
      status: "Active",
    },

    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7_1MBCp7vkm7eqfHTlTs9dzibMDEED-jDw8HaLUCQg&s=10",

    history: [
      {
        id: 1,
        date: "2024-02-01",
        action: "Joined Company",
        description: "Joined as Finance Executive",
      },

    ],

    createdAt: "2024-02-01",
    updatedAt: "2026-08-20",
  },

  // =========================================================
  // EMPLOYEE 5
  // =========================================================

  {
    id: 5,
    employeeId: "EMP005",

    firstName: "Rohit",
    lastName: "Meena",
    fullName: "Rohit Meena",
    gender: "Male",
    dateOfBirth: "1999-07-22",
    bloodGroup: "B-",
    maritalStatus: "Single",

    email: "rohit.meena@company.com",
    personalEmail: "rohit.meena@gmail.com",
    phone: " 9876543214",
    alternatePhone: " 9876501238",

    address: {
      street: "Jagatpura",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302025",
    },

    department: "Marketing",
    departmentId: 4,

    designation: "Marketing Executive",
    designationId: 5,

    role: "Employee",

    employmentType: "Full Time",
    employmentStatus: "Active",

    joiningDate: "2025-01-10",
    confirmationDate: "2025-07-10",

    reportingManager: "Neha Gupta",
    reportingManagerId: 102,

    branch: "Jaipur Branch",
    branchId: 1,

    location: "Jaipur",

    workMode: "Hybrid",

    shift: "General Shift",

    salary: {
      basic: 28000,
      allowances: 7000,
      deductions: 1500,
      grossSalary: 35000,
      netSalary: 33500,
      salaryType: "Monthly",
    },

    documents: {
      aadhaar: "XXXX-XXXX-5678",
      pan: "EFGHI5678J",
      passport: "",
      drivingLicense: "",
    },

    emergencyContact: {
      name: "Mohan Meena",
      relation: "Father",
      phone: " 9876543004",
      alternatePhone: "",
    },

    bankDetails: {
      bankName: "HDFC Bank",
      accountNumber: "XXXXXXXX5678",
      ifsc: "HDFC0001235",
      accountHolderName: "Rohit Meena",
    },

    education: [
      {
        degree: "MBA",
        specialization: "Marketing",
        institution: "JECRC University",
        passingYear: 2021,
      },
    ],

    experience: [
      {
        company: "Digital Marketing Agency",
        designation: "Marketing Executive",
        startDate: "2021-08-01",
        endDate: "2024-12-20",
        experience: "3.5 Years",
      },
    ],

    leaveBalance: {
      casualLeave: 8,
      sickLeave: 6,
      earnedLeave: 8,
      totalLeave: 22,
    },

    idCard: {
      cardNumber: "CARD-EMP005",
      issueDate: "2025-01-10",
      expiryDate: "2028-01-10",
      status: "Active",
    },

    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdClKMFlouAwXaeDfHv-QTrKvCe1MiX3NWNOIznkgOw&s=10",

    history: [
      {
        id: 1,
        date: "2025-01-10",
        action: "Joined Company",
        description: "Joined as Marketing Executive",
      },

    ],


    createdAt: "2025-01-10",
    updatedAt: "2026-08-20",
  },

  // =========================================================
  // EMPLOYEE 6 - EXIT EMPLOYEE
  // =========================================================

  {
    id: 6,
    employeeId: "EMP006",

    firstName: "Vikas",
    lastName: "Joshi",
    fullName: "Vikas Joshi",
    gender: "Male",
    dateOfBirth: "1994-03-10",
    bloodGroup: "O+",
    maritalStatus: "Married",

    email: "vikas.joshi@company.com",
    personalEmail: "vikas.joshi@gmail.com",
    phone: " 9876543215",
    alternatePhone: " 9876501239",

    address: {
      street: "Murlipura",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302039",
    },

    department: "Sales",
    departmentId: 5,

    designation: "Sales Manager",
    designationId: 6,

    role: "Manager",

    employmentType: "Full Time",
    employmentStatus: "Exited",

    joiningDate: "2021-05-01",
    confirmationDate: "2021-11-01",

    reportingManager: "Rajesh Kumar",
    reportingManagerId: 103,

    branch: "Jaipur Branch",
    branchId: 1,

    location: "Jaipur",

    workMode: "Office",

    shift: "General Shift",

    salary: {
      basic: 55000,
      allowances: 12000,
      deductions: 3000,
      grossSalary: 67000,
      netSalary: 64000,
      salaryType: "Monthly",
    },

    documents: {
      aadhaar: "XXXX-XXXX-6789",
      pan: "FGHIJ6789K",
      passport: "P3456789",
      drivingLicense: "RJ14-20230056789",
    },

    emergencyContact: {
      name: "Sunita Joshi",
      relation: "Wife",
      phone: " 9876543005",
      alternatePhone: "",
    },

    bankDetails: {
      bankName: "ICICI Bank",
      accountNumber: "XXXXXXXX6789",
      ifsc: "ICIC0001235",
      accountHolderName: "Vikas Joshi",
    },

    education: [
      {
        degree: "BBA",
        specialization: "Business Administration",
        institution: "University of Rajasthan",
        passingYear: 2015,
      },
    ],

    experience: [
      {
        company: "Sales India Pvt Ltd",
        designation: "Sales Executive",
        startDate: "2015-07-01",
        endDate: "2021-04-20",
        experience: "5.5 Years",
      },
    ],

    leaveBalance: {
      casualLeave: 0,
      sickLeave: 0,
      earnedLeave: 0,
      totalLeave: 0,
    },

    idCard: {
      cardNumber: "CARD-EMP006",
      issueDate: "2021-05-01",
      expiryDate: "2026-05-01",
      status: "Inactive",
    },

    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJ3ZBTJPPbeZ3VXfJ1V3J1cHS9FET0Gk37_emPL9cRw&s",

    // ================= EXIT INFORMATION =================
    exitDetails: {
      exitDate: "2026-05-31",
      exitType: "Switch Company",
      reason: "Career Growth",
      noticePeriod: "30 Days",
      exitInterview: "Completed",
      clearanceStatus: "Completed",
    },

    history: [
      {
        id: 1,
        date: "2021-05-01",
        action: "Joined Company",
        description: "Joined as Sales Manager",
      },
    ],

    createdAt: "2021-05-01",
    updatedAt: "2026-05-31",
  },
];

export default employees;