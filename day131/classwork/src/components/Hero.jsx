function Hero() {
    return (  
        <div className="bg-[url('https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhardgross-1287145.jpg&fm=jpg')] bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center items-center bg-no-repeat  bg-no-repeat">
            <h1 className="text-white text-4xl font-bold">Welcome to our webiste</h1>
            <p className="text-white text-lg">We are a company that provides amazing services</p>
            <button className="bg-red-400 p-3 mt-4 text-white">Get Started</button>
        </div>
    );
}

export default Hero;