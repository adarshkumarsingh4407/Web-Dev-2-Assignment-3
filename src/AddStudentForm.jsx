import React, { useState } from "react";

// form to add a new student
function AddStudentForm({ addStudent }) {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");

    // handle form submit
    function handleSubmit(e) {
        e.preventDefault();

        // basic validation
        if (name.trim() === "" || score === "") {
            alert("Please fill all fields");
            return;
        }

        addStudent(name, score);

        // clear form fields
        setName("");
        setScore("");
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Student Name"
                value={name}
                onChange={function (e) { setName(e.target.value); }}
            />
            <input
                type="number"
                placeholder="Enter Score"
                value={score}
                onChange={function (e) { setScore(e.target.value); }}
                min="0"
                max="100"
            />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default AddStudentForm;
