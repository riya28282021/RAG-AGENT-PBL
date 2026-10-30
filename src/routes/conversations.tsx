import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/ragent/workspace";
import { useState, useEffect } from "react";
import { MessageSquare, MoreHorizontal, Search } from "lucide-react";

export const Route = createFileRoute("/conversations")({
  component: ConversationsRouteComponent,
});

function ConversationsRouteComponent() {
  const [sessions, setSessions] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/conversations")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setSessions(data);
      })
      .catch(() => console.log("History server offline."));
  }, []);

  return (
    <AppShell>
      <div className="space-y-6 p-4 lg:p-7 rise-in">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Workspace / history</div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Conversations</h1>
          <p className="mt-1 text-sm text-muted">Review questions, sources, and log histories across your research database sessions permanently.</p>
        </div>

        <section>
          <h2 className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Database Saved Logs</h2>
          <div className="divide-y divide-border rounded-lg bg-panel ring-1 ring-border">
            {sessions.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-faint">No conversation history rows found in conversations.db. Go to the Chat tab to start querying!</div>
            ) : (
              sessions.map((session) => (
                <Link key={session.id} to="/chat" className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-panel-strong">
                  <MessageSquare className="size-4 text-primary" />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-foreground">{session.title}</div>
                    <div className="mt-1 text-xs text-faint">{session.meta} · Persistent Memory Row</div>
                  </div>
                  <MoreHorizontal className="size-4 text-muted" />
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
