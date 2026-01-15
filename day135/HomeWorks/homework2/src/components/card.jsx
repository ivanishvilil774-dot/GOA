function Card() {
    return (
        <div className="bg-white w-[500px] rounded-[15px] overflow-hidden">
            <div>
                <img src="/images/bg-pattern-card.svg" className="w-full" alt="" />
                <img src="/images/image-victor.jpg" className="rounded-[50%] absolute top-79 left-[46.5%]" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col gap-2 mt-15">
                <div className="flex items-center justify-center gap-2">
                    <h1 className="font-bold">Victor Crest</h1>
                    <p className="text-gray-400">26</p>
                </div>
                    <p className="text-gray-400 mb-9">London</p>
            </div>
            <hr />
            <div className="flex items-center justify-center gap-20 p-4">
                <div className="text-center font-bold">
                    <p>80K</p>
                    <p>Followers</p>
                </div>
                <div className="text-center font-bold">
                    <p>803K</p>
                    <p>Likes</p>
                </div>
                <div className="text-center font-bold">
                    <p>1.4k</p>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    );
}

export default Card;