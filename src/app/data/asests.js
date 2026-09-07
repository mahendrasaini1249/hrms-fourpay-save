const assetData = [

    // =====================================================
    // ASSET CATEGORIES
    // =====================================================

    {
        id: 1,
        module: "asset-categories",
        categoryId: "AC001",
        categoryName: "Laptop",
        description: "Company laptops for employees",
        assetType: "IT Equipment",
        depreciationRate: "20%",
        status: "Active",
    },
    {
        id: 2,
        module: "asset-categories",
        categoryId: "AC002",
        categoryName: "Office Furniture",
        description: "Desks and chairs for employees",
        assetType: "Furniture",
        depreciationRate: "10%",
        status: "Active",
    },


    // =====================================================
    // ASSIGN ASSET
    // =====================================================

    {
        id: 3,
        module: "assign-asset",
        assignmentId: "AA001",
        assetId: "AST001",
        assetName: "Dell Latitude 5440",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        assignedDate: "2026-09-01",
        assignedBy: "Admin",
        condition: "Good",
        status: "Assigned",
    },
    {
        id: 4,
        module: "assign-asset",
        assignmentId: "AA002",
        assetId: "AST002",
        assetName: "HP EliteBook 840",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        assignedDate: "2026-09-02",
        assignedBy: "HR Manager",
        condition: "Excellent",
        status: "Assigned",
    },


    // =====================================================
    // RETURN ASSET
    // =====================================================

    {
        id: 5,
        module: "return-asset",
        returnId: "RA001",
        assetId: "AST003",
        assetName: "Lenovo ThinkPad",
        employeeId: "EMP003",
        employeeName: "Rahul Kumar",
        returnDate: "2026-09-03",
        reason: "Employee Exit",
        condition: "Good",
        receivedBy: "Admin",
        status: "Returned",
    },
    {
        id: 6,
        module: "return-asset",
        returnId: "RA002",
        assetId: "AST004",
        assetName: "Samsung Monitor",
        employeeId: "EMP004",
        employeeName: "Priya Singh",
        returnDate: "2026-09-04",
        reason: "Asset Replacement",
        condition: "Fair",
        receivedBy: "HR Manager",
        status: "Returned",
    },


    // =====================================================
    // ASSET HISTORY
    // =====================================================

    {
        id: 7,
        module: "asset-history",
        historyId: "AH001",
        assetId: "AST001",
        assetName: "Dell Latitude 5440",
        employeeId: "EMP001",
        employeeName: "Amit Sharma",
        action: "Assigned",
        date: "2026-09-01",
        performedBy: "Admin",
        remarks: "Laptop assigned to employee",
        status: "Pending",
    },
    {
        id: 8,
        module: "asset-history",
        historyId: "AH002",
        assetId: "AST002",
        assetName: "HP EliteBook 840",
        employeeId: "EMP002",
        employeeName: "Neha Verma",
        action: "Transferred",
        date: "2026-09-02",
        performedBy: "HR Manager",
        remarks: "Asset transferred to HR department",
        status: "Pending",

    },


    // =====================================================
    // ASSET MAINTENANCE
    // =====================================================

    {
        id: 9,
        module: "asset-maintenance",
        maintenanceId: "AM001",
        assetId: "AST005",
        assetName: "Dell Desktop",
        maintenanceType: "Hardware Repair",
        issue: "Power supply problem",
        requestDate: "2026-09-01",
        completionDate: "2026-09-03",
        technician: "Tech Support",
        cost: 2500,
        status: "Completed",
    },
    {
        id: 10,
        module: "asset-maintenance",
        maintenanceId: "AM002",
        assetId: "AST006",
        assetName: "HP Printer",
        maintenanceType: "Preventive Maintenance",
        issue: "Regular servicing",
        requestDate: "2026-09-04",
        completionDate: "",
        technician: "Tech Support",
        cost: 1200,
        status: "Pending",
    },

];

export default assetData;