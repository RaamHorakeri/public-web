export const getAllQuestions = async (limit = 10, offset = 0, sort = "asc") => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};

export const getTags = async (limit = 10, offset = 0, sort = "asc") => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};

export const getQuestion = async (id) => {
  // 'use client'
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};

export const getQuestionAnswers = async (
  id,
  limit = 10,
  offset = 0,
  sort = "asc"
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${id}/answers?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};

export const getAnswerComments = async (
  answerId,
  limit = 10,
  offset = 0,
  sort = "asc"
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/answers/${answerId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};

export const getQuestionComments = async (
  questionId,
  limit = 10,
  offset = 0,
  sort = "asc"
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/community/questions/${questionId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
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
    }
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
    }
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
    }
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
      body: JSON.stringify({
        body: content,
      }),
    }
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
    }
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
    }
  );
  return response.json();
};