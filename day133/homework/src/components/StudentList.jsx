import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext";

function StudentList() {
    const students = useContext(StudentsContext);
    return (
        <>
            <h1>Student List</h1>
            <ul>
                {
                    students.map((student, index) => {
                        return <li key={index}>{student}</li>
                    })
                }
            </ul>
        </>
    );
}

export default StudentList;