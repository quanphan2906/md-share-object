import { useState } from "react";
import DropdownOption from "./DropDownOption";

export default function UpdateCadenceOption() {
	const [currentUpdateOption, setCurrentUpdateOption] = useState("daily");

	const updateOptions = [
		{
			value: "immediately",
			label: "Immediately",
			description:
				"Broadcast changes to everyone who has access immediately when there's a change to the share.",
		},
		{
			value: "daily",
			label: "Daily",
		},
		{
			value: "weekly",
			label: "Weekly",
		},
		{
			value: "monthly",
			label: "Monthly",
		},
	];

	return (
		<DropdownOption
			options={updateOptions}
			currentOption={currentUpdateOption}
			setCurrentOption={setCurrentUpdateOption}
		/>
	);
}
