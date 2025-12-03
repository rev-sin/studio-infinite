import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="bg-(--primary) text-(--soft) p-6 rounded-xl">
			Hello "/projects"!
		</div>
	);
}
