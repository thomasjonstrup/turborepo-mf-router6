import {
	Button,
	Card,
	Group,
	Image,
	Text,
	useMantineTheme,
} from "@mantine/core";
import React from "react";

import { useStore } from "store";

export const MovieCard: React.FunctionComponent<{
	title: string;
	image: string;
	showAddButton?: boolean;
	showRemoveButton?: boolean;
}> = ({ title, image, showAddButton, showRemoveButton }) => {
	const theme = useMantineTheme();
	const { addMovie, removeMovie } = useStore();
	return (
		<Card shadow="sm" p="lg">
			<Card.Section>
				<Image src={image} height={320} alt={title} />
			</Card.Section>

			<Group
				position="apart"
				style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
			>
				<Text weight={500}>{title}</Text>
			</Group>

			{showAddButton && (
				<Button
					variant="light"
					color="blue"
					fullWidth
					style={{ marginTop: 14 }}
					onClick={() => addMovie({ title, image })}
				>
					Add to list
				</Button>
			)}
			{showRemoveButton && (
				<Button
					variant="light"
					color="blue"
					fullWidth
					style={{ marginTop: 14 }}
					onClick={() => removeMovie(title)}
				>
					Remove from list
				</Button>
			)}
		</Card>
	);
};
