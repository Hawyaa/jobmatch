"use client";


import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import type { ChatMessage as MessageType } from "@/features/chat/types";

import { sendChatMessage } from "@/features/chat/chatApi";



export default function ChatWidget(){


const [open,setOpen]=useState(false);

const [input,setInput]=useState("");



const [messages,setMessages]=useState<MessageType[]>([
{
id:"1",
role:"assistant",
message:
"Hi 👋 How can I help with your job search?",
createdAt:""
}
]);



async function send(){


if(!input.trim()) return;



const userMessage:MessageType={

id:Date.now().toString(),

role:"user",

message:input,

createdAt:""

};



setMessages(prev=>[
...prev,
userMessage
]);



setInput("");



const response =
await sendChatMessage(input);



setMessages(prev=>[
...prev,
response
]);


}



return (

<>

{/* Button */}

<button

onClick={()=>setOpen(!open)}

className="
fixed
bottom-6
right-6
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-burgundy
text-bronze
shadow-xl
"

>


{
open
?
<X/>
:
<MessageCircle/>
}


</button>



{
open && (

<div
className="
fixed
bottom-24
right-6
flex
h-[500px]
w-[350px]
flex-col
rounded-3xl
border
border-bronze/30
bg-white
shadow-2xl
"
>


<div
className="
rounded-t-3xl
bg-burgundy
p-5
text-cream
"
>

JobMatch AI Assistant

</div>



<div
className="
flex-1
space-y-3
overflow-y-auto
p-4
"
>


{
messages.map(msg=>(

<ChatMessage
key={msg.id}
message={msg}
/>

))
}


</div>



<ChatInput

value={input}

setValue={setInput}

onSend={send}

/>


</div>

)

}


</>

)

}