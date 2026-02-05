import { useState } from "react";
function Names() {
    const names = [
        "Luka",
        "Alex",
        "Mia",
        "Noah",
        "Sofia",
        "Leo",
        "Emma",
        "Oliver",
        "Nina",
        "Ethan"
        ];

        const [addedNames, setAddedNames] = useState([]);

        const handleAddName = (name) => {
            setAddedNames([...addedNames, name]);
        }

        const handleremoveName = (name) => {
            const filteredNames = addedNames.filter((n) => n !== name);
            setAddedNames (filteredNames);
        }
    return (  
        <div>
            <h2>Names List</h2>
            <ul>
                {names.map((name, i) => {
                    return <> <li key={i}>{name}</li> <button onClick={() => handleAddName(name)}>add</button></>;
                })}
            </ul>
            <hr />
            <h2>added list</h2>
            <ul>
                {addedNames.map((name, i) => {
                    return <><li key={i}>{name}</li> 
                            <button onClick={() => handleremoveName(name)}>remove</button></>;
                })}
            </ul>
        </div>
    );
}

export default Names;