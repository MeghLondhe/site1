// Students.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    company: ''
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const studentsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setStudents(studentsList);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'users'), formData);
    fetchStudents();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      company: ''
    });
  };

  const handleUpdateStudent = async (id) => {
    const studentRef = doc(db, 'users', id);
    await updateDoc(studentRef, formData);
    fetchStudents();
  };

  const handleDeleteStudent = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    fetchStudents();
  };

  const handleSendMail = (email) => {
    // Trigger email send functionality
    console.log(`Send email to ${email}`);
    // Here you can integrate email sending functionality using an API like SendGrid, Mailgun, etc.
  };

  return (
    <div>
      <h1>Registered Students</h1>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />
        <button type="submit">Add Student</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.country}</td>
              <td>{student.company}</td>
              <td>
                <button onClick={() => handleUpdateStudent(student.id)}>Update</button>
                <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                <button onClick={() => handleSendMail(student.email)}>Send Mail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
