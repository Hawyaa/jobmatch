"use client";


import { Send } from "lucide-react";


interface Props{
value:string;
setValue:(value:string)=>void;
onSend:()=>void;
}



export default function ChatInput({
value,
setValue,
onSend
}:Props){


return (

<div
className="
flex
gap-2
border-t
border-bronze/30
p-4
"
>


<input

value={value}

onChange={(e)=>setValue(e.target.value)}

placeholder="Ask about jobs..."

className="
flex-1
rounded-xl
border
border-bronze/40
bg-cream-light
px-4
outline-none
"

/>


<button

onClick={onSend}

className="
rounded-xl
bg-burgundy
px-4
text-cream
"

>

<Send size={18}/>

</button>


</div>

)

}