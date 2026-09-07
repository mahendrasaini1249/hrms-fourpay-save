const shiftManagementData = [

    // =========================
    // SHIFTS
    // =========================
    {
        id: 1,
        module: "shifts",
        shiftId: "SH001",
        shiftName: "Morning Shift",
        startTime: "06:00 AM",
        endTime: "02:00 PM",
        duration: "8 Hours",
        status: "Active"
    },
    {
        id: 2,
        module: "shifts",
        shiftId: "SH002",
        shiftName: "General Shift",
        startTime: "09:00 AM",
        endTime: "06:00 PM",
        duration: "9 Hours",
        status: "Active"
    },

    // =========================
    // SHIFT ASSIGNMENT
    // =========================
    {
        id: 3,
        module: "shift-assignment",
        assignmentId: "SA001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        shiftName: "Morning Shift",
        assignedDate: "2026-09-01",
        status: "Assigned"
    },
    {
        id: 4,
        module: "shift-assignment",
        assignmentId: "SA002",
        employeeId: "EMP002",
        employeeName: "Priya Singh",
        shiftName: "Night Shift",
        assignedDate: "2026-09-02",
        status: "Assigned"
    },

    // =========================
    // SHIFT ROSTER
    // =========================
    {
        id: 5,
        module: "shift-roster",
        rosterId: "SR001",
        employeeId: "EMP003",
        employeeName: "Rahul Verma",
        department: "Production",
        shiftName: "Morning Shift",
        date: "2026-09-06",
        status: "Present"
    },
    {
        id: 6,
        module: "shift-roster",
        rosterId: "SR002",
        employeeId: "EMP004",
        employeeName: "Neha Gupta",
        department: "HR",
        shiftName: "General Shift",
        date: "2026-09-06",
        status: "Present"
    },

    // =========================
    // WEEKLY SCHEDULE
    // =========================
    {
        id: 7,
        module: "weekly-schedule",
        scheduleId: "WS001",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        monday: "Morning",
        tuesday: "Morning",
        wednesday: "General",
        thursday: "Morning",
        friday: "Morning",
        saturday: "Off",
        sunday: "Off"
    },
    {
        id: 8,
        module: "weekly-schedule",
        scheduleId: "WS002",
        employeeId: "EMP002",
        employeeName: "Priya Singh",
        monday: "Night",
        tuesday: "Night",
        wednesday: "Night",
        thursday: "Off",
        friday: "Night",
        saturday: "Night",
        sunday: "Off"
    },

    // =========================
    // NIGHT SHIFT
    // =========================
    {
        id: 9,
        module: "night-shift",
        shiftId: "NS001",
        employeeId: "EMP005",
        employeeName: "Vikas Kumar",
        department: "Security",
        startTime: "10:00 PM",
        endTime: "06:00 AM",
        date: "2026-09-06",
        status: "Active"
    },
    {
        id: 10,
        module: "night-shift",
        shiftId: "NS002",
        employeeId: "EMP006",
        employeeName: "Sneha Patel",
        department: "Production",
        startTime: "10:00 PM",
        endTime: "06:00 AM",
        date: "2026-09-06",
        status: "Active"
    }

];

export default shiftManagementData;