import { FormEvent, useState } from "react";
import axios from "axios";

import "./styles.scss";

type Props = {
	list: string[];
	setList: (list: string[]) => void;
};

type NewItem = {
	name: string;
};

type PaginatedNewItems = GenericPagination<NewItem>;

type Status = {
	message: string;
	type: "success" | "error";
};

export function NewItem({ list, setList }: Props) {
	const [status, setStatus] = useState<Status>({} as Status);
	const [value, setValue] = useState("");

	const statusStyle = status.type === "success" ? { color: "green" } : { color: "red" };

	function handleAddingTheItemToTheList(event: FormEvent) {
		event.preventDefault();

		setList([...list, value]);
		setValue("");
		setStatus({ message: "Pokémon adicionado com sucesso!", type: "success" });
	}

	async function handleAddingRandomItemsToTheList(event: FormEvent) {
		event.preventDefault();

		try {
			const { data } = await axios.get<PaginatedNewItems>(
				"https://pokeapi.co/api/v2/pokemon?limit=6"
			);

			const items = data.results.map((item) => item.name);

			setList(list.concat(items));

			setStatus({ message: "Pokémons adicionados com sucesso!", type: "success" });
		} catch (error) {
			console.error(error);

			setStatus({ message: "Erro ao adicionar Pokémons à lista", type: "error" });
		}
	}

	return (
		<>
			<form>
				<label htmlFor="new-pokemon-input">Adicione um novo Pokémon à lista</label>

				<input
					id="new-pokemon-input"
					value={value}
					onChange={(event) => setValue(event.target.value)}
					data-cy="new-pokemon-input"
				/>

				<div id="add-button">
					<button
						disabled={!value}
						onClick={(event) => handleAddingTheItemToTheList(event)}
						data-cy="add-pokemons-button"
					>
						Adicionar
					</button>

					<button onClick={handleAddingRandomItemsToTheList} data-cy="add-random-pokemons-button">
						Adicionar Pokémons aleatórios
					</button>
				</div>
			</form>

			<p style={statusStyle} data-cy="status-message">
				{status.message}
			</p>
		</>
	);
}
