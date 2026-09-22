import axios from "axios";

const API_URL = "https://paysave.cloud/api";

export const getMyProfile = async (token) => {
    const response = await axios.get(
        `${API_URL}/auth/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};