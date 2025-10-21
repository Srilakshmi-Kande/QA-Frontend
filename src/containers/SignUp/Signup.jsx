import React, { useState } from "react";
import SignUpView from "../../pages/SignUp/SignUpView";
import { db } from "../../lib/db"; 

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [bio, setBio] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      if (!name || !email || !password) {
        throw new Error("Name, email, and password are required.");
      }
      
      const { data: authData, error: authError } = await db.auth.signUp({
        email,
        password,
      });
      if (authError) throw authError;

      // Step 2: Store extra user details in `profiles` table
      const { error: insertError } = await db.from("profiles").insert([
        {
          id: authData.user.id,
          display_name: name,
          email,
          avatar_url: avatarUrl || null,
          bio: bio || null,
        },
      ]);
      if (insertError) throw insertError;

      // Success
      setSuccessMsg(
        "Signup successful! Please check your email to verify your account."
      );
      alert(
        "Signup successful! Please check your email to verify your account."
      );
      // Clear inputs
      setName("");
      setEmail("");
      setPassword("");
      setAvatarUrl("");
      setBio("");
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMsg(error.message || "Something went wrong during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <SignUpView
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        avatarUrl={avatarUrl}
        setAvatarUrl={setAvatarUrl}
        bio={bio}
        setBio={setBio}
        handleSubmit={handleSubmit}
      />

      {/* Feedback messages */}
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
