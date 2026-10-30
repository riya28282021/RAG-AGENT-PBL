import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronDown,
  FileText,
  Home,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Search,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const docs = [
  ["Query Optimization.pdf", "132p · 1,842 chunks", "Indexed", true],
  ["Database Systems.pdf", "248p · 3,204 chunks", "Indexed", true],
  ["Cardinality Estimation Survey.pdf", "96p · 1,108 chunks", "Indexed", true],
  ["Learned Query Optimization.md", "44p · 620 chunks", "72%", false],
  ["Operating Systems.pdf", "312p · 4,021 chunks", "Indexed", true],
] as const;

const nav = [
  ["/", "Home", Home],
  ["/documents", "Documents", FileText],
  ["/conversations", "Conversations", MessageSquare],
  ["/search", "Search", Search],
  ["/evaluation", "Evaluation", BarChart3],
  ["/settings", "Settings", Settings],
] as const;
// ... (keep your existing icon imports intact)

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [realHistory, setRealHistory] = useState<any[]>([]);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const currentLabel = nav.find(([path]) => path === pathname)?.[1] ?? "RAGENT";

  useEffect(() => {
    fetch("http://localhost:8000/api/conversations")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRealHistory(data);
      })
      .catch(() => console.log("History Endpoint offline."));
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans text-[13px] leading-relaxed flex">
      {mobileOpen && <div className="fixed inset-0 z-30 bg-background/80 lg:hidden" onClick={() => setMobileOpen(false)} />}
      
      {/* Persistent Left Sidebar Navigation */}
      <aside className={cn("fixed inset-y-0 left-0 z-40 flex w-[248px] -translate-x-full flex-col border-r border-border bg-panel transition-transform lg:static lg:translate-x-0 shrink-0", mobileOpen && "translate-x-0")}>
        <div className="flex h-14 items-center gap-2.5 border-b border-border px-4">
          <div className="grid size-6 place-items-center rounded-[5px] bg-primary/15 ring-1 ring-primary/40">
            <span className="size-2 rounded-full bg-primary" />
          </div>
          <div className="leading-none">
            <div className="font-mono text-[13px] font-semibold tracking-[0.2em] text-foreground">RAGENT</div>
            <div className="mt-1 text-[10px] text-muted">AI Knowledge Assistant</div>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto size-7 text-muted lg:hidden" onClick={() => setMobileOpen(false)}><X /></Button>
        </div>
        
        <div className="p-3">
          <Button asChild className="h-9 w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/chat"><span className="font-mono text-base">+</span> New Chat</Link>
          </Button>
        </div>
        
        <nav className="space-y-0.5 px-3" aria-label="Primary navigation">
          {nav.map(([path, label, Icon]) => (
            <Link key={path} to={path} activeOptions={{ exact: path === "/" }} activeProps={{ className: "bg-panel-strong text-foreground" }} className="group relative flex h-8 items-center gap-2.5 rounded-md px-2.5 text-muted transition-colors hover:bg-panel-strong hover:text-foreground">
              <Icon className="size-4 shrink-0" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="mt-4 px-3">
          <div className="px-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Recent Logs</div>
          <div className="mt-1.5 space-y-0.5">
            {realHistory.length === 0 ? (
              <div className="p-2.5 text-faint font-mono text-[10.5px]">No recent database sessions found.</div>
            ) : (
              realHistory.map((session) => (
                <Link key={session.id} to="/chat" className="block rounded-md px-2.5 py-1.5 transition-colors hover:bg-panel-strong hover:text-foreground text-muted">
                  <div className="truncate text-[12.5px] font-medium text-foreground/90">{session.title}</div>
                  <div className="mt-0.5 text-[10px] text-faint">{session.meta}</div>
                </Link>
              ))
            )}
          </div>
        </div>
        
        <div className="mt-auto border-t border-border p-3">
          <div className="flex items-center gap-2.5 px-1">
            <div className="grid size-8 place-items-center rounded-full bg-panel-strong font-mono text-[11px] text-primary ring-1 ring-border">KM</div>
            <div className="min-w-0 flex-1 leading-tight">
              <div className="truncate text-[12px]">K. Mercer</div>
              <div className="truncate text-[10px] text-faint">Researcher</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Structured Content Window Panel wrapper */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur lg:px-7 shrink-0">
          <div className="flex min-w-0 items-center gap-3">
            <Button variant="ghost" size="icon" className="size-8 text-muted lg:hidden" onClick={() => setMobileOpen(true)}><Menu /></Button>
            <div className="font-semibold text-[15px] text-foreground">{currentLabel}</div>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto bg-background">
          {children}
        </div>
      </main>
    </div>
  );
}


export function Panel({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) { 
  return (
    <section className="overflow-hidden rounded-lg bg-panel ring-1 ring-border rise-in">
      <div className="flex min-h-11 items-center justify-between border-b border-border px-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{title}</span>
        {action}
      </div>
      {children}
    </section>
  ); 
}

export function ProgressBar({ value }: { value: number }) { 
  return (
    <div className="h-1 overflow-hidden rounded-full bg-border">
      <div className="h-full origin-left animate-[fill-bar_700ms_ease-out_both] rounded-full bg-primary" style={{ width: `${value}%` }} />
    </div>
  ); 
}

export function Dashboard() {
  return (
    <div className="space-y-4 p-4 lg:p-7">
      <section className="flex flex-wrap items-start justify-between gap-4 rounded-lg bg-panel px-4 py-4 ring-1 ring-border rise-in">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-muted">
            <span className="size-1.5 rounded-full bg-primary" /> Live retrieval pipeline
          </div>
          <p className="mt-2 font-mono text-xs text-faint">query: "Why does cardinality estimation matter?"</p>
        </div>
      </section>
    </div>
  );
}

export function DocumentsPage() { 
  const [filter, setFilter] = useState("All"); 
  const [uploading, setUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setStatusMessage(`Uploading and indexing '${file.name}'...`);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage(`✅ Success! Added ${data.chunks_added} fresh text chunks to your database vector cache.`);
      } else {
        setStatusMessage(`❌ Error: ${data.detail || "Upload failed."}`);
      }
    } catch (error) {
      setStatusMessage("❌ Error: Could not connect to the local Python FastAPI service endpoint.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6 p-4 lg:p-7">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Knowledge base / inventory</div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Documents</h1>
        <p className="mt-1 text-sm text-muted">Manage the sources available to your local RAG agent.</p>
      </div>
      
      <section className="rounded-lg border border-dashed border-primary/40 bg-primary/5 p-8 text-center relative hover:bg-primary/10 transition-colors">
        <label className="cursor-pointer block w-full h-full">
          <input type="file" accept=".txt,.md" className="hidden" onChange={handleFileUpload} disabled={uploading} />
          <div className="mx-auto grid size-10 place-items-center rounded-full bg-primary/15 text-primary">
            <Upload />
          </div>
          <h2 className="mt-3 font-semibold text-foreground">
            {uploading ? "Processing knowledge embeddings..." : "Click to select a new research document"}
          </h2>
          <p className="mt-1 text-xs text-muted">Supports raw plain text (.txt) and Markdown (.md) formatting</p>
        </label>
      </section>

      {statusMessage && (
        <div className="p-3.5 rounded-lg bg-panel border border-border text-xs font-mono text-foreground rise-in">
          {statusMessage}
        </div>
      )}

      <Panel title="Document index">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="font-mono text-[10px] uppercase tracking-wider text-faint">
              <tr>
                <th className="px-4 py-3 font-normal">Name</th>
                <th className="px-4 py-3 font-normal">Type</th>
                <th className="px-4 py-3 font-normal">Status</th>
                <th />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {docs.map(([name, meta, status, indexed]) => (
                <tr key={name} className="transition-colors hover:bg-panel-strong">
                  <td className="px-4 py-3 font-medium text-foreground">{name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{name.endsWith(".md") ? "MD" : "PDF"}</td>
                  <td className="px-4 py-3">
                    <span className={cn("text-xs", indexed ? "text-primary" : "text-muted")}>
                      {indexed ? "● Indexed" : `◌ ${status}`}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="icon" className="size-7 text-muted"><MoreHorizontal /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  ); 
}


export function ConversationsPage() { return <div className="space-y-6 p-4 lg:p-7"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Workspace / history</div><h1 className="mt-2 text-2xl font-semibold tracking-tight">Conversations</h1><p className="mt-1 text-sm text-muted">Review questions, sources, and confidence across your research sessions.</p></div><div className="flex items-center gap-2 rounded-lg border border-border bg-panel px-3"><Search className="size-4 text-muted" /><input className="h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-faint" placeholder="Search conversations" /></div>{[["Today", conversations.slice(0, 2)], ["Yesterday", conversations.slice(2)], ["Previous 7 days", [["Compare database papers", "4d ago", "81% conf", "4 docs"] as const]]].map(([group, items]) => <section key={group}><h2 className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{group}</h2><div className="divide-y divide-border rounded-lg bg-panel ring-1 ring-border">{items.map(([title, time, conf, count]) => <Link to="/chat" key={title} className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-panel-strong"><MessageSquare className="size-4 text-primary" /><div className="min-w-0 flex-1"><div className="font-medium text-foreground">{title}</div><div className="mt-1 text-xs text-faint">{time} · {count}</div></div><span className="font-mono text-xs text-primary">{conf}</span><MoreHorizontal className="size-4 text-muted" /></Link>)}</div></section>)}</div>; }

export function SearchPage() { const [query, setQuery] = useState(""); return <div className="space-y-6 p-4 lg:p-7"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Retrieval / hybrid search</div><h1 className="mt-2 text-2xl font-semibold tracking-tight">Search Knowledge Base</h1><p className="mt-1 text-sm text-muted">Find source passages before you ask the agent to synthesize them.</p></div><div className="flex items-center gap-3 rounded-lg border border-primary/50 bg-panel px-4 ring-1 ring-primary/15"><Search className="size-5 text-primary" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-faint" placeholder="Search your documents..." /><kbd className="hidden rounded border border-border px-2 py-1 font-mono text-[10px] text-faint sm:block">⌘ K</kbd></div><div className="flex flex-wrap gap-2">{["All documents", "PDF", "Last 30 days", "Hybrid · 80/20"].map((item) => <Button key={item} variant="outline" size="sm" className="border-border text-muted hover:bg-panel-strong hover:text-foreground">{item}<ChevronDown className="size-3" /></Button>)}</div><Panel title={query ? `Results for “${query}”` : "Suggested passages"} action={<span className="font-mono text-[10px] text-faint">20 candidates</span>}><div className="divide-y divide-border">{[["Query Optimization.pdf", "p.42", "...cardinality estimation is essential for choosing efficient query plans...", "0.91"], ["Database Systems.pdf", "p.118", "...histograms and sampling provide complementary signals to the optimizer...", "0.86"], ["Cardinality Estimation Survey.pdf", "p.27", "...the quality of a plan depends on the accuracy of intermediate result estimates...", "0.82"]].map(([source, page, excerpt, score]) => <button key={source} className="w-full px-4 py-4 text-left transition-colors hover:bg-panel-strong"><div className="flex items-center gap-2"><FileText className="size-4 text-primary" /><span className="font-medium text-foreground">{source}</span><span className="font-mono text-xs text-faint">{page}</span><span className="ml-auto font-mono text-xs text-primary">{score}</span></div><p className="mt-2 pl-6 text-sm leading-relaxed text-muted">{excerpt}</p><div className="mt-2 pl-6 font-mono text-[10px] uppercase tracking-wider text-faint">Similarity score · hybrid retrieval</div></button>)}</div></Panel></div>; }

export function EvaluationPage() { return <div className="space-y-6 p-4 lg:p-7"><div className="flex flex-wrap items-end justify-between gap-4"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Benchmark / research quality</div><h1 className="mt-2 text-2xl font-semibold tracking-tight">RAG Evaluation</h1><p className="mt-1 text-sm text-muted">Measure retrieval and answer quality across your benchmark dataset.</p></div><Button variant="outline" className="border-border text-foreground hover:bg-panel-strong"><SlidersHorizontal /> Benchmark: database-v1 <ChevronDown /></Button></div><section className="grid grid-cols-2 gap-4 lg:grid-cols-5">{[["Answer Accuracy", "87%"], ["Faithfulness", "91%"], ["Recall@5", "84%"], ["Citation Accuracy", "94%"], ["Avg Latency", "1.72s"]].map(([label, value]) => <div key={label} className="rounded-lg bg-panel p-4 ring-1 ring-border"><div className="text-[10.5px] text-muted">{label}</div><div className="mt-2 font-mono text-2xl text-primary">{value}</div></div>)}</section><div className="grid grid-cols-12 gap-4"><div className="col-span-12 lg:col-span-7"><Panel title="Model / Pipeline Comparison"><div className="divide-y divide-border">{[["Vector Search", "79%", "72%", "76%", "0.91s"], ["Hybrid Search", "84%", "81%", "85%", "1.24s"], ["Hybrid + Reranker", "87%", "86%", "91%", "1.72s"], ["Adaptive RAG", "89%", "88%", "92%", "2.08s"]].map(([name, accuracy, recall, faithfulness, latency], index) => <div key={name} className="grid grid-cols-5 items-center gap-3 px-4 py-4 text-xs"><span className={cn("font-medium", index === 3 ? "text-primary" : "text-foreground")}>{name}</span><span className="font-mono text-muted">{accuracy}<small className="ml-1 text-[9px] text-faint">acc</small></span><span className="font-mono text-muted">{recall}<small className="ml-1 text-[9px] text-faint">recall</small></span><span className="font-mono text-muted">{faithfulness}<small className="ml-1 text-[9px] text-faint">faith</small></span><span className="font-mono text-faint">{latency}</span></div>)}</div></Panel></div><div className="col-span-12 lg:col-span-5"><Panel title="Quality by metric"><div className="space-y-4 p-4">{[["Accuracy", 87], ["Recall@K", 84], ["Faithfulness", 91], ["Citation accuracy", 94]].map(([label, value]) => <div key={label}><div className="mb-1.5 flex justify-between text-xs"><span className="text-muted">{label}</span><span className="font-mono text-primary">{value}%</span></div><ProgressBar value={Number(value)} /></div>)}</div></Panel></div></div><Panel title="Benchmark questions" action={<span className="font-mono text-[10px] text-faint">48 questions · 24h</span>}><div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-xs"><thead className="font-mono text-[10px] uppercase tracking-wider text-faint"><tr><th className="px-4 py-3 font-normal">Question</th><th className="px-4 py-3 font-normal">Retrieved</th><th className="px-4 py-3 font-normal">Correct</th><th className="px-4 py-3 font-normal">Faithfulness</th><th className="px-4 py-3 font-normal">Latency</th></tr></thead><tbody className="divide-y divide-border">{[["What is cardinality estimation?", "20 / 5", "✓", "94%", "1.2s"], ["Why do histograms help optimizers?", "20 / 5", "✓", "91%", "1.5s"], ["Compare sampling approaches", "20 / 5", "—", "67%", "2.1s"]].map(([question, retrieved, correct, faith, latency]) => <tr key={question} className="transition-colors hover:bg-panel-strong"><td className="px-4 py-3 font-medium text-foreground">{question}</td><td className="px-4 py-3 font-mono text-muted">{retrieved}</td><td className="px-4 py-3 font-mono text-primary">{correct}</td><td className="px-4 py-3 font-mono text-muted">{faith}</td><td className="px-4 py-3 font-mono text-faint">{latency}</td></tr>)}</tbody></table></div></Panel></div>; }

export function SettingsPage() { const [rerank, setRerank] = useState(true); const [rewrite, setRewrite] = useState(true); return <div className="max-w-3xl space-y-6 p-4 lg:p-7"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Workspace / configuration</div><h1 className="mt-2 text-2xl font-semibold tracking-tight">Settings</h1><p className="mt-1 text-sm text-muted">Tune how RAGENT searches, ranks, and explains your sources.</p></div><Panel title="Retrieval method"><div className="grid gap-3 p-4 md:grid-cols-3">{[["Vector Search", "Semantic similarity"], ["Keyword Search", "Exact terminology"], ["Hybrid Search", "Recommended · 80/20"]].map(([title, desc], index) => <button key={title} className={cn("rounded-lg border p-4 text-left transition-colors", index === 2 ? "border-primary/60 bg-primary/5" : "border-border hover:bg-panel-strong")}><div className="flex items-center justify-between"><span className="font-medium text-foreground">{title}</span>{index === 2 && <span className="size-2 rounded-full bg-primary" />}</div><p className="mt-1 text-xs text-muted">{desc}</p></button>)}</div></Panel><Panel title="Advanced Retrieval"><div className="space-y-5 p-4"><div className="flex items-center justify-between"><div><div className="font-medium text-foreground">Enable reranking</div><div className="mt-1 text-xs text-muted">Reorder candidates with a more accurate relevance model.</div></div><Button variant="ghost" size="sm" onClick={() => setRerank(!rerank)} className={cn("h-7 rounded-full px-3 text-xs", rerank ? "bg-primary/15 text-primary" : "bg-panel-strong text-muted")}>{rerank ? "ON" : "OFF"}</Button></div><div className="flex items-center justify-between"><div><div className="font-medium text-foreground">Query rewriting</div><div className="mt-1 text-xs text-muted">Rephrase questions for stronger document retrieval.</div></div><Button variant="ghost" size="sm" onClick={() => setRewrite(!rewrite)} className={cn("h-7 rounded-full px-3 text-xs", rewrite ? "bg-primary/15 text-primary" : "bg-panel-strong text-muted")}>{rewrite ? "ON" : "OFF"}</Button></div>{[["Retrieved candidates", "20"], ["Final context", "5"], ["Similarity threshold", "0.60"]].map(([label, value]) => <div key={label} className="flex items-center justify-between border-t border-border pt-4"><span className="text-sm text-muted">{label}</span><span className="rounded border border-border bg-panel-strong px-3 py-1 font-mono text-xs text-foreground">{value}</span></div>)}</div></Panel><Panel title="AI response"><div className="grid gap-4 p-4 md:grid-cols-2"><label className="text-xs text-muted">Model<select className="mt-2 block h-9 w-full rounded-md border border-border bg-panel-strong px-3 text-foreground"><option>RAGENT Research · v1</option></select></label><label className="text-xs text-muted">Maximum response length<select className="mt-2 block h-9 w-full rounded-md border border-border bg-panel-strong px-3 text-foreground"><option>Balanced · 700 tokens</option></select></label></div></Panel></div>; }

export function ChatPage() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "assistant"; text: string; sources?: any[] }>>([
    {
      role: "assistant",
      text: "Hello! I am RAGENT, your local knowledge assistant. Ask me anything grounded in your document context.",
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [activeSources, setActiveSources] = useState<any[]>([]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userQuery = message;
    setMessage("");
    setLoading(true);
    setChatHistory((prev) => [...prev, { role: "user", text: userQuery }]);

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userQuery }),
      });

      if (!response.ok) throw new Error("Backend response error");
      const data = await response.json();
      
      setChatHistory((prev) => [...prev, { role: "assistant", text: data.answer, sources: data.sources }]);
      if (data.sources && data.sources.length > 0) setActiveSources(data.sources);
    } catch (error) {
      setChatHistory((prev) => [...prev, { role: "assistant", text: "⚠️ Error: Could not connect to the local Python FastAPI backend server on port 8000." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] w-full h-full min-h-0 overflow-hidden bg-background">
      <section className="flex flex-col border-r border-border min-h-0 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 lg:px-7 shrink-0">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Conversation / Active Workspace</div>
            <h1 className="mt-1 font-semibold text-foreground">Interactive Document Intelligence</h1>
          </div>
        </div>
        
        <div className="flex-1 space-y-7 px-4 py-8 lg:px-7 overflow-y-auto">
          {chatHistory.map((chat, idx) => (
            <div key={idx} className={cn("space-y-3 rise-in", chat.role === "user" ? "ml-auto max-w-xl rounded-lg bg-panel-strong px-4 py-3 text-sm text-foreground ring-1 ring-border w-fit" : "space-y-4")}>
              {chat.role === "assistant" && (
                <div className="flex items-center gap-2 text-xs text-primary">
                  <span className="grid size-5 place-items-center rounded-full bg-primary/15"><Sparkles className="size-3" /></span> 
                  RAGENT <span className="font-mono text-[10px] text-faint">· local engine inference</span>
                </div>
              )}
              <p className="max-w-2xl text-[14px] leading-7 text-foreground whitespace-pre-wrap">{chat.text}</p>
              {chat.role === "assistant" && chat.sources && chat.sources.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {chat.sources.map((src: any) => (
                    <span key={src.chunk} className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary border border-primary/20">
                      [{src.chunk}] {src.source}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-muted rise-in">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              <span>Searching local vector index & generating response...</span>
            </div>
          )}
        </div>

        <div className="mx-auto w-full max-w-3xl px-4 pb-5 lg:px-7 shrink-0">
          <div className="rounded-lg border border-border bg-panel p-2 ring-1 ring-border">
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { event.preventDefault(); handleSend(); } }} 
              disabled={loading}
              className="min-h-14 w-full resize-none bg-transparent px-2 py-1 text-sm outline-none placeholder:text-faint text-foreground" 
              placeholder="Ask a question grounded entirely within your document text..." 
            />
            <div className="flex items-center justify-between border-t border-border pt-2">
              <Button variant="ghost" size="sm" className="text-muted"><Search /> Hybrid Index</Button>
              <Button size="sm" onClick={handleSend} disabled={loading} className="bg-primary text-primary-foreground">
                {loading ? "Processing..." : "Send"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showDetails && (
        <aside className="hidden space-y-4 bg-panel/40 p-4 xl:block overflow-y-auto shrink-0 border-l border-border w-[320px]">
          <Panel title="Explainable AI Pipeline" action={<Button variant="ghost" size="icon" className="size-6 text-muted" onClick={() => setShowDetails(false)}><X /></Button>}>
            <div className="p-4 space-y-3">
              {[
                ["Search Space", "Chroma DB Collection"],
                ["Embedding Vector", "mxbai-embed-large"],
                ["Generation Agent", "gemma3:4b"],
              ].map(([label, value]) => (
                <div key={label} className="text-xs">
                  <div className="text-[10px] uppercase tracking-wider text-faint">{label}</div>
                  <p className="mt-0.5 text-muted font-mono">{value}</p>
                </div>
              ))}
            </div>
          </Panel>
          
          <Panel title="Retrieved Fragments">
            <div className="divide-y divide-border">
              {activeSources.length === 0 ? (
                <div className="p-4 text-xs text-faint text-center">No active search records. Ask a question to view hits.</div>
              ) : (
                activeSources.map((src, idx) => (
                  <div key={idx} className="p-3 text-left space-y-1 bg-panel-strong/20">
                    <div className="text-xs font-medium text-primary">[{src.chunk}] Passage</div>
                    <p className="text-[11.5px] leading-relaxed text-muted line-clamp-4 bg-background p-1.5 rounded border border-border">{src.text}</p>
                  </div>
                ))
              )}
            </div>
          </Panel>
        </aside>
      )}
    </div>
  );
}

