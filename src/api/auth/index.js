import { AUTH_URL } from "@/utils";

export const getOAuthUrl = async (oauthProvider, oauthPurpose) => {
  try {
    const response = await fetch(`${AUTH_URL}/oauth/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oauth_provider: oauthProvider,
        oauth_purpose: oauthPurpose,
      }),
    });

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
    const response = await fetch(`${AUTH_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

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
    const response = await fetch(`${AUTH_URL}/password/activation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ activation_id, activation_code }),
    });

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
    const response = await fetch(`${AUTH_URL}/password/reset`, {
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
    });

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
  // console.log(credentials);

  const response = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: credentials,
    },
    body: JSON.stringify({ client_id: clientId }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  return response.json();
};

export const twoFA_Api = async (
  email,
  password,
  clientId,
  activation_id,
  activation_code,
) => {
  const credentials = "Basic " + btoa(`${email}:${password}`);

  const response = await fetch(`${AUTH_URL}/login/activation`, {
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
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "OTP verification failed");
  }

  return result;
};

export const forgotPassword = async (email) => {
  const response = await fetch(`${AUTH_URL}/password/forgot`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to validate");
  }
  const data = await response.json();
  return data;
};
