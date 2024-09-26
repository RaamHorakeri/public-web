export const getOAuthUrl = async (oauthProvider, oauthPurpose = "signup") => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/oauth/url`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oauth_provider: oauthProvider,
          oauth_purpose: oauthPurpose,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Error fetching OAuth URL: ${response.status}`);
    }

    const data = await response.json();

    if (data?.oauth_url) {
      return data.oauth_url;
    } else {
      throw new Error("Error: Could not get OAuth URL");
    }
  } catch (error) {
    console.error(`Error occurred during ${oauthProvider} Sign-Up:`, error);
    throw error;
  }
};

export const signUp = async (formData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_API_URL}/account/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    },
  );
  return response;
};
export const signUpTwoFa = async (activationId, code) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_API_URL}/account/register/activation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activation_id: activationId,
        activation_code: code,
      }),
    },
  );
  return response;
};

export const authenticate = async (email, password) => {
  const basicAuth = "Basic " + btoa(`${email}:${password}`);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_API_URL}/account/authenticate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuth,
      },
      body: JSON.stringify({ email, password }),
    },
  );
  return response;
};

export const twoFaAuthenticate = async (activationId, code) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_API_URL}/account/authenticate/2fa`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activation_id: activationId,
        activation_code: code,
        session_validity: true,
      }),
    },
  );
  return response;
};
