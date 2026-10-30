import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/ragent/workspace";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Play } from "lucide-react";

export const Route = createFileRoute("/evaluation")({
  component: EvaluationRouteComponent,
});

function EvaluationRouteComponent() {
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);

  const runBenchmark = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/evaluate");
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      alert("Failed to run evaluation suite. Make sure your FastAPI backend server is active on port 8000.");
    } finally {
      setLoading(false);
    }
  };

  // Default fallback visualization data structure if metrics haven't loaded yet
  const displaySummary = metrics?.summary || {
    accuracy: "0%",
    faithfulness: "0%",
    recall: "0%",
    citation: "0%",
    latency: "0.00s"
  };

  const displayQuestions = metrics?.questions || [];

  return (
    <AppShell>
      <div className="space-y-6 p-4 lg:p-7 rise-in">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Benchmark / research quality</div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight">RAG Evaluation</h1>
            <p className="mt-1 text-sm text-muted">Measure retrieval and response quality across your current dataset chunks dynamically.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-border text-foreground hover:bg-panel-strong">
              <SlidersHorizontal /> Benchmark: local-v1
            </Button>
            <Button onClick={runBenchmark} disabled={loading} className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs">
              <Play className="size-3 fill-current" /> {loading ? "Evaluating Engine..." : "Run Evaluation Suite"}
            </Button>
          </div>
        </div>

        {/* Dynamic Metric Grid Panels */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {[
            ["Answer Accuracy", displaySummary.accuracy],
            ["Faithfulness", displaySummary.faithfulness],
            ["Recall@K", displaySummary.recall],
            ["Citation Quality", displaySummary.citation],
            ["Avg Latency", displaySummary.latency]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-panel p-4 ring-1 ring-border">
              <div className="text-[10.5px] text-muted font-medium uppercase tracking-wider">{label}</div>
              <div className="mt-2 font-mono text-2xl text-primary">{value}</div>
            </div>
          ))}
        </section>

        {/* Dynamic Data Log Table */}
        <section className="overflow-hidden rounded-lg bg-panel ring-1 ring-border">
          <div className="flex min-h-11 items-center justify-between border-b border-border px-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Benchmark Run Logs</span>
            <span className="font-mono text-[10px] text-faint">{displayQuestions.length} test scenarios executed</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-xs">
              <thead className="font-mono text-[10px] uppercase tracking-wider text-faint border-b border-border">
                <tr>
                  <th className="px-4 py-3 font-normal">Generated Test Question</th>
                  <th className="px-4 py-3 font-normal">Retrieved context</th>
                  <th className="px-4 py-3 font-normal">Factual accuracy</th>
                  <th className="px-4 py-3 font-normal">Faithfulness score</th>
                  <th className="px-4 py-3 font-normal">Latency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {displayQuestions.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-muted font-mono text-xs">
                      No validation logs active. Click "Run Evaluation Suite" above to launch synthetic tests.
                    </td>
                  </tr>
                ) : (
                  displayQuestions.map((q: any, idx: number) => (
                    <tr key={idx} className="transition-colors hover:bg-panel-strong/40">
                      <td className="px-4 py-3 font-medium text-foreground max-w-xs truncate">{q.question}</td>
                      <td className="px-4 py-3 font-mono text-muted">{q.retrieved}</td>
                      <td className="px-4 py-3 font-mono text-primary font-bold">{q.correct}</td>
                      <td className="px-4 py-3 font-mono text-muted">{q.faithfulness}</td>
                      <td className="px-4 py-3 font-mono text-faint">{q.latency}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
