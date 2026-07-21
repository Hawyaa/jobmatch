import type { ChatMessage as MessageType } from "@/features/chat/types";


interface Props {
 message: MessageType;
}


export default function ChatMessage({
message
}:Props){


const isUser = message.role === "user";


return (

<div
className={`
flex
${isUser ? "justify-end" : "justify-start"}
`}
>


<div
className={`
max-w-[80%]
rounded-2xl
px-4
py-3
text-sm

${
isUser
?
"bg-burgundy text-cream"
:
"bg-cream text-espresso"
}

`}
>

{message.message}

</div>


</div>

)

}