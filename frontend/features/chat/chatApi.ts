import type { ChatMessage } from "./types";


export async function sendChatMessage(
message:string
):Promise<ChatMessage>{


  // Later:
  // axios.post("/api/assistant/chat")


  return {
    id: Date.now().toString(),
    role:"assistant",
    message:
    "I can help you find jobs and improve your profile.",
    createdAt:new Date().toISOString()
  };

}