import Image from "next/image";

const ideas = [
  {
    id: 1,
    icon: "/images/helpPage/bulb3.svg",
    head: "Come up with concepts",
    body: "for a retro style arcade game",
  },
  {
    id: 2,
    icon: "/images/helpPage/bulb.svg",
    head: "Come up with concepts",
    body: "for a retro style arcade game",
  },
  {
    id: 3,
    icon: "/images/helpPage/bulb1.svg",
    head: "Come up with concepts",
    body: "for a retro style arcade game",
  },
  {
    id: 4,
    icon: "/images/helpPage/bulb2.svg",
    head: "Come up with concepts",
    body: "for a retro style arcade game",
  },
];

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [firstMessageSent, setFirstMessageSent] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const userMessage = { id: Date.now(), text: newMessage, type: "sent" };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    setFirstMessageSent(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now(),
        text: "Thank you for your message!",
        type: "received",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <div className="flex flex-col justify-between border-[2px] w-[70%] mx-auto mt-20 border-[#D2D2D2] h-[170vh] mb-20">
        <div className="flex-1 overflow-y-auto p-4 ">
          {!firstMessageSent && (
            <div className="flex flex-col items-center justify-center gap-4 m-5">
              <Image
                alt="chatIcon"
                src="/images/chat.svg"
                width={350}
                height={350}
              />
              <p className="text-[36px] font-bold leading-[42px] text-[#1C1C1C]">
                Hello, AI Assistance is here to help.
              </p>
              <p className="text-[16px] leading-[21.82px] font-bold text-[#656565] text-center">
                Choose a prompt below or write your own question
                <br />
                to start chatting with Ai
              </p>
              <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                  {ideas.map((idea, index) => (
                    <div
                      key={index}
                      className="w-[385px] h-[152px] rounded-[30px] border-[2px] border-[#D2D2D2] p-6 flex flex-col gap-2"
                    >
                      <Image
                        alt="icon"
                        src={idea.icon}
                        width={32}
                        height={32}
                      />
                      <h2 className="text-[16px] font-bold leading-[21.82px]">
                        {idea.head}
                      </h2>
                      <p className="text-[16px] font-normal leading-[21.82px] text-[#494949]">
                        {idea.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {firstMessageSent && (
            <div className="space-y-4">
              <Image
                src="/images/helpPage/ai.svg"
                alt="replyIcon"
                width={60}
                height={60}
                className="mx-auto mt-[10%] mb-[10%]"
              />

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex items-start gap-3">
                    {message.type !== "sent" && (
                      <Image
                        src="/images/helpPage/ai.svg"
                        alt="replyIcon"
                        width={30}
                        height={30}
                      />
                    )}
                    <div
                      className={`rounded-lg p-5 inline-block max-w-[600px] whitespace-normal break-words overflow-hidden text-wrap ${
                        message.type === "sent"
                          ? "bg-[#ECECEC] text-[#1C1C1C] text-[16px] font-normal leading-[21.82px]"
                          : "bg-inherit text-black text-[16px] font-normal leading-[21.82px]"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={sendMessage}
          className="relative flex items-center justify-center p-6"
        >
          <div className="relative w-[70%] mb-[7%]">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Send a message..."
              className="p-[24px] rounded-[30px] text-[#1C1C1C] h-[96px] bg-[#ECECEC] w-full resize-none outline-none"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
            >
              <Image
                src="/images/send.svg"
                alt="sendIcon"
                width={48}
                height={48}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
