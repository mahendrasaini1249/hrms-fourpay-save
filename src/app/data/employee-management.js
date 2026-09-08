const employees = [

  // =====================================================
  // ALL EMPLOYEES
  // =====================================================

  {
    id: 1,
    module: "all-employees",

    employeeId: "EMP001",
    employeeName: "Rahul Sharma",
    email: "rahul.sharma@company.com",
    phone: "9876543210",
    department: "IT",
    designation: "Frontend Developer",
    joiningDate: "2025-06-10",
    employmentType: "Full Time",
    status: "Active"
  },

  {
    id: 2,
    module: "all-employees",

    employeeId: "EMP002",
    employeeName: "Priya Singh",
    email: "priya.singh@company.com",
    phone: "9876543211",
    department: "Human Resources",
    designation: "HR Manager",
    joiningDate: "2023-04-15",
    employmentType: "Full Time",
    status: "Active"
  },


  // =====================================================
  // ADD EMPLOYEE
  // =====================================================

  {
    id: 3,
    module: "add-employee",

    employeeId: "EMP003",
    employeeName: "Amit Verma",
    email: "amit.verma@company.com",
    phone: "9876543212",
    department: "IT",
    designation: "Software Engineer",
    joiningDate: "2026-08-01",
    employmentType: "Full Time",
    status: "Pending"
  },

  {
    id: 4,
    module: "add-employee",

    employeeId: "EMP004",
    employeeName: "Neha Gupta",
    email: "neha.gupta@company.com",
    phone: "9876543213",
    department: "Finance",
    designation: "Finance Executive",
    joiningDate: "2026-08-10",
    employmentType: "Full Time",
    status: "Pending"
  },


  // =====================================================
  // EMPLOYEE DIRECTORY
  // =====================================================

  {
    id: 5,
    module: "employee-directory",

    employeeId: "EMP005",
    employeeName: "Rohit Meena",
    email: "rohit.meena@company.com",
    phone: "9876543214",
    department: "Marketing",
    designation: "Marketing Executive",
    location: "Jaipur",
    branch: "Jaipur Branch",
    workMode: "Hybrid",
    status: "Active"
  },

  {
    id: 6,
    module: "employee-directory",

    employeeId: "EMP006",
    employeeName: "Karan Joshi",
    email: "karan.joshi@company.com",
    phone: "9876543215",
    department: "Sales",
    designation: "Sales Executive",
    location: "Delhi",
    branch: "Delhi Branch",
    workMode: "Office",
    status: "Active"
  },


  // =====================================================
  // EMPLOYEE ID CARDS
  // =====================================================

  {
    id: 7,
    module: "employee-id-cards",

    employeeId: "EMP001",
    employeeName: "Rahul Sharma",
    department: "IT",
    designation: "Frontend Developer",
    cardNumber: "CARD-EMP001",
    issueDate: "2025-06-10",
    expiryDate: "2027-06-10",
    profileImage: "https://cdn-icons-png.magnific.com/256/5104/5104591.png?semt=ais_white_label",
    status: "Active"
  },

  {
    id: 8,
    module: "employee-id-cards",

    employeeId: "EMP002",
    employeeName: "Karan Joshi",
    department: "IT",
    designation: "Full Stack Developer",

    cardNumber: "CARD-EMP001",
    issueDate: "2025-06-10",
    expiryDate: "2026-06-10",

    profileImage: "https://cdn-icons-png.flaticon.com/512/4974/4974985.png",

    status: "Active"
  },

  // =====================================================
  // EMERGENCY CONTACTS
  // =====================================================

  {
    id: 9,
    module: "emergency-contacts",

    employeeId: "EMP001",
    employeeName: "Rahul Sharma",
    contactName: "Suresh Sharma",
    relation: "Father",
    phone: "9876543000",
    alternatePhone: "9876501234",
    address: "Mansarovar, Jaipur",
    status: "Active"
  },

  {
    id: 10,
    module: "emergency-contacts",

    employeeId: "EMP002",
    employeeName: "Priya Singh",
    contactName: "Ravi Singh",
    relation: "Husband",
    phone: "9876543001",
    alternatePhone: "9876501235",
    address: "Vaishali Nagar, Jaipur",
    status: "Active"
  },


  // =====================================================
  // EMPLOYEE HISTORY
  // =====================================================

  {
    id: 11,
    module: "employee-history",

    employeeId: "EMP001",
    employeeName: "Rahul Sharma",
    date: "2026-06-01",
    action: "Designation Updated",
    previousValue: "Junior Developer",
    newValue: "Frontend Developer",
    description: "Employee designation was updated.",
    updatedBy: "HR Manager",
    status: "Active"
  },

  {
    id: 12,
    module: "employee-history",

    employeeId: "EMP002",
    employeeName: "Priya Singh",
    date: "2026-05-15",
    action: "Department Changed",
    previousValue: "Administration",
    newValue: "Human Resources",
    description: "Employee department was changed.",
    updatedBy: "Admin",
    status: "Active"

  },


  // =====================================================
  // EXIT EMPLOYEES
  // =====================================================

  {
    id: 13,
    module: "exit-employees",

    employeeId: "EMP007",
    employeeName: "Vikas Joshi",
    department: "Sales",
    designation: "Sales Manager",
    joiningDate: "2021-05-01",
    exitDate: "2026-05-31",
    exitType: "Resignation",
    reason: "Career Growth",
    noticePeriod: "30 Days",
    clearanceStatus: "Completed",
    status: "Exited"
  },

  {
    id: 14,
    module: "exit-employees",

    employeeId: "EMP008",
    employeeName: "Pooja Mehta",
    department: "Marketing",
    designation: "Marketing Manager",
    joiningDate: "2022-02-15",
    exitDate: "2026-07-31",
    exitType: "Resignation",
    reason: "Personal Reasons",
    noticePeriod: "30 Days",
    clearanceStatus: "Pending",
    status: "Exited"
  }

];

export default employees;