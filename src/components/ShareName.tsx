import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ShareName() {
	return (
		<div>
			<Label htmlFor="share-name">Share name</Label>
			<Input id="share-name" placeholder="my_db_share" />
		</div>
	);
}
