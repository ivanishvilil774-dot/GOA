function Comp2() {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />

        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold">Logo Here</h1>
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Countack Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className="space-x-4">
                <i className="fa-solid fa-chart-area"></i>
                <i className="fa-solid fa-basket-shopping"></i>
                <i className="fa-solid fa-user"></i>
            </div>
        </header>
      </>
    );
}

export default Comp2;