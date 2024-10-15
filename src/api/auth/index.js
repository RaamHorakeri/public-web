import { fetchHelper } from "@/utils/fetchHelper";
import { AUTH_URL } from "@/utils";

export const getOAuthUrl = (oauthProvider, oauthPurpose) => {
  return fetchHelper({
    url: `${AUTH_URL}/oauth/url`,
    method: "POST",
    body: {
      oauth_provider: oauthProvider,
      oauth_purpose: oauthPurpose,
    },
  });
};

export const registerUser = (name, email) => {
  return fetchHelper({
    url: `${AUTH_URL}/register`,
    method: "POST",
    body: { name, email },
  });
};

export const verifyOtp = (activation_id, activation_code) => {
  return fetchHelper({
    url: `${AUTH_URL}/password/activation`,
    method: "POST",
    body: {
      activation_id,
      activation_code,
    },
  });
};

export const setPasswordApi = (
  activationId,
  activationCode,
  clientId,
  password,
) => {
  return fetchHelper({
    url: `${AUTH_URL}/password/reset`,
    method: "POST",
    body: {
      activation_id: activationId,
      activation_code: activationCode,
      client_id: clientId,
      password,
    },
  });
};

export const loginApi = (email, password, clientId) => {
  const credentials = "Basic " + btoa(`${email}:${password}`);

  return fetchHelper({
    url: `${AUTH_URL}/login`,
    method: "POST",
    body: { client_id: clientId },
    headers: { Authorization: credentials },
  });
};

export const twoFA_Api = (
  email,
  password,
  clientId,
  activation_id,
  activation_code,
) => {
  const credentials = "Basic " + btoa(`${email}:${password}`);

  return fetchHelper({
    url: `${AUTH_URL}/api/v1/account/login/activation`,
    method: "POST",
    body: {
      activation_id,
      activation_code,
      client_id: clientId,
      expiry_option: "transactional",
    },
    headers: { Authorization: credentials },
  });
};

export const forgotPassword = (email) => {
  return fetchHelper({
    url: `${AUTH_URL}/password/forgot`,
    method: "POST",
    body: { email },
  });
};
