function Homework1() {
    const containerStyle = {
    width: "300px",
    padding: "20px",
    backgroundColor: "#111",
    borderRadius: "12px",
    textAlign: "center"
};

const titleStyle = {
    color: "lime",
    fontSize: "24px",
    marginBottom: "10px"
};

const textStyle = {
    color: "#ccc",
    fontSize: "16px"
};

const buttonStyle = {
    padding: "10px 16px",
    backgroundColor: "lime",
    color: "black",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "12px"
};

    return (
        <div style={containerStyle}>
        <h2 style={titleStyle}>Counter</h2>
        <p style={textStyle}>This is styled using objects</p>
        <button style={buttonStyle}>Click me</button>
        </div>
    );
}

export default Homework1;