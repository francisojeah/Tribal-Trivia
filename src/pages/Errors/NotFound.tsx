import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-red-600">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoBack}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
