"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams.toString());
    const clientId = "123456";
    const callbackUrl = `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/authentication/callback/${clientId}?${queryParams}`;

    console.log(callbackUrl);

    fetch(callbackUrl)
      .then((response) => response.json())
      .then(async (authData) => {
        console.log("Callback API Response:", authData);
        const { data } = authData;

        if (data) {
          router.push(
            `/enter-name?data=${encodeURIComponent(JSON.stringify(data))}`,
          );
        } else {
          console.error("Error: No data found in callback response.");
        }
      })
      .catch((err) =>
        console.error("Error during authentication callback:", err),
      );
  }, [searchParams, router]);

  return (
    <div>
      <h1>Processing Authentication...</h1>
      <p>Please wait while we process your authentication.</p>
    </div>
  );
};

export default AuthCallback;
