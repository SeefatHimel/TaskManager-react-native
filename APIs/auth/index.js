import axios from "axios";

const login = async ({ username, password }) => {
    await axios
        .post("https://djangobacken.onrender.com/auth/login", {
            username: username,
            password: password,
        })
        .then((response) => {
            console.log("Login successful:", response?.data);
            // Handle successful login, navigate to next screen, etc.
        })
        .catch((error) => {
            console.error("Login failed:", error.response.data);
            // Handle login error, display error message, etc.
        });
};
const UserAPIs = { login };
export default UserAPIs;
