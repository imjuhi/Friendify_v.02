const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        class="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
