import { useState } from "react";
import DropdownOption from "./DropDownOption";

export default function UpdateCadenceOption() {
	const [currentUpdateOption, setCurrentUpdateOption] = useState("daily");

	const updateOptions = [
		{
			value: "immediately",
			label: "Immediately",
			description:
				"Update consumers immediately when there's change to share.",
		},
		{
			value: "daily",
			label: "Daily",
			description: "Update consumers on a daily basis.",
		},
		{
			value: "weekly",
			label: "Weekly",
			description: "Update consumers on a weekly basis.",
		},
		{
			value: "monthly",
			label: "Monthly",
			description: "Update consumers on a monthly basis.",
		},
	];

	return (
		<DropdownOption
			dropDownLabel="Update cadence"
			options={updateOptions}
			currentOption={currentUpdateOption}
			setCurrentOption={setCurrentUpdateOption}
		/>
	);
}
