import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function AIChat() {

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat, loading]);

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
                className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-xl transition z-50"
            >
                Chat with PAI
            </button>

            {/* Chat Window */}

            {open && (
                <div className="fixed bottom-24 right-6 w-[360px] h-[500px] xl:w-[400px] bg-[#0f0f0f] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-100">

                    {/* Header */}

                    <div className="bg-purple-600 text-white p-4 flex justify-between items-center font-semibold">
                        Pritam AI
                        <button onClick={() => setOpen(false)}>✕</button>
                    </div>

                    {/* Messages */}

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">

                        {chat.length === 0 && (
                            <p className="text-gray-400 text-sm">
                                Ask anything about Pritam 👋
                            </p>
                        )}

                        {chat.map((c, i) => (
                            <div
                                key={i}
                                className={`flex ${c.role === "user" ? "justify-end" : "justify-start"
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
                            className="flex-1 px-3 py-2 outline-none text-sm bg-transparent text-white"
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