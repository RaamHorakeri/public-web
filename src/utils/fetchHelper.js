const defaultHeaders = {
  "Content-Type": "application/json",
};
export const fetchHelper = ({
  url,
  method = "POST",
  body = {},
  headers = {},
}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: { ...defaultHeaders, ...headers },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((err) => {
            reject(new Error(err));
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("API Request Error:", error);
        reject(error);
      });
  });
};
