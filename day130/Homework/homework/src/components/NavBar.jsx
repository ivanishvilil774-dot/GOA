function NavBar() {
    return (  
        <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
            <h1>My APP with Tailwind CSS</h1>
            <nav className="">
                <ul className="flex justify-center items-center flex-row gap-2">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;