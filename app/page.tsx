import { unstable_getServerSession } from "next-auth";
import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

async function HomePage() {
	const data = await fetch(
		`${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
	).then((res) => res.json());
	const messages: Message[] = data.messages;
	const session = await unstable_getServerSession();

	return (
		<main>
			<MessageList session={session} initialMessages={messages} />
			<ChatInput session={session} />
		</main>
	);
}

export default HomePage;
