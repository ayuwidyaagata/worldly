import { useState } from "react";
import { signOut } from "next-auth/react";
import Alert from "./Alert";

type LogoutModalProps = {
  closeModal: () => void;
};

const LogoutModal = ({ closeModal }: LogoutModalProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
      setShowAlert(true);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-7xl mb-5">🙍🏻‍♂️</p>
        <p className="mb-8 text-gray-400">Are you sure want to sign out?</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 text-gray-600 hover:underline"
        >
          Cancel
        </button>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full mb-4"
        >
          Yes
        </button>
      </div>
      {showAlert && (
        <Alert
          type="success"
          message="You have been signed out successfully."
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default LogoutModal;
