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
      accept: "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};

export const downVoteAnswer = (answerId) => {
  return fetchHelper({
    url: `${COMMUNITY_URL}/answers/${answerId}/downvote`,
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};
