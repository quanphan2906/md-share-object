import { useState } from "react";
import DropdownOption from "./DropDownOption";

export default function AccessOption() {
	const [accessOption, setAccessOption] = useState("organization");

	const accessOptions = [
		{
			value: "organization",
			label: "Anyone in my organization",
			description:
				"Only members of your organization will be able to attach & query this database.",
		},
		{
			value: "link",
			label: "Anyone with the share link",
			description:
				"Any MotherDuck user with the share link will be able to attach & query this database.",
		},
	];

	return (
		<DropdownOption
			dropDownLabel="Access"
			options={accessOptions}
			currentOption={accessOption}
			setCurrentOption={setAccessOption}
		/>
	);
}
