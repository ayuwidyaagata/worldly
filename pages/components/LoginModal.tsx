import GoogleButton from "./GoogleButton";

type LoginModalProps = {
  closeModal: () => void;
};

const LoginModal = ({ closeModal }: LoginModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-7xl mb-5">🏕️</p>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Login to Your Account
        </h2>
        <p className="mb-8 text-gray-400">
          Sign in to access the country list.
        </p>
        <GoogleButton />
        <button
          onClick={closeModal}
          className="px-4 py-2 text-red-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
