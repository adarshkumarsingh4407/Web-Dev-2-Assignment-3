import React from "react";

// single row for each student - reusable component
function StudentRow({ student, updateScore, deleteStudent }) {
    // determine pass or fail
    const status = student.score >= 40 ? "Pass" : "Fail";
    const statusClass = student.score >= 40 ? "pass" : "fail";

    // handle score input change
    function handleChange(e) {
        updateScore(student.id, e.target.value);
    }

    // handle delete button click
    function handleDelete() {
        deleteStudent(student.id);
    }

    return (
        <tr>
            <td>{student.name}</td>
            <td>
                <input
                    type="number"
                    value={student.score}
                    onChange={handleChange}
                    min="0"
                    max="100"
                />
            </td>
            <td className={statusClass}>{status}</td>
            <td>
                <button className="delete-btn" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default StudentRow;
