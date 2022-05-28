import { AppShell } from "ui";

import MoviesContent from "./components/MoviesContent";

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
					element: () => <div>PlayList</div>,
				},
			]}
		/>
	);
}

export default App;
