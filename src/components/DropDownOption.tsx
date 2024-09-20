import { Label } from "@/components/ui/label";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Dispatch, SetStateAction } from "react";

interface DropdownOptionProps {
	dropDownLabel: string;
	options: {
		value: string;
		label: string;
		description?: string;
	}[];
	currentOption: string;
	setCurrentOption: Dispatch<SetStateAction<string>>;
}

export default function DropdownOption({
	dropDownLabel,
	options,
	currentOption,
	setCurrentOption,
}: DropdownOptionProps) {
	return (
		<div>
			<Label>{dropDownLabel}</Label>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={false}
						className="w-full justify-between"
					>
						{
							options.find(
								(option) => option.value === currentOption
							)?.label
						}
						<X className="h-4 w-4 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
					<PopoverClose asChild>
						<div className="bg-white rounded-md shadow-lg border">
							{options.map((option) => (
								<div
									key={option.value}
									className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
									onClick={() => {
										setCurrentOption(option.value);
									}}
								>
									<div className="w-[32px]">
										{currentOption === option.value && (
											<Check className="h-4 w-4" />
										)}
									</div>
									<div>
										<div className="text-sm font-medium">
											{option.label}
										</div>
										<div className="text-xs text-gray-500">
											{option.description}
										</div>
									</div>
								</div>
							))}
						</div>
					</PopoverClose>
				</PopoverContent>
			</Popover>
		</div>
	);
}
