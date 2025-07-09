const GoBackButton = () => {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors m-4"
    >
      Go back
    </button>
  );
};

export default GoBackButton;
