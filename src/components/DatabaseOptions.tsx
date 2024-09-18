import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function DatabaseOptions() {
	const [selectedDatabases, setSelectedDatabases] = useState<string[]>([]);

	const databases = [
		"database1",
		"database2",
		"database3",
		"database4",
		"database5",
		"database6",
		"database7",
		"database8",
		"database9",
		"database10",
	];

	const toggleDatabase = (database: string) => {
		setSelectedDatabases((prev) =>
			prev.includes(database)
				? prev.filter((db) => db !== database)
				: [...prev, database]
		);
	};

	return (
		<div>
			<Label htmlFor="databases">Databases</Label>
			<ScrollArea className="h-[200px] w-full border rounded-md">
				<div className="p-4">
					{databases.map((database) => (
						<div
							key={database}
							className="flex items-center space-x-2 mb-2"
						>
							<Checkbox
								id={database}
								checked={selectedDatabases.includes(database)}
								onCheckedChange={() => toggleDatabase(database)}
							/>
							<label
								htmlFor={database}
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{database}
							</label>
						</div>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
