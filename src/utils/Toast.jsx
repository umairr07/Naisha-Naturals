import { toast } from "react-toastify";

export const handleSuccess = (message) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 2000,
    theme: "colored",
  });
};

export const handleError = (message) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 2000,
    theme: "colored",
  });
};
