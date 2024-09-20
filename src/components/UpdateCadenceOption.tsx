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
			label: "Daily at 12:00 AM PST",
			description: "Update consumers every day at 12:00 AM PST.",
		},
		{
			value: "weekly",
			label: "Weekly on Saturday 12:00 AM PST",
			description:
				"Update consumers every week on Saturday at 12:00 AM PST.",
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
