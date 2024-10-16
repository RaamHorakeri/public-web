const defaultHeaders = {
  "Content-Type": "application/json",
};

export const fetchHelper = ({ url, method = "POST", body, headers = {} }) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: { ...defaultHeaders, ...headers },
      ...(method !== "GET" &&
        body !== undefined && { body: JSON.stringify(body) }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((err) => {
            reject(new Error(err || "Something went wrong"));
          });
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return resolve(response);
        }
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("API Request Error:", error);
        reject(error);
      });
  });
};
