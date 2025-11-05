// 1 

const random = Math.random();

const element = (
    <ul>
        {
            random > 0.5 ? <li>hello</li> : <li>goodbye</li>
        }
    </ul>
);

// 2
const age = 17;
const showHobbies = true;

const hobbies = ["coding", "gaming", "training"];

const element1 = (
    <div>
        <h1>{age >= 18 ? "You are an adult" : "You are a teenager"}</h1>

        {showHobbies && (
            <ul>
                {hobbies.map((hobby, i) => (
                <li key={i}>{hobby}</li>
                ))}
            </ul>
        )}
    </div>
);
