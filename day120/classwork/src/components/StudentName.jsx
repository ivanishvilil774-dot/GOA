function StudentName(props) {
    return (  
        <ul>
            <li>
                <p>Name: {props.studentsArr.name}</p>
                <p>surname: {props.studentsArr.surname}</p>
            </li>
        </ul>
    );
}

export default StudentName; 