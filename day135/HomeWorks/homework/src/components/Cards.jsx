function Cards() {
    return (
        <div className="bg-red-500 w-[900px] h-130 mt-30 flex">
            <div className="w-[40%] bg-[#e38826] h-[100%] p-4">
                <img src="/images/icon-sedans.svg" alt="" />
                <h2 className="text-white font-sans font-black text-4xl mt-4 mb-17">Sedans</h2>
                <p className="text-white">Choose a sedan for its affordability and
                    excellent fuel economy. Ideal for cruising 
                    in the city or on <br /> your next road trip.</p>
                <div className="w-[100%] flex item-center justify-center mt-20">
                    <button className="bg-white p-[7px] w-[150px] rounded-[30px]">Learn more</button>
                </div>
            </div>
            <div className="w-[40%] bg-[#006970] h-[100%] p-4">
                <img src="/images/icon-suvs.svg" alt="" />
                <h2 className="text-white font-sans font-black text-4xl mt-4 mb-17">SUVs</h2>
                <p className="text-white">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures..</p>
                <div className="w-[100%] flex item-center justify-center mt-20">
                    <button className="bg-white p-[7px] w-[150px] rounded-[30px]">Learn more</button>
                </div>

            </div>
            <div className="w-[40%] bg-[#004241] p-4">
                <img src="/images/icon-luxury.svg" alt="" />
                <h2 className="text-white font-sans font-black text-4xl mt-4 mb-17">Luxury</h2>
                <p className="text-white">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style..</p>
                <div className="w-[100%] flex item-center justify-center mt-20">
                    <button className="bg-white p-[7px] w-[150px] rounded-[30px]">Learn more</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;