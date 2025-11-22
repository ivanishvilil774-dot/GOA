function Cars({ cars }) {
    return (
        <div>
        <ul>
            {cars.map((car) => (
                <li>
                    <p>Name: {car.name}</p>
                    <p>Year: {car.year}</p>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default Cars;
