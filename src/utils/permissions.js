export const getVisibleUsers = (loggedInUser, users) => {
    if (!loggedInUser) {
        return [];
    }

    const currentRole =
        loggedInUser.role?.toLowerCase();

    // ADMIN → sabhi users
    if (currentRole === "admin") {
        return users;
    }

    // HR → khud + employees
    if (currentRole === "hr") {
        return users.filter((item) => {
            const targetRole =
                item.role?.toLowerCase();

            const isSelf =
                String(item._id) ===
                String(loggedInUser._id);

            return (
                isSelf ||
                targetRole === "employee"
            );
        });
    }

    // MANAGER → khud + HR + employees
    if (currentRole === "manager") {
        return users.filter((item) => {
            const targetRole =
                item.role?.toLowerCase();

            const isSelf =
                String(item._id) ===
                String(loggedInUser._id);

            return (
                isSelf ||
                targetRole === "hr" ||
                targetRole === "employee"
            );
        });
    }

    // EMPLOYEE → sirf khud
    if (currentRole === "employee") {
        return users.filter((item) => {
            return (
                String(item._id) ===
                String(loggedInUser._id)
            );
        });
    }

    return [];
};