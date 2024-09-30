"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Spinner from "@/components/spinner";

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const clientId = Cookies.get("clientId");

      const queryParams = new URLSearchParams(searchParams.toString());
      const callbackUrl = `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/authentication/callback/${clientId}?${queryParams}`;

      try {
        const response = await fetch(callbackUrl);

        if (!response.ok) {
          throw new Error(`Error fetching callback: ${response.status}`);
        }

        const authData = await response.json();

        const { data } = authData;

        if (authData.action === "login") {
          const { access_token, expires_at } = data;

          if (access_token) {
            const expirationDate = new Date(expires_at);
            Cookies.set("access_token", access_token, {
              expires: expirationDate,
            });

            router.push("/");
          } else {
            throw new Error("Error: Access token not found in response.");
          }
        } else {
          if (data) {
            router.push(
              `/enter-name?data=${encodeURIComponent(JSON.stringify(data))}`,
            );
          } else {
            throw new Error("Error: No data found in callback response.");
          }
        }
      } catch (err) {
        if (err.message.includes("409")) {
          alert("User already exists. Please Login.");
          router.push("/login");
        }
      }
    };

    handleAuthCallback();
  }, [searchParams, router]);

  return (
    <div className="h-screen mt-52">
      <Spinner />
    </div>
  );
};

export default AuthCallback;
