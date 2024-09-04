export const signUp = async (formData) => {
  const response = await fetch(
    "http://localhost:3050/api/v1/account/register",
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
    "http://localhost:3050/api/v1/account/register/activation",
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
  const response = await fetch(
    "http://localhost:3050/api/v1/account/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );
  return response;
};

export const twoFaAuthenticate = async (activationId, code) => {
  const response = await fetch(
    "http://localhost:3050/api/v1/account/authenticate/2fa",
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

export const getAllQuestions = async (limit = 10, offset = 0, sort = "asc") => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.json();
};

export const getTags = async (limit = 10, offset = 0, sort = "asc") => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/community/tags?limit=${limit}&offset=${offset}&sort=${sort}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error ${response.status}: ${errorData.message || "Failed to fetch tags"}`,
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching tags:", error);
    return { error: error.message || "An unknown error occurred" };
  }
};

export const getQuestion = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.json();
};

export const getQuestionAnswers = async (
  id,
  limit = 10,
  offset = 0,
  sort = "asc",
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${id}/answers?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.json();
};

export const getAnswerComments = async (
  answerId,
  limit = 10,
  offset = 0,
  sort = "asc",
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/answers/${answerId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.json();
};

export const getQuestionComments = async (
  questionId,
  limit = 10,
  offset = 0,
  sort = "asc",
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${questionId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.json();
};

export const postAnswerComment = async (content, answerId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/answers/${answerId}/comments`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: content,
      }),
    },
  );
  return response;
};

export const postQuestionComment = async (content, questionId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${questionId}/comments`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: content,
      }),
    },
  );
  return response;
};

export const postAnswer = async (content, questionId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${questionId}/answers`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: content,
      }),
    },
  );
  return response;
};

export const postQuestion = async (content) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    },
  );
  return response;
};

export const upVoteAnswer = async (answerId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/answers/${answerId}/upvote`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
      },
    },
  );
  return response.json();
};
export const downVoteAnswer = async (answerId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/answers/${answerId}/downvote`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
      },
    },
  );
  return response.json();
};
