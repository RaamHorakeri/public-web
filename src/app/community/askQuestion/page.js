import dynamic from "next/dynamic";

const AskQuestion = dynamic(
  () => import("../askQuestion/_components/AskQuestion"),
  {
    ssr: false,
  },
);

export default AskQuestion;
