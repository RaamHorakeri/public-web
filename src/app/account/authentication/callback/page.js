"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Spinner from "@/components/spinner";

const AuthCallback = () => {
  const router = useRouter();
  const [error, setError] = useState("");
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
          setError("User already exists. Please Login.");
        }
      }
    };

    handleAuthCallback();
  }, [searchParams, router]);

  return (
    <div className="h-screen mt-52">
      <Spinner />
      {error && (
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
          <p className="text-red-500 text-sm mt-2">{error}</p>
          <button
            onClick={() => router.push("/login")}
            className="bg-[#1C1C1C] text-white h-[42px] px-3 text-[16px] font-bold leading-[21.82px] rounded-[12px]"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthCallback;
