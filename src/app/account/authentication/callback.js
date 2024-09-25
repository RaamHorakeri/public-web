// pages/auth/callback.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { redirectedUrl } = router.query;

    if (redirectedUrl) {
      console.log("Redirected URL:", redirectedUrl);
    } else {
      console.error("No redirected URL found.");
    }
  }, [router.query]);

  return (
    <div>
      <h1>Authentication Callback</h1>
      <p>
        If you are seeing this page, you have successfully authenticated. Check
        the console for the redirected URL.
      </p>
    </div>
  );
};

export default CallbackPage;
