import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function AIChat() {

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    // Auto scroll to latest message
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat, loading]);

    // Disable background scroll when chat open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const send = async () => {

        if (!msg.trim()) return;

        const userMessage = msg;

        setChat(prev => [...prev, { role: "user", text: userMessage }]);
        setMsg("");
        setLoading(true);

        try {

            const res = await axios.post("http://localhost:8000/chat", {
                message: userMessage
            });

            setChat(prev => [
                ...prev,
                { role: "ai", text: res.data.reply }
            ]);

        } catch (err) {

            setChat(prev => [
                ...prev,
                { role: "ai", text: "Server error. Try again." }
            ]);

        }

        setLoading(false);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-4 cursor-pointer bg-[#9c33fe] hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-xl transition z-50"
            >
                Chat with PAI
            </button>

            {/* Chat Window */}

            {
                open && (
                    <div className="fixed bottom-24 px-3 md:px-0 md:right-6 w-full md:w-[360px] h-[500px] xl:w-[400px] bg-[#0f0f0f] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[100]">

                        {/* Header */}

                        <div className="bg-[#9735f1] text-white p-4 flex justify-between items-center font-bold">
                            <p className="font-bold">Pritam AI</p>
                            <button onClick={() => setOpen(false)} className="cursor-pointer">
                                ✕
                            </button>
                        </div>

                        {/* Messages */}

                        <div className="flex-1 overflow-y-auto overscroll-y-contain p-4 flex flex-col gap-3">

                            {
                                chat.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-6  space-y-3 w-full h-full">

                                        <h1 className="text-white text-lg md:text-xl font-semibold">
                                            Hello! I'm Pritam's AI Assistant
                                        </h1>

                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Ask me anything about Pritam - from his projects and skills to tips on coding, internships, and more.
                                        </p>

                                    </div>
                                )
                            }

                            {chat.map((c, i) => (
                                <div
                                    key={i}
                                    className={`flex ${c.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${c.role === "user"
                                            ? "bg-purple-600 text-white rounded-br-sm"
                                            : "bg-[#2a2a2a] text-gray-200 rounded-bl-sm"
                                            }`}
                                    >
                                        {c.text}
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-2xl text-sm">
                                        Thinking...
                                    </div>
                                </div>
                            )}

                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}

                        <div className="flex border-t border-gray-700 bg-[#1a1a1a]">

                            <input
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                placeholder="Ask something..."
                                className="flex-1 px-3 py-3 outline-none text-sm bg-transparent text-white"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") send();
                                }}
                            />

                            <button
                                onClick={send}
                                className="bg-purple-600 text-white px-4"
                            >
                                Send
                            </button>

                        </div>

                    </div>
                )}
        </>
    );
}