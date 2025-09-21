class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

class CarManager {
    constructor() {
        this.cars = CarManager.getFromStorage();
        this.renderCars();
    }

    static getFromStorage() {
        const data = localStorage.getItem("cars");
        return data ? JSON.parse(data) : [];
    }

    static saveToStorage(cars) {
        localStorage.setItem("cars", JSON.stringify(cars));
    }

    addCar(make, model, year) {
        const newCar = new Car(make, model, year);
        this.cars.push(newCar);
        CarManager.saveToStorage(this.cars);
        this.renderCars();
    }

    deleteCar(index) {
        this.cars.splice(index, 1);
        CarManager.saveToStorage(this.cars);
        this.renderCars();
    }

    renderCars() {
        const container = document.getElementById("carsList");
        container.innerHTML = "";

        this.cars.forEach((car, index) => {
            const carDiv = document.createElement("div");
            carDiv.classList.add("car-item");

            carDiv.innerHTML = `
                <p><strong>Make:</strong> ${car.make}</p>
                <p><strong>Model:</strong> ${car.model}</p>
                <p><strong>Year:</strong> ${car.year}</p>
                <button class="delete-btn">Delete</button>
            `;

            carDiv.querySelector(".delete-btn").addEventListener("click", () => {
                this.deleteCar(index);
            });

            container.appendChild(carDiv);
        });
    }
}

const carManager = new CarManager();

document.getElementById("carForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;

    carManager.addCar(make, model, year);

    e.target.reset();
});

