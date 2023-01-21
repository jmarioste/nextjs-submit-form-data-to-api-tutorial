import React, { useState } from "react";
const SubscribePage = () => {
  // 👇track form state
  const [email, setEmail] = useState("");
  // 👇state to show result after submitting
  const [result, setResult] = useState<any>();
  // 👇 submit handler
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    // 👇 encode the data to application/x-www-form-urlencoded type
    const formData = new URLSearchParams();
    formData.append("email", email);

    // 👇 call backend endpoint using fetch api
    fetch("/api/subscribe", {
      body: formData.toString(),
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }).then(async (result) => {
      // 👇 modify the state to show the result
      setResult(await result.json());
    });
  };

  return (
    <div className="container mx-auto">
      <h1>Sign up to our newsletter!</h1>
      {/* 👇 wire-up the handleSubmit handler */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your email"
          name="email"
          // 👇 wire-up the controlled state
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {/* show the data returned by the api */}
      Result
      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
};
export default SubscribePage;
