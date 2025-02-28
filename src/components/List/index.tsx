type Props = {
	list: string[];
	setList: (list: string[]) => void;
};

export function List({ list, setList }: Props) {
	function handleTheRemovalOfTheItemFromTheList(index: number) {
		const updatedList = [...list];

		updatedList.splice(index, 1);

		setList(updatedList);
	}

	return (
		<ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: 0, margin: 0 }}>
			{list.map((item, index) => (
				<li
					key={`item-${index}`}
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						gap: "0.5rem",
						textTransform: "capitalize",
					}}
				>
					{item}
					<button onClick={() => handleTheRemovalOfTheItemFromTheList(index)}>Remover</button>
				</li>
			))}
		</ul>
	);
}
