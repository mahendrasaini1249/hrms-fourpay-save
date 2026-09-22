import { rolePermissions } from "@/config/rolePermissions";

// Convert title into permission ID
export const makeSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
};


// Get role-based sidebar
export const getAllowedSidebar = (sidebarData, userRole) => {
    const role = userRole?.toLowerCase();

    const permissions = rolePermissions[role];

    // Role not found
    if (!permissions) {
        return [];
    }

    // Filter modules
    return sidebarData
        .filter((module) => {
            const moduleId = module.id || makeSlug(module.title);

            // Admin: All modules allowed
            if (permissions.modules === "*") {
                return true;
            }

            // Other roles: Check module permission
            return permissions.modules.includes(moduleId);
        })
        .map((module) => {
            const moduleId = module.id || makeSlug(module.title);

            // Module has no children
            if (!module.children) {
                return module;
            }

            // Admin: All submodules allowed
            if (permissions.submodules === "*") {
                return module;
            }

            // Get allowed children of current module
            const allowedChildren =
                permissions.submodules?.[moduleId] || [];

            const filteredChildren = module.children.filter((child) => {
                const childId = child.id || makeSlug(child.title);

                return allowedChildren.includes(childId);
            });

            return {
                ...module,
                children: filteredChildren,
            };
        })
        .filter((module) => {
            // Remove module if it has children but
            // none of them are permitted
            if (module.children) {
                return module.children.length > 0;
            }

            return true;
        });
};