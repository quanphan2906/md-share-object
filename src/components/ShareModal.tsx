"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareName from "./ShareName";
import DatabaseOptions from "./DatabaseOptions";
import AccessOption from "./AccessOption";
import ShareDiscoverableOrgToggle from "./ShareDiscoverableOrgToggle";
import UpdateCadenceOption from "./UpdateCadenceOption";

export default function ShareModal() {
	return (
		<div className="inset-0 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg shadow-lg max-w-md w-full">
				<div className="flex justify-between items-center p-6 pb-0">
					<h2 className="text-xl font-semibold">
						Create a new share
					</h2>
					<Button variant="ghost" size="icon">
						<X className="h-4 w-4" />
					</Button>
				</div>
				<div className="p-6">
					<p className="text-sm text-gray-600 mb-6">
						Database shares in MotherDuck allow users to provide
						read-only access to a consistent snapshot of their
						databases to others.
					</p>
					<div className="space-y-4">
						<ShareName />
						<DatabaseOptions />
						<AccessOption />
						<UpdateCadenceOption />
						<ShareDiscoverableOrgToggle />
					</div>
				</div>
				<div className="flex justify-end gap-4 p-6">
					<Button variant="outline">Cancel</Button>
					<Button>Create share</Button>
				</div>
			</div>
		</div>
	);
}
