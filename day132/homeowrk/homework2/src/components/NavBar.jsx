function NavBar() {
    return (  
        <header className="bg-blue-600 text-white flex justify-between p-4 px-6">
            <div>
                <h1>Tailwind tap</h1>
            </div>
            <div>
                <nav>
                    <ul className="flex gap-4">
                        <li><a href="#">components</a></li>
                        <li><a href="#">template</a></li>
                        <li><a href="#">Contack Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;