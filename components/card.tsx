import React, { Component, ReactChildren } from "react";

import styles from "../styles/Home.module.scss";

interface CardProps {
    title: string;
    children: unknown;
}

export default function Card(props: CardProps) {
	return (
		<div className={styles.card} style={{ maxWidth: "80%" }}>
			<h2>{props.title}</h2>
			{props.children}
		</div>
	);
}
