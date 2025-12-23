function StyledComponent() {

const titleStyle = {
    color: "green",
    fontSize: "32px",
    textAlign: "center"
};

const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "black",
    borderRadius: "12px",
    margin: "20px auto"
};

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
};

    return (
    <div>
    <h1 style={titleStyle}>Inline Styling React-ში</h1>

    <div style={boxStyle}></div>

    <button style={buttonStyle}>დაჭერა</button>
    </div>
);
}

export default StyledComponent;
