import React from "react";
import style from "../styles/Message.module.scss";

interface Message {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface MessageProps {
    messages: Message[];
}

function MessageComponent(props: MessageProps) {
	return (
		<div className={style.messages}>
			{props.messages.map((message: Message) => (
				<details className={style.message} key={message.id}>
					<summary>
                        Message number {message.id}: <b>{message.title}</b>
					</summary>
					<blockquote>{message.body}</blockquote> ~ <i>By: User{message.userId}</i>
				</details>
			))}
		</div>
	);
}

MessageComponent.defaultProps = {
	audios: [],
};

export type { Message };
export default MessageComponent;
