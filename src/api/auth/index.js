export const getOAuthUrl = async (oauthProvider, oauthPurpose) => {
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

export const registerUser = async (name, email) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      },
    );

    if (!response.ok) {
      throw new Error("Error registering user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const verifyOtp = async (activation_id, activation_code) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/password/activation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ activation_id, activation_code }),
      },
    );

    if (!response.ok) {
      throw new Error("Error verifying OTP");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const setPasswordApi = async (
  activationId,
  activationCode,
  clientId,
  password,
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/password/reset`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activation_id: activationId,
          activation_code: activationCode,
          client_id: clientId,
          password,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Error setting password");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error setting password:", error);
    throw error;
  }
};

export const loginApi = async (email, password, clientId) => {
  const credentials = "Basic " + btoa(`${email}:${password}`);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: credentials,
        },
        body: JSON.stringify({ client_id: clientId }),
      },
    );

    if (response.status === 401) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const twoFA_Api = async (
  email,
  password,
  clientId,
  activation_id,
  activation_code,
) => {
  const credentials = "Basic " + btoa(`${email}:${password}`);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/login/activation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: credentials,
        },
        body: JSON.stringify({
          activation_id,
          activation_code,
          client_id: clientId,
          expiry_option: "transactional",
        }),
      },
    );

    if (response.status === 401) {
      throw new Error("OTP verification failed, Incorrect OTP");
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (email) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/v1/account/password/forgot`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to validate");
  }
  const data = await response.json();
  return data;
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
