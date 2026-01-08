function NavBar() {
    return (
        <div className="bg-black text-white flex justify-between align-center p-4 sticky top-0 bg-opacity-20 backdrop-blur-md">
            <div>
                <h1 className="font-bold text-2xl">Logo.</h1>
            </div>
            <nav className="flex gap-4">
                <a href="/">Home</a>
                <a href="/">About us</a>
                <a href="/">services</a>
                <a href="/">Contact us</a>
            </nav>
        </div>
    );
}

export default NavBar;