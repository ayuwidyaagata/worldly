import { useEffect } from "react";

type AlertProps = {
  type: "success" | "error";
  message: string;
  onClose: () => void;
  duration?: number;
};

const Alert = ({ type, message, onClose, duration = 10000 }: AlertProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-4 w-fit px-4 py-2 rounded-lg shadow-lg z-50 text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button onClick={onClose} className="ml-4 text-lg font-bold">
          ×
        </button>
      </div>
    </div>
  );
};

export default Alert;
