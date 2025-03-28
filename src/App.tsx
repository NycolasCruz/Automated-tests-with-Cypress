import { useState } from "react";

import { NewItem } from "components/NewItem";
import { List } from "components/List";

export function App() {
	const [list, setList] = useState<string[]>([]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "2rem",
			}}
		>
			<NewItem list={list} setList={setList} />

			<List list={list} setList={setList} />
		</div>
	);
}
