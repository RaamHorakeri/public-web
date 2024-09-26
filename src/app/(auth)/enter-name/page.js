"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const EnterName = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const dataParam = queryParams.get("data");
      if (dataParam) {
        setData(JSON.parse(decodeURIComponent(dataParam)));
      }
    } catch (error) {
      console.error("Error parsing data parameter:", error);
      setError(
        "An error occurred while processing your data. Please try again.",
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !data) {
      setError("Please enter your name and ensure the data is valid.");
      return;
    }

    try {
      const registerResponse = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/oauth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            data,
          }),
        },
      );

      if (!registerResponse.ok) {
        throw new Error(
          `Error during registration: ${registerResponse.status}`,
        );
      }

      const registerData = await registerResponse.json();
      const { access_token, expires_at } = registerData;

      if (access_token) {
        const expirationDate = new Date(expires_at);
        Cookies.set("access_token", access_token, { expires: expirationDate });

        router.push("/");
      } else {
        throw new Error("Error: Access token not found in response.");
      }
    } catch (error) {
      console.error("Error during name submission:", error);
      setError(
        "An error occurred while submitting your name. Please try again.",
      );
    }
  };

  return (
    <div>
      <h1>Enter Your Name</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="border-[2px]"
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default EnterName;
