import React from "react";
import StudentRow from "./StudentRow";

// renders the full table of students
function StudentTable({ students, updateScore, deleteStudent }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(function (student) {
                        return (
                            <StudentRow
                                key={student.id}
                                student={student}
                                updateScore={updateScore}
                                deleteStudent={deleteStudent}
                            />
                        );
                    })}
                </tbody>
            </table>

            {/* show message if no students */}
            {students.length === 0 && (
                <p className="no-students">No students added yet.</p>
            )}
        </div>
    );
}

export default StudentTable;
