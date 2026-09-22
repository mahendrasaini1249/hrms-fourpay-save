export const rolePermissions = {
    admin: {
        modules: "*",
        submodules: "*",
        scope: "all",
    },

    hr: {
        modules: [
            "employee-management",
            "organization",
            "hiring-onboarding",
            "attendance",
            "leave-management",
            "performance",
            "training",
            "expenses",
            "documents",
            "communication",
            "self-employee-service",
            "reports",
            "help",
        ],

        submodules: {
            "employee-management": [
                "all-employees",
                "add-employee",
                "employee-directory",
                "employee-id-cards",
                "emergency-contacts",
                "employee-history",
                "exit-employees",
            ],
        },

        scope: "organization",
    },

    manager: {
        modules: [
            "employee-management",
            "attendance",
            "leave-management",
            "performance",
            "training",
            "expenses",
            "travel",
            "assets",
            "documents",
            "communication",
            "self-employee-service",
            "reports",
            "help",
        ],

        submodules: {
            "employee-management": [
                "employee-directory",
                "emergency-contacts",
            ],
        },

        scope: "team",
    },

    employee: {
        modules: [
            "attendance",
            "leave-management",
            "expenses",
            "travel",
            "assets",
            "documents",
            "self-employee-service",
            "help",
        ],

        submodules: {},

        scope: "self",
    },
};