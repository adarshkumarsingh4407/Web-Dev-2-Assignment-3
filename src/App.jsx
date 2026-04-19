import React, { useState } from "react";
import Header from "./Header";
import StudentTable from "./StudentTable";
import AddStudentForm from "./AddStudentForm";

function App() {
    // store all students in state
    const [students, setStudents] = useState([
        { id: 1, name: "Rahul", score: 75 },
        { id: 2, name: "Priya", score: 35 },
        { id: 3, name: "Amit", score: 60 },
    ]);

    // update score of a student by id
    function updateScore(id, newScore) {
        const updated = students.map(function (student) {
            if (student.id === id) {
                return { ...student, score: Number(newScore) };
            }
            return student;
        });
        setStudents(updated);
    }

    // delete a student by id
    function deleteStudent(id) {
        const filtered = students.filter(function (student) {
            return student.id !== id;
        });
        setStudents(filtered);
    }

    // add a new student
    function addStudent(name, score) {
        const newStudent = {
            id: Date.now(),
            name: name,
            score: Number(score),
        };
        setStudents([...students, newStudent]);
    }

    return (
        <div className="app-container">
            <Header />
            <AddStudentForm addStudent={addStudent} />
            <StudentTable
                students={students}
                updateScore={updateScore}
                deleteStudent={deleteStudent}
            />
        </div>
    );
}

export default App;
