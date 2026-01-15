function Card() {
    return (
        <div className="bg-[#fff] w-[400px] flex items-center rounded-[7px] justify-bettween flex-col h-[600px] ">
            <div className="">
                <img src="/images/illustration-hero.svg" className="rounded-[7px]"/>
            </div>
            <div className="p-[4px] flex item-center justify-center flex-col">
                    <h1 className="flex item-center justify-center p-2 font-bold text-3xl mt-[10px">Order Summary</h1>
                <div className="p-5">
                    <p className="text-center pb-6 text-gray-500"> You can now listen to millions of songs, audiobooks, and podcasts on any 
                        device anywhere you like!
                    </p>
                </div>
                <div className="bg-[#f8f9fe] pl-2 pr-2 h-[80px] rounded-[10px] flex items-center justify-between p-[1px] ml-8 mr-8 rounded-[6px] ">
                    <img src="/images/icon-music.svg" alt="" />
                    <div className="mr-22">
                        <p className="font-bold">Annual Plan</p>
                        <p>$59.99/year</p>
                    </div>
                    <div className="mr-1 text-#3829e0" >
                        Change
                    </div>
                </div>
                <div className="flex item-center justify-center flex-col mt-7">
                    <button className="ml-10  mb-3  bg-[#3829e0] w-[80%] text-white h-10 rounded-[115px]">Proceed to Payment</button>
                    <p className="text-center">Cancel Order</p>
                </div>
            </div>
        </div>
    );
}

export default Card;