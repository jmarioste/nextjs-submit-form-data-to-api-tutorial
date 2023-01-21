import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SubscribePage = () => {
  const router = useRouter();
  const isSuccess = router.query.success;
  useEffect(() => {
    if (isSuccess === "true") {
      alert("You have successfully subscribed to our newsletter");
    }
  }, [isSuccess]);

  return (
    <div className="container mx-auto">
      <h1>Sign up to our newsletter!</h1>
      <form method="POST" action="/api/subscribe">
        <input placeholder="Enter your email" name="email" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SubscribePage;
