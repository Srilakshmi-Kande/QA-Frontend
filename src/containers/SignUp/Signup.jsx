import React, { useState } from "react";
import SignUpView from "../../pages/SignUp/SignUpView";
import { db } from "../../lib/db"; 

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      if (!name || !email || !password || !role) {
        throw new Error("Name, email,password, and role are required.");
      }
      
      const { data: authData, error: authError } = await db.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      const { error: insertError } = await db.from("profiles").insert([
        {
          id: authData.user.id,
          display_name: name,
          email,
          role
        },
      ]);
      if (insertError) throw insertError;

      setSuccessMsg(
        "Signup successful! Please check your email to verify your account."
      );
      alert(
        "Signup successful! Please check your email to verify your account."
      );
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMsg(error.message || "Something went wrong during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[300px] sm:w-[400px] mx-auto mt-10 p-6 rounded-lg shadow-md backdrop-blur-sm">
      <SignUpView
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        role={role}
        setRole={setRole}
        handleSubmit={handleSubmit}
      />

      {loading && (
        <p className="text-center text-gray-500 mt-4">
          Creating your account...
        </p>
      )}
      {errorMsg && <p className="text-center text-red-600 mt-4">{errorMsg}</p>}
      {successMsg && (
        <p className="text-center text-green-600 mt-4">{successMsg}</p>
      )}
    </div>
  );
};

export default Signup;
