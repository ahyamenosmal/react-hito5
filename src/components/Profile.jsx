import React from "react";

const Profile = () => {
  const email = "usuario@example.com"; 

  return (
    <div className="container mt-5">
        <div className="card-body text-center">
          <h2 className="card-title mb-2">Perfil de Usuario</h2>
          <p className="card-text">Email: {email}</p>
          <button className="btn btn-danger">
            Cerrar sesión
          </button>
        </div>
    </div>
  );
};

export default Profile;