import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Dashboard } from "@/components/ragent/workspace";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "RAGENT — Research Overview" }, { name: "description", content: "Overview of your source-grounded knowledge workspace." }, { property: "og:title", content: "RAGENT — Research Overview" }, { property: "og:description", content: "Overview of your source-grounded knowledge workspace." }] }),
  component: () => <AppShell><Dashboard /></AppShell>,
});