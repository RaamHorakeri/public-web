// import { COMMUNITY_URL, AUTH_TOKEN } from "../../utils";

// export const getAllQuestions = async (
//   limit = 10,
//   offset = 0,
//   sort = "asc",
//   query = "",
// ) => {
//   try {
//     const response = await fetch(
//       `${COMMUNITY_URL}/questions?limit=${limit}&offset=${offset}&sort=${sort}&query=${query}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${AUTH_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//         cache: "no-store",
//       },
//     );
//     if (!response.ok) {
//       throw new Error("Something went wrong");
//     }

//     return response.json();
//   } catch (error) {
//     throw new Error("Failed to fetch questions. " + error.message);
//   }
// };

// export const getTags = async (limit = 10, offset = 0, sort = "asc") => {
//   try {
//     const response = await fetch(
//       `${COMMUNITY_URL}/tags?limit=${limit}&offset=${offset}&sort=${sort}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${AUTH_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       },
//     );
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(
//         `Error ${response.status}: ${errorData.message || "Failed to fetch tags"}`,
//       );
//     }
//     return response.json();
//   } catch (error) {
//     return { error: error.message || "An unknown error occurred" };
//   }
// };

// export const getQuestion = async (id) => {
//   try {
//     const response = await fetch(`${COMMUNITY_URL}/questions/${id}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(`Error: ${errorData.message || "Something went wrong"}`);
//     }

//     return await response.json();
//   } catch (error) {
//     throw new Error("Failed to fetch question: " + error.message);
//   }
// };

// export const getQuestionAnswers = async (
//   id,
//   limit = 10,
//   offset = 0,
//   sort = "asc",
// ) => {
//   const response = await fetch(
//     `${COMMUNITY_URL}/questions/${id}/answers?limit=${limit}&offset=${offset}&sort=${sort}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   return response.json();
// };

// export const getAnswerComments = async (
//   answerId,
//   limit = 10,
//   offset = 0,
//   sort = "asc",
// ) => {
//   const response = await fetch(
//     `${COMMUNITY_URL}/answers/${answerId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   return response.json();
// };

// export const getQuestionComments = async (
//   questionId,
//   limit = 10,
//   offset = 0,
//   sort = "asc",
// ) => {
//   const response = await fetch(
//     `${COMMUNITY_URL}/questions/${questionId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   return response.json();
// };

// export const postAnswerComment = async (content, answerId) => {
//   const response = await fetch(
//     `${COMMUNITY_URL}/answers/${answerId}/comments`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: content,
//       }),
//     },
//   );
//   return response;
// };

// export const postQuestionComment = async (content, questionId) => {
//   const response = await fetch(
//     `${COMMUNITY_URL}/questions/${questionId}/comments`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: content,
//       }),
//     },
//   );
//   return response;
// };

// export const postAnswer = async (content, questionId) => {
//   const response = await fetch(
//     `${COMMUNITY_URL}/questions/${questionId}/answers`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: content,
//       }),
//     },
//   );
//   return response;
// };

// export const postQuestion = async (content) => {
//   const response = await fetch(`${COMMUNITY_URL}/questions`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${AUTH_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(content),
//   });
//   return response;
// };

// export const upVoteAnswer = async (answerId) => {
//   const response = await fetch(`${COMMUNITY_URL}/answers/${answerId}/upvote`, {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${AUTH_TOKEN}`,
//     },
//   });
//   return response.json();
// };
// export const downVoteAnswer = async (answerId) => {
//   const response = await fetch(
//     `${COMMUNITY_URL}/answers/${answerId}/downvote`,
//     {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${AUTH_TOKEN}`,
//       },
//     },
//   );
//   return response.json();
// };
import { fetchHelper } from "@/utils/fetchHelper";
import { COMMUNITY_URL, AUTH_TOKEN } from "@/utils";

export const getAllQuestions = (
  limit = 10,
  offset = 0,
  sort = "asc",
  query = "",
) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/questions?limit=${limit}&offset=${offset}&sort=${sort}&query=${query}`,
    method: "GET",
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const getTags = (limit = 10, offset = 0, sort = "asc") => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/tags?limit=${limit}&offset=${offset}&sort=${sort}`,
    method: "GET",
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const getQuestion = (id) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/questions/${id}`,
    method: "GET",
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const getQuestionAnswers = (
  id,
  limit = 10,
  offset = 0,
  sort = "asc",
) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/questions/${id}/answers?limit=${limit}&offset=${offset}&sort=${sort}`,
    method: "GET",
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const getAnswerComments = (
  answerId,
  limit = 10,
  offset = 0,
  sort = "asc",
) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/answers/${answerId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
    method: "GET",
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const getQuestionComments = (
  questionId,
  limit = 10,
  offset = 0,
  sort = "asc",
) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/questions/${questionId}/comments?limit=${limit}&offset=${offset}&sort=${sort}`,
    method: "GET",
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const postAnswerComment = (content, answerId) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/answers/${answerId}/comments`,
    method: "POST",
    body: { body: content },
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const postQuestionComment = (content, questionId) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/questions/${questionId}/comments`,
    method: "POST",
    body: { body: content },
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const postAnswer = (content, questionId) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/questions/${questionId}/answers`,
    method: "POST",
    body: { body: content },
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const postQuestion = (content) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/questions`,
    method: "POST",
    body: content,
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  });
};

export const upVoteAnswer = (answerId) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/answers/${answerId}/upvote`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      accept: "application/json",
    },
  });
};

export const downVoteAnswer = (answerId) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/answers/${answerId}/downvote`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      accept: "application/json",
    },
  });
};
