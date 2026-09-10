# RAG_AGENT

Build a polished, production-quality web application for an AI-powered RAG (Retrieval-Augmented Generation) document assistant.

Project name: RAGENT

The application should feel like a serious final-year computer science project / research prototype rather than a generic AI chatbot.

The core idea:
Users upload documents into a personal knowledge base and interact with an AI agent that answers questions using those documents. The UI should make the RAG process transparent by showing sources, retrieved chunks, confidence, and retrieval information.

IMPORTANT DESIGN DIRECTION
--------------------------------------------------

Create a modern, minimal, technical SaaS-style interface.

The design should feel:
- Professional
- Clean
- Academic/research-oriented
- Modern
- Slightly technical
- Not overly colorful
- Not gimmicky
- Not like a generic ChatGPT clone

Prioritize:
- Excellent spacing
- Clear information hierarchy
- Readability
- Smooth transitions
- Responsive design
- Accessible components
- Consistent typography
- Clear empty states
- Clear loading states
- Clear error states

Use a restrained color palette with one primary accent color.

Use cards, subtle borders, rounded corners, clean icons, tooltips, badges, and expandable sections.

Do NOT make every element a card. Use whitespace and hierarchy to keep the UI sophisticated.

--------------------------------------------------
1. GLOBAL APPLICATION LAYOUT
--------------------------------------------------

Use a desktop-first three-part application structure:

LEFT SIDEBAR
- Application logo/name: RAGENT
- New Chat button
- Documents
- Conversations
- Evaluation
- Search
- Settings
- User profile at bottom

MAIN CONTENT
- Context-dependent page content

OPTIONAL RIGHT PANEL
- Retrieval details
- Sources
- Document metadata
- Agent activity
- Evaluation information

The right panel should be collapsible.

On smaller screens, convert the left sidebar into a collapsible navigation drawer.

--------------------------------------------------
2. SIDEBAR
--------------------------------------------------

Create a polished persistent sidebar.

Top:

RAGENT logo
"AI Knowledge Assistant"

Primary action:

+ New Chat

Navigation:

Home
Documents
Conversations
Search
Evaluation
Settings

Add small icons to each item.

Conversation section:

"Recent"

Show recent conversations such as:

Cardinality Estimation
Query Optimization
Explain B+ Trees
Compare Database Papers

Each conversation should have:
- Title
- Optional timestamp
- Context menu

Context menu:
- Rename
- Delete

Highlight the currently active conversation.

Bottom:

User avatar
User name
Settings icon
Logout

--------------------------------------------------
3. DASHBOARD / HOME
--------------------------------------------------

Create a useful dashboard instead of immediately opening a chat.

Header:

"Good afternoon"
"Ask questions about your knowledge base."

Main actions:

[Upload Documents]
[Start New Chat]

Show statistics:

Documents
27

Total Chunks
18,432

Conversations
43

Questions Asked
1,284

Below this show:

Recent Documents

Each document row should contain:
- File icon
- Filename
- File type
- Number of pages
- Number of chunks
- Indexing status
- Upload date
- More menu

Example:

Query Optimization.pdf
PDF · 132 pages · 1,842 chunks
Indexed ✓

Then:

Recent Conversations

Show 4–6 recent chats.

Also include a small "System Performance" section:

Average retrieval latency
Average response latency
Retrieval accuracy

This makes the application feel like an actual research system.

--------------------------------------------------
4. DOCUMENT MANAGEMENT
--------------------------------------------------

Create a dedicated Documents page.

Header:

"Documents"
"Manage the documents available to your RAG agent."

Top right:

[+ Upload Documents]

Upload area should support:
- PDF
- DOCX
- TXT
- Markdown
- CSV

Create a large drag-and-drop upload zone.

Example:

"Drop documents here"
or
"Browse files"

"Supported formats: PDF, DOCX, TXT, MD, CSV"

After upload, show indexing progress.

Example:

Query Optimization.pdf

Uploading...
████████████░░ 82%

Then:

Processing document...
Extracting text...
Creating chunks...
Generating embeddings...
Indexing...

Finally:

Indexed ✓

Document table/list should include:

Name
Type
Pages
Chunks
Status
Uploaded
Actions

Actions:
- View
- Rename
- Re-index
- Delete

Add filters:
- All
- PDF
- DOCX
- TXT
- Indexed
- Processing
- Failed

Add sorting:
- Name
- Date
- Size
- Number of chunks

--------------------------------------------------
5. DOCUMENT DETAIL PAGE
--------------------------------------------------

When a user clicks a document, show a document detail page.

Header:

Query Optimization.pdf

PDF
132 pages
1,842 chunks
Indexed ✓

Actions:

[Ask about document]
[Re-index]
[Delete]

Show metadata:

Filename
File size
Pages
Upload date
Last indexed
Chunk count
Embedding model
Indexing status

Below this:

"Document Preview"

Show a PDF/document preview area.

Allow page navigation.

On the side show:

"Indexed Content"

List chunks.

Example:

Chunk #421
Page 42
Similarity: 0.91

Preview text...

Clicking a chunk should highlight the corresponding content/page.

--------------------------------------------------
6. CHAT PAGE
--------------------------------------------------

This is the primary interface.

Use a clean ChatGPT-style layout, but make it visually distinct and more research-oriented.

Top header:

Conversation title

Right side:
- Selected documents
- Retrieval settings
- More menu

Main chat area.

Empty state:

"Ask questions about your documents"

Examples:

"What is cardinality estimation?"
"Compare the indexing methods in these papers."
"Summarize the query optimization section."
"What does this paper say about sampling?"

Show example question cards that users can click.

--------------------------------------------------
7. DOCUMENT SCOPE SELECTOR
--------------------------------------------------

Above the message input, provide a document scope selector.

Example:

Knowledge Base
[3 documents selected ▼]

Dropdown:

☑ Query Optimization.pdf
☑ Database Systems.pdf
☐ Operating Systems.pdf

Buttons:

Select all
Clear all

The user should be able to restrict retrieval to selected documents.

--------------------------------------------------
8. CHAT MESSAGE DESIGN
--------------------------------------------------

User messages should be clean and compact.

Assistant responses should have:

Answer text

Sources

Confidence indicator

Optional retrieval details

Example:

Assistant:

"Cardinality estimation is the process of predicting the number of tuples produced by a query operator. Query optimizers use these estimates to select efficient execution plans."

Then:

Sources
────────────────────
[1] Query Optimization.pdf · Page 42
[2] Database Systems.pdf · Page 118

Each source should be clickable.

Clicking a source opens the document preview at the relevant page.

Add actions:

Copy
Regenerate
Good answer 👍
Bad answer 👎

--------------------------------------------------
9. SOURCE / CITATION UI
--------------------------------------------------

Sources are a major part of the application.

Every RAG-generated answer should visually distinguish citations.

Use citation chips:

[Query Optimization.pdf · p.42]

Hovering over a citation should show a small preview.

Clicking it opens the relevant document/page.

Source cards should contain:

Document name
Page number
Relevant excerpt
Retrieval score

Example:

Query Optimization.pdf
Page 42

"...histograms are commonly used for cardinality estimation..."

Similarity:
0.91

--------------------------------------------------
10. RETRIEVAL TRANSPARENCY PANEL
--------------------------------------------------

Add a collapsible panel called:

"How did RAGENT find this answer?"

When expanded, show:

Original query:
"Why does cardinality estimation matter?"

Query rewriting:
"importance of cardinality estimation in query optimization"

Documents searched:
3

Chunks retrieved:
20

Chunks reranked:
5

Chunks used:
4

Confidence:
91%

Response time:
1.72 sec

Then show retrieved chunks:

1. Query Optimization.pdf
   Page 42
   Similarity 0.91

2. Database Systems.pdf
   Page 118
   Similarity 0.86

3. Query Optimization.pdf
   Page 45
   Similarity 0.81

Make each result expandable.

Show a visual retrieval pipeline:

Query
↓
Query Rewrite
↓
Hybrid Search
↓
Top 20 Chunks
↓
Reranker
↓
Top 5 Chunks
↓
LLM
↓
Answer

This panel should make the project feel technically sophisticated.

--------------------------------------------------
11. AGENT ACTIVITY INDICATOR
--------------------------------------------------

While answering, show a subtle agent activity timeline.

Example:

Thinking

✓ Understanding question
✓ Rewriting query
✓ Searching documents
✓ Reranking results
● Generating answer

Don't expose chain-of-thought or private reasoning.

Only show high-level system actions.

Once complete:

✓ Query analyzed
✓ Documents searched
✓ Relevant passages found
✓ Answer generated

--------------------------------------------------
12. CONFIDENCE / ABSTENTION UI
--------------------------------------------------

The system should clearly communicate when retrieval confidence is low.

High confidence:

● High confidence
91%

Medium:

● Moderate confidence
67%

Low:

● Low confidence
34%

If confidence is below the configured threshold, show:

"I couldn't find sufficient information in your documents to confidently answer this question."

Then show:

"Relevant information found:"
[retrieved sources]

This should feel like a deliberate feature, not an error.

--------------------------------------------------
13. CHAT INPUT
--------------------------------------------------

Bottom chat input should include:

Large rounded text box

Placeholder:

"Ask a question about your documents..."

Controls:

Attach
Document scope
Search mode
Send

Allow Enter to send.

Shift + Enter = new line.

While generating:

Stop generating

After completion:

Regenerate

--------------------------------------------------
14. SEARCH PAGE
--------------------------------------------------

Create a standalone document search page.

Header:

"Search Knowledge Base"

Search bar:

Search your documents...

Filters:

All documents
Specific document
Date
File type

Search results should show:

Document
Page
Relevant excerpt
Score

Example:

Query Optimization.pdf
Page 42

"...cardinality estimation is essential for choosing efficient query plans..."

Relevance:
91%

Clicking the result opens the document preview.

--------------------------------------------------
15. HYBRID SEARCH UI
--------------------------------------------------

In Settings / Retrieval Settings, allow the user to see and configure retrieval modes.

Options:

Vector Search
Keyword Search
Hybrid Search

Default:

Hybrid Search

Show a simple explanation:

Vector Search
Finds semantically similar content.

Keyword Search
Finds exact terminology and keywords.

Hybrid Search
Combines semantic and keyword retrieval.

If appropriate, expose a simple weighting control:

Semantic
████████░░ 80%

Keyword
██░░░░░░░░ 20%

Keep advanced settings collapsed by default.

--------------------------------------------------
16. RERANKING SETTINGS
--------------------------------------------------

Provide:

Enable reranking ✓

Retrieved candidates:
20

Final context:
5

Use sliders/dropdowns for these values.

Add tooltip:

"Retrieve a larger set of candidates first, then use a reranker to select the most relevant passages."

--------------------------------------------------
17. QUERY REWRITING SETTINGS
--------------------------------------------------

Settings:

Query rewriting
ON

Conversation-aware retrieval
ON

Query decomposition
AUTO

Provide simple explanations for each.

Do not overwhelm normal users.

Put advanced settings under:

"Advanced Retrieval"

--------------------------------------------------
18. DOCUMENT COMPARISON
--------------------------------------------------

Create a dedicated comparison mode.

User selects two or more documents.

Example:

Compare:

☑ Query Optimization.pdf
☑ Database Systems.pdf

Question:

"Compare their approaches to cardinality estimation."

Show output in a structured format:

Topic

Document A
Document B

For example:

Histograms
✓
✓

Sampling
✓
✓

Machine Learning
✗
✓

Also provide citations for each comparison point.

Add a "Differences" section and "Similarities" section.

--------------------------------------------------
19. SUMMARIZATION MODE
--------------------------------------------------

Allow users to summarize:

- Entire document
- Selected pages
- Selected text
- Multiple documents

UI:

Summarize
[Entire document ▼]

Length:
Short
Medium
Detailed

Style:
Academic
Simple
Bullet points

--------------------------------------------------
20. CONVERSATION HISTORY
--------------------------------------------------

Dedicated Conversations page.

Show:

Today
Yesterday
Previous 7 days
Older

Each conversation:

Title
Last message preview
Timestamp
Documents used

Actions:
- Open
- Rename
- Delete

Search conversations.

--------------------------------------------------
21. EVALUATION DASHBOARD
--------------------------------------------------

This is extremely important because this is a final-year academic project.

Create a polished Evaluation page.

Header:

"RAG Evaluation"

Subtitle:

"Measure retrieval and answer quality across your benchmark dataset."

Top statistics:

Answer Accuracy
87%

Faithfulness
91%

Retrieval Recall@5
84%

Citation Accuracy
94%

Average Latency
1.72s

Below:

Model / Pipeline Comparison

Show a clean comparison chart/table:

Vector Search
Accuracy: 79%

Hybrid Search
Accuracy: 84%

Hybrid + Reranker
Accuracy: 87%

Adaptive RAG
Accuracy: 89%

Include visual charts for:

Accuracy
Recall@K
Faithfulness
Latency

Allow changing the evaluation dataset.

--------------------------------------------------
22. EVALUATION QUESTION TABLE
--------------------------------------------------

Show individual benchmark questions.

Columns:

Question
Retrieved
Correct
Faithfulness
Latency

Example:

"What is cardinality estimation?"
✓
✓
94%
1.2s

Allow clicking a question to inspect:

- Question
- Expected answer
- Generated answer
- Retrieved chunks
- Sources
- Evaluation score

--------------------------------------------------
23. PERFORMANCE DASHBOARD
--------------------------------------------------

Show system-level metrics:

Total queries
Average latency
P50 latency
P95 latency
Average retrieval latency
Average generation latency
Cache hit rate

Use clean charts.

Include time range selector:

24 hours
7 days
30 days
All time

--------------------------------------------------
24. FEEDBACK UI
--------------------------------------------------

Every assistant answer should have:

👍 Helpful
👎 Not helpful

If the user clicks thumbs down, optionally show:

"What went wrong?"

Options:

Incorrect answer
Missing information
Wrong source
Poor explanation
Other

This feedback should be stored.

--------------------------------------------------
25. SETTINGS PAGE
--------------------------------------------------

Sections:

Account
Appearance
AI Model
Retrieval
Documents
Notifications

AI settings:

Model
Temperature
Maximum response length

Retrieval settings:

Search method
Top K
Reranking
Chunk count
Similarity threshold
Query rewriting

Advanced settings should be collapsed.

Use tooltips to explain technical settings.

--------------------------------------------------
26. EMPTY STATES
--------------------------------------------------

Design polished empty states throughout the application.

No documents:

"No documents yet"

"Upload documents to build your knowledge base."

[Upload Documents]

No conversations:

"No conversations yet"

"Start a conversation with your knowledge base."

No search results:

"No relevant content found."

"No matching passages were found in your selected documents."

--------------------------------------------------
27. LOADING STATES
--------------------------------------------------

Create polished skeleton/loading states.

Document processing:

Uploading
Extracting text
Chunking
Embedding
Indexing

Chat:

Searching knowledge base...
Reranking results...
Generating response...

Use subtle animated indicators.

Never leave the user staring at a blank screen.

--------------------------------------------------
28. ERROR STATES
--------------------------------------------------

Handle:

Upload failure
Unsupported file
Indexing failure
LLM failure
Retrieval failure
Network failure

Example:

"Unable to index document"

"Something went wrong while processing Query Optimization.pdf."

[Retry]

--------------------------------------------------
29. TOOLTIPS
--------------------------------------------------

Use tooltips for technical terms:

Embedding
Vector Search
BM25
Reranking
Chunk
Similarity
Recall@K
Faithfulness
Q-error

Example:

"Reranking: Reorders retrieved passages using a more accurate relevance model."

Keep technical information accessible without cluttering the interface.

--------------------------------------------------
30. RESPONSIVE DESIGN
--------------------------------------------------

Desktop:
Full sidebar + main content + optional retrieval panel.

Tablet:
Collapsible sidebar.

Mobile:
Bottom navigation or slide-out navigation.

Chat must work properly on mobile.

Tables should become horizontally scrollable or transform into cards.

--------------------------------------------------
31. MICRO-INTERACTIONS
--------------------------------------------------

Add subtle animations:

- Sidebar transitions
- Dropdown animations
- Modal transitions
- Upload progress
- Message appearance
- Source expansion
- Retrieval panel expansion
- Button hover states
- Toast notifications

Keep animations subtle and professional.

Do not use excessive animations.

--------------------------------------------------
32. ACCESSIBILITY
--------------------------------------------------

Implement:

- Keyboard navigation
- Visible focus states
- Accessible buttons
- Proper labels
- Good contrast
- Screen-reader-friendly structure
- Tooltips that are keyboard accessible

--------------------------------------------------
33. OVERALL UX FLOW
--------------------------------------------------

The primary user journey should be:

1. User signs in
2. Lands on dashboard
3. Uploads documents
4. Documents are processed/indexed
5. User starts a new chat
6. User selects relevant documents
7. User asks a question
8. Agent analyzes the query
9. System searches the knowledge base
10. Results are reranked
11. Agent generates answer
12. Answer displays citations
13. User can inspect sources
14. User can inspect retrieval details
15. User can provide feedback
16. Conversation is automatically saved

--------------------------------------------------
34. VISUAL HIERARCHY
--------------------------------------------------

Prioritize the following visual hierarchy:

1. User question
2. AI answer
3. Sources
4. Retrieval confidence
5. Retrieval details
6. Advanced technical information

The technical details should be available without overwhelming the normal user.

--------------------------------------------------
35. IMPORTANT PRODUCT PRINCIPLE
--------------------------------------------------

This should NOT look like:

"ChatGPT + PDF upload"

It should look like:

"An explainable RAG research platform."

The most important differentiators should be:

- Source-grounded answers
- Citation inspection
- Retrieval transparency
- Hybrid search
- Reranking
- Query rewriting
- Document comparison
- Confidence-based abstention
- Agent activity
- Evaluation dashboard
- Performance metrics

Make these features visually discoverable.

--------------------------------------------------
36. SAMPLE DATA
--------------------------------------------------

Populate the UI with realistic sample data so the application looks complete immediately.

Documents:

Query Optimization.pdf
Database Systems.pdf
Cardinality Estimation Survey.pdf
Learned Query Optimization.pdf
Operating Systems.pdf

Example conversations:

"How does cardinality estimation work?"
"Compare histogram and sampling approaches"
"Summarize the query optimization paper"
"Explain B+ tree indexing"

Example metrics:

Documents: 27
Chunks: 18,432
Questions: 1,284
Average latency: 1.72s
Answer accuracy: 87%
Faithfulness: 91%
Retrieval Recall@5: 84%

--------------------------------------------------
37. FINAL DESIGN GOAL
--------------------------------------------------

The finished application should be polished enough to demonstrate as a final-year computer science project.

A professor should immediately be able to understand:

1. What the system does
2. How documents are managed
3. How the RAG pipeline works
4. Where answers came from
5. How retrieval can be inspected
6. How the system handles uncertainty
7. How different retrieval strategies can be evaluated

Prioritize a coherent, production-quality UX over simply adding more features.

Build the complete frontend experience with reusable components, realistic states, responsive layouts, and polished interactions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cbdb02bf-0cab-4f40-8e73-f2cdedf2a1b5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
