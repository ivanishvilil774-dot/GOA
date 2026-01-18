function FallbackUI({ error, resetErrorBoundary }) {
    return (
        <div>
            <p>There is an error: {error.message}</p>
            <button onClick={resetErrorBoundary}>Reset</button>
        </div>
    );
}

export default FallbackUI;