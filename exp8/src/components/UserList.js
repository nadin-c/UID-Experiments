// UserList.js
import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div>
            {users.length > 0 ? (
                users.map((user) => (
                    <div key={user._id} className="user-item">
                        <p>{user.name} - {user.email} - {user.phone}</p>
                        <button className="edit" onClick={() => onEdit(user)}>Edit</button>
                        <button className="delete" onClick={() => onDelete(user._id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No users available.</p>
            )}
        </div>
    );
};

export default UserList;
