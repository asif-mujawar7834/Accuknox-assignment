import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface Toast {
  id: number;
  message: string;
  type?: "success" | "error" | "info" | "warning";
}

interface ToasterProps {
  toast: Toast | null;
  removeToast: () => void;
}

export const Toaster: React.FC<ToasterProps> = ({ toast, removeToast }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        removeToast();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toast, removeToast]);

  if (!toast) return null;

  const toastClasses = {
    success: "#399918",
    error: "#FF0000",
    warning: "#FFB200",
  };

  return (
    <div
      className={`z-20 text-white fixed flex items-center justify-between gap-5 bottom-5 right-10 p-5 shadow-md rounded-md`}
      style={{
        background: toastClasses[toast.type as keyof typeof toastClasses],
      }}
    >
      <div>{toast.message}</div>
      <button onClick={removeToast}>
        <FaTimes />
      </button>
    </div>
  );
};
