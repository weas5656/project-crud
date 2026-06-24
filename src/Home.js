// Filename - Home.js
import React, { useState } from "react"; // 🌟 เพิ่ม useState เข้ามา
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    let history = useNavigate();

    
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("local_array");
        return saved ? JSON.parse(saved) : array;
    });

   
    function setID(id, name, age, Nickname) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Nickname", Nickname);
    }

  
    function deleted(id) {
        const newUsers = users.filter((item) => item.id !== id);
        
      
        setUsers(newUsers);
        localStorage.setItem("local_array", JSON.stringify(newUsers));

        history("/");
    }

    return (
        <div style={{ margin: "2rem" }}>
            <h1 className="text-center mb-4">User Management</h1>
            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Nickname</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
    
                    {users.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Nickname}</td>
                                <td>
                                    <Link to={`/edit`}>
                                        <Button
                                            onClick={() => setID(item.id, item.Name, item.Age, item.Nickname)}
                                            variant="info"
                                            className="me-2"
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        onClick={() => deleted(item.id)}
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="d-grid gap-2 mt-4">
                <Link to="/create">
                    <Button variant="success" size="lg">
                        Create New User
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;