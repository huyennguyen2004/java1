import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/public",
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Kiểm tra nếu đã redirect
            if (!localStorage.getItem("hasRedirected")) {
                localStorage.setItem("hasRedirected", true);
                window.location.href = "/Login"; // Redirect tới trang đăng nhập
            }
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
