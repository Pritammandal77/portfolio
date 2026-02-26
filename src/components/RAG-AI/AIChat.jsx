// import { useState, useRef, useEffect } from "react";
// import axios from "axios"
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { Copy, Check } from "lucide-react";

// export default function AIChat() {

//     const [open, setOpen] = useState(false);
//     const [msg, setMsg] = useState("");
//     const [chat, setChat] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [copiedIndex, setCopiedIndex] = useState(null);

//     const bottomRef = useRef(null);

//     // Auto scroll to latest message
//     useEffect(() => {
//         bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [chat, loading]);

//     // Disable background scroll when chat open
//     useEffect(() => {
//         if (open) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "auto";
//         }

//         return () => {
//             document.body.style.overflow = "auto";
//         };
//     }, [open]);

//     const send = async () => {

//         if (!msg.trim()) return;

//         const userMessage = msg;

//         setChat(prev => [...prev, { role: "user", text: userMessage }]);
//         setMsg("");
//         setLoading(true);

//         try {

//             const res = await axios.post("http://localhost:8000/chat", {
//                 message: userMessage
//             });

//             console.log(res)

//             setChat(prev => [
//                 ...prev,
//                 { role: "ai", text: res.data.reply }
//             ]);

//         } catch (err) {

//             setChat(prev => [
//                 ...prev,
//                 { role: "ai", text: "Server error. Try again." }
//             ]);

//         }

//         setLoading(false);
//     };

//     return (
//         <>
//             {/* Floating Button */}
//             <button
//                 onClick={() => setOpen(!open)}
//                 className="fixed bottom-6 right-4 cursor-pointer bg-[#9c33fe] hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-xl transition z-50"
//             >
//                 Chat with PAI
//             </button>

//             {/* Chat Window */}

//             {
//                 open && (
//                     <div className="fixed bottom-24 px-3 md:px-0 md:right-6 w-full md:w-[360px] h-[500px] xl:w-[400px] bg-[#0f0f0f] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[100]"
//                         onWheel={(e) => e.stopPropagation()}
//                     >

//                         {/* Header */}

//                         <div className="bg-[#9735f1] text-white p-4 flex justify-between items-center font-bold">
//                             <p className="font-bold">Pritam AI</p>
//                             <button onClick={() => setOpen(false)} className="cursor-pointer">
//                                 ✕
//                             </button>
//                         </div>

//                         {/* Messages */}

//                         <div className="flex-1 overflow-y-auto overscroll-y-contain p-4 flex flex-col gap-3">

//                             {
//                                 chat.length === 0 && (
//                                     <div className="flex flex-col items-center justify-center p-6  space-y-3 w-full h-full">

//                                         <h1 className="text-white text-lg md:text-xl font-semibold">
//                                             Hello! I'm Pritam's AI Assistant
//                                         </h1>

//                                         <p className="text-gray-300 text-sm leading-relaxed">
//                                             Ask me anything about Pritam - from his projects and skills to tips on coding, internships, and more.
//                                         </p>

//                                     </div>
//                                 )
//                             }

//                             {chat.map((c, i) => (
//                                 <div
//                                     key={i}
//                                     className={`flex  ${c.role === "user"
//                                         ? "justify-end"
//                                         : "justify-start"
//                                         }`}
//                                 >
//                                     {/* <div
//                                         className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${c.role === "user"
//                                             ? "bg-purple-600 text-white rounded-br-sm"
//                                             : "bg-[#2a2a2a] text-gray-200 rounded-bl-sm"
//                                             }`}
//                                     >
//                                         {c.text}
//                                     </div> */}

//                                     <div
//                                         className={`px-4 py-2 rounded-2xl text-sm whitespace-pre-line prose prose-invert max-w-none ${c.role === "user"
//                                             ? "bg-purple-600 text-white rounded-br-sm"
//                                             : "bg-[#2a2a2a] text-gray-200 rounded-bl-sm"
//                                             }`}
//                                     >
//                                         <ReactMarkdown
//                                             remarkPlugins={[remarkGfm]}
//                                             components={{
//                                                 h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
//                                                 h2: ({ children }) => <h2 className="text-md font-semibold mb-2">{children}</h2>,
//                                                 p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
//                                                 strong: ({ children }) => <strong className="text-white">{children}</strong>,

//                                                 thead: () => null, // header hide kar diya

//                                                 tbody: ({ children }) => (
//                                                     <div className="space-y-2">
//                                                         {children}
//                                                     </div>
//                                                 ),

//                                                 tr: ({ children }) => (
//                                                     <div className="bg-zinc-800/40 rounded-lg p-3 text-sm">
//                                                         {children}
//                                                     </div>
//                                                 ),

//                                                 th: () => null, // header cells ignore

//                                                 td: ({ children }) => (
//                                                     <div className="text-zinc-300 leading-relaxed">
//                                                         • {children}
//                                                     </div>
//                                                 ),
//                                             }}
//                                         >
//                                             {c.text}
//                                         </ReactMarkdown>
//                                     </div>


//                                 </div>
//                             ))}

//                             {loading && (
//                                 <div className="flex justify-start">
//                                     <div className="bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-2xl text-sm">
//                                         Thinking...
//                                     </div>
//                                 </div>
//                             )}

//                             <div ref={bottomRef} />
//                         </div>

//                         {/* Input */}

//                         <div className="flex border-t border-gray-700 bg-[#1a1a1a]">

//                             <input
//                                 value={msg}
//                                 onChange={(e) => setMsg(e.target.value)}
//                                 placeholder="Ask something..."
//                                 className="flex-1 px-3 py-3 outline-none text-sm bg-transparent text-white"
//                                 onKeyDown={(e) => {
//                                     if (e.key === "Enter") send();
//                                 }}
//                             />

//                             <button
//                                 onClick={send}
//                                 className="bg-purple-600 text-white px-4"
//                             >
//                                 Send
//                             </button>

//                         </div>

//                     </div>
//                 )}
//         </>
//     );
// }




import { useState, useRef, useEffect } from "react";
import axios from "axios"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

export default function AIChat() {

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);

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

            console.log(res)

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
                    <div className="fixed bottom-24 px-3 md:px-0 md:right-6 w-full md:w-[360px] h-[500px] xl:w-[400px] bg-[#0f0f0f] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[100]"
                        onWheel={(e) => e.stopPropagation()}
                    >

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
                                    className={`flex  ${c.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`px-3 py-2 rounded-2xl text-sm whitespace-pre-line max-w-[80%] ${c.role === "user"
                                            ? "bg-purple-600 text-white rounded-br-sm"
                                            : "bg-[#2a2a2a] text-gray-200 rounded-bl-sm"
                                            }`}
                                    >
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{

                                                h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                                                h2: ({ children }) => <h2 className="text-md font-semibold mb-2">{children}</h2>,
                                                p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
                                                strong: ({ children }) => <strong className="text-white">{children}</strong>,
                                                
                                                table: ({ children }) => (
                                                    <div className="space-y-1 my-2">{children}</div>
                                                ),

                                                thead: () => null,

                                                tbody: ({ children }) => <>{children}</>,

                                                tr: ({ children }) => (
                                                    <p className="text-zinc-300 leading-relaxed">
                                                        • {children}
                                                    </p>
                                                ),

                                                th: () => null,

                                                td: ({ children }) => <span>{children} </span>,

                                                ol: ({ children }) => (
                                                    <ol className="flex flex-col gap-2 pl-1">
                                                        {children}
                                                    </ol>
                                                ),

                                                ul: ({ children }) => (
                                                    <ul className="flex flex-col gap-0 pl-0">
                                                        {children}
                                                    </ul>
                                                ),

                                                li: ({ children }) => (
                                                    <li className="mb-2">
                                                        <div className="bg-[#1f1f1f] px-3 py-1 rounded-lg">
                                                            {children}
                                                        </div>
                                                    </li>
                                                ),

                                                code({ inline, className, children }) {
                                                    const match = /language-(\w+)/.exec(className || "");
                                                    const code = String(children).replace(/\n$/, "");

                                                    if (!inline && match) {
                                                        return (
                                                            <div className="my-4 rounded-xl overflow-hidden border border-zinc-700 bg-[#0d1117]">

                                                                {/* Top Bar */}
                                                                <div className="flex justify-between items-center px-3 py-2 bg-[#161b22] text-xs text-gray-400 border-b border-zinc-700">
                                                                    <span>{match[1]}</span>

                                                                    <button
                                                                        onClick={() => {
                                                                            navigator.clipboard.writeText(code);
                                                                            setCopiedIndex(code);
                                                                            setTimeout(() => setCopiedIndex(null), 2000);
                                                                        }}
                                                                        className="flex items-center gap-1 hover:text-white transition"
                                                                    >
                                                                        {copiedIndex === code ? <Check size={14} /> : <Copy size={14} />}
                                                                    </button>
                                                                </div>

                                                                {/* Code */}
                                                                <div className="overflow-x-auto">
                                                                    <SyntaxHighlighter
                                                                        style={vscDarkPlus}
                                                                        language={match[1]}
                                                                        PreTag="div"
                                                                        customStyle={{
                                                                            margin: 0,
                                                                            background: "#0d1117",
                                                                            padding: "16px",
                                                                            fontSize: "13px"
                                                                        }}
                                                                    >
                                                                        {code}
                                                                    </SyntaxHighlighter>
                                                                </div>
                                                            </div>
                                                        );
                                                    }

                                                    return (
                                                        <code className=" px-1 py-0.5 rounded text-xs">
                                                            {children}
                                                        </code>
                                                    );
                                                }

                                            }}
                                        >
                                            {c.text}
                                        </ReactMarkdown>
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
