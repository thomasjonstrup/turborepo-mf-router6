import { AppShell } from "ui";

import { MoviesContent } from "movies-content";
import { PlayList } from "playlist-content";

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
					element: () => <MoviesContent />,
				},
				{
					path: "/playlist",
					element: () => <PlayList />,
				},
			]}
		/>
	);
}

export default App;
