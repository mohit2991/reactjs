import { showToast } from "./toast";

const errorHandler = (error) => {
  // 301-399
  // 401-499
  if (
    error.response &&
    error.response.status >= 401 &&
    error.response.status <= 499
  ) {
    showToast(
      error.response?.data?.message || "Something went wrong!",
      "error"
    );
  } else {
    showToast(error.message, "error");
  }
};

export default errorHandler;
