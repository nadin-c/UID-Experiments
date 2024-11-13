// UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, user }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
        } else {
            setName('');
            setEmail('');
            setPhone('');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit" className="submit">{user ? 'Update' : 'Submit'}</button>
        </form>
    );
};

export default UserForm;
