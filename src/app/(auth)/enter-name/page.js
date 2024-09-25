"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const EnterName = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dataParam = queryParams.get("data");
    if (dataParam) {
      setData(JSON.parse(decodeURIComponent(dataParam)));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !data) return;

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

    const registerData = await registerResponse.json();
    console.log("Register API Response:", registerData);

    const { access_token, expires_at } = registerData;

    if (access_token) {
      const expirationDate = new Date(expires_at);

      Cookies.set("accessToken", access_token, { expires: expirationDate });
      console.log("Access token:", access_token);

      // router.push('/dashboard');
    }
  };

  return (
    <div>
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default EnterName;
