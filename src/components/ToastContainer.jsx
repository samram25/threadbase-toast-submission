
export default function ToastContainer({ toasts, onDismiss }) {
  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          role="alert"
          onClick={() => onDismiss(toast.id)}
        >
          <span className="toast-message">{toast.message}</span>

          <button
            type="button"
            className="toast-dismiss"
            aria-label="Dismiss notification"
            onClick={(event) => {
              event.stopPropagation();
              onDismiss(toast.id);
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
