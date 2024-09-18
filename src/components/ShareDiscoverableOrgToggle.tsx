import { useState } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function ShareDiscoverableOrgToggle() {
	const [isDiscoverable, setIsDiscoverable] = useState(false);

	return (
		<div className="flex items-center justify-between">
			<div>
				<Label htmlFor="discoverable" className="text-base">
					Make this share discoverable in your organization
				</Label>
				<p className="text-xs text-gray-500">
					This share will appear in your teammates' database list.
				</p>
			</div>
			<Switch
				id="discoverable"
				checked={isDiscoverable}
				onCheckedChange={setIsDiscoverable}
			/>
		</div>
	);
}
