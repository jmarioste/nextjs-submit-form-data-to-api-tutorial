import React, { useState } from "react";
const SubscribePage = () => {
  // πtrack form state
  const [email, setEmail] = useState("");
  // πstate to show result after submitting
  const [result, setResult] = useState<any>();
  // π submit handler
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    // π encode the data to application/x-www-form-urlencoded type
    const formData = new URLSearchParams();
    formData.append("email", email);

    // π call backend endpoint using fetch api
    fetch("/api/subscribe", {
      body: formData.toString(),
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }).then(async (result) => {
      // π modify the state to show the result
      setResult(await result.json());
    });
  };

  return (
    <div className="container mx-auto max-w-sm">
      <h1 className="text-3xl my-4">Sign up to our newsletter!</h1>
      {/* π wire-up the handleSubmit handler */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch"
      >
        <input
          placeholder="Enter your email"
          name="email"
          // π wire-up the controlled state
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-"
        />
        <button type="submit" className="btn btn-accent">
          Sign Up
        </button>
        <div className="card shadow-xl bg-base-100">
          <div className="card-body">
            <p className="card-title">Result</p>
            <pre>{JSON.stringify(result, null, 4)}</pre>
          </div>
        </div>
      </form>
      {/* show the data returned by the api */}
    </div>
  );
};
export default SubscribePage;
