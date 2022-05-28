import { useState } from "react";

import { AppShell } from "ui";

function App() {
	return (
		<AppShell
			title="Movies"
			colorScheme="light"
			navLinks={[
				{
					label: "Home",
					path: "/",
				},
				{
					label: "Playlist",
					path: "/playlist",
				},
			]}
			routes={[
				{
					path: "",
					element: () => <div>Is this home</div>,
				},
				{
					path: "/playlist",
					element: () => <div>PlayList</div>,
				},
			]}
		/>
	);
}

export default App;
