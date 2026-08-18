import type { DocumentContent } from "./types";

export const projectDocuments: Record<string, DocumentContent> = {
  codeloom: {
    kind: "markdown",
    title: "CodeLoom",
    status: "live",
    blocks: [
      {
        type: "callout",
        text: "The latest venture. He named it like a company, licensed it MIT, stood up four coming-soon sites, and wrote in the GitHub description that it is an 'aducative' attempt at Devin — typo included, honesty included. Then he published the part that is not a landing page: an agent cannot grep a real repo and call it architecture.",
      },
      {
        type: "p",
        text: "CodeLoom is a family of surfaces around one job: take a ticket, understand the repository, patch it, run tests, open a pull request. The public pitch is a Devin-shaped loop. The actual engineering so far is the comprehension layer — how an agent reads code without burning the context window — plus a deliberately small tool-use runtime that proves the loop is a loop, not a framework.",
      },
      {
        type: "links",
        items: [
          { label: "codeloom.iresharma.com — agent landing", href: "https://codeloom.iresharma.com" },
          { label: "ide.codeloom.iresharma.com", href: "https://ide.codeloom.iresharma.com" },
          { label: "tui.codeloom.iresharma.com", href: "https://tui.codeloom.iresharma.com" },
          { label: "cli.codeloom.iresharma.com", href: "https://cli.codeloom.iresharma.com" },
          { label: "github.com/iresharma/codeloom", href: "https://github.com/iresharma/codeloom" },
          {
            label: "github.com/iresharma/codeloom.experiments",
            href: "https://github.com/iresharma/codeloom.experiments",
          },
          { label: "github.com/iresharma/codeloom.pages", href: "https://github.com/iresharma/codeloom.pages" },
          {
            label: "WatchIreshStruggle — Why a coding agent needs three ways to read code",
            href: "https://blog.iresharma.com/why-a-coding-agent-needs-three-different-ways-to-read-code",
          },
        ],
      },
      {
        type: "h2",
        text: "What it is",
      },
      {
        type: "p",
        text: "The mother repo is an educational attempt at an end-to-end coding agent, with experiments and docs checked in on purpose. Submodules point at the experiment scripts and at a Turborepo of four Next.js landings — agent, IDE, TUI, CLI — so the family looks like a product line while the runtime is still being grown in public. The landing copy is load-bearing: explore, patch, test, pull request. You keep the merge button.",
      },
      {
        type: "quote",
        text: "CodeLoom is a Devin-shaped agent that explores the repo, plans, patches, runs tests, and opens a PR. Educational, open, and still very coming soon.",
        source: "codeloom.iresharma.com",
        href: "https://codeloom.iresharma.com",
      },
      {
        type: "quote",
        text: "An aducative attempt at making something like devin, since it is an educative attempt this repo includes all experiment and relate docs",
        source: "github.com/iresharma/codeloom",
        href: "https://github.com/iresharma/codeloom",
      },
      {
        type: "h2",
        text: "The first problem is not generation",
      },
      {
        type: "p",
        text: "The blog post that belongs to this project is not a launch announcement. It is a systems argument. Before an agent can safely edit a codebase it has to answer local questions (where is this function) and relational ones (what calls it, what does the type checker think, is this even valid). Handing the model read_file and grep works on a toy. On anything real it rereads whole files for one symbol, and it cannot tell two parse_config functions apart across directories.",
      },
      {
        type: "quote",
        text: "If you're building something like Devin, an agent that goes end-to-end from a task description to a working code change. The very first problem you hit isn't code generation. It's comprehension.",
        source: "WatchIreshStruggle · Aug 2026",
        href: "https://blog.iresharma.com/why-a-coding-agent-needs-three-different-ways-to-read-code",
      },
      {
        type: "p",
        text: "The design is two tools that sound similar and are not. Tree-sitter parses one file in milliseconds, finds definition-shaped nodes, and returns 1-based coordinates. LSP is a long-running JSON-RPC process — initialize handshake, a background reader thread because servers talk back, warm-start because gopls and pyright do their expensive work as a side effect of didOpen. Tree-sitter does not resolve imports. LSP does. The system prompt tells the model to prefer the cheapest tool that answers the question.",
      },
      {
        type: "quote",
        text: "That's a small detail, but it matters LSP calls are positional (a line/column in a file), and models are bad at counting characters by eye from a text dump. Tree-sitter becomes the thing that hands the model correct coordinates to hand back to the LSP.",
        source: "WatchIreshStruggle · three ways to read code",
        href: "https://blog.iresharma.com/why-a-coding-agent-needs-three-different-ways-to-read-code",
      },
      {
        type: "ul",
        items: [
          "find_symbol is tree-sitter: parse this file, match a name, return a position. No project index. Works with broken imports elsewhere.",
          "goto_definition, find_references, hover, get_diagnostics are LSP. pyright, gopls, typescript-language-server — each configured honestly, not as one generic server.",
          "Warm-start opens up to 500 source files in a background thread so indexing overlaps the agent's first exploration turns.",
          "Tools speak 1-based lines to the model; LSP is 0-based. Every call translates both ways. Wrong by one is a silent wrong edit.",
          "Open questions written down on purpose: diagnostics live in memory, no didChange yet, no invalidation after the agent starts writing.",
        ],
      },
      {
        type: "h2",
        text: "The runtime is a while loop",
      },
      {
        type: "p",
        text: "The experiments repo is the other half of the honesty. The first script is a single-file CLI agent: Claude tool-use, a dict of Python functions, a turn cap so a buggy loop cannot run forever. read_file, write_file, run_shell. No hidden state. That is the shape everything else has to earn.",
      },
      {
        type: "quote",
        text: "Nothing here is magic. There's no framework, no hidden state. Just a while loop, a dict of Python functions, and the Claude API's tool-use feature.",
        source: "codeloom.experiments · ex_1.py",
        href: "https://github.com/iresharma/codeloom.experiments",
      },
      {
        type: "p",
        text: "The pages repo is pnpm workspaces and Turborepo: four Next.js apps, shared UI, product metadata and hosts in packages/config. Railway, one service per surface. The README is explicit that these are not a company. They are an open-source resume with a domain name.",
      },
      {
        type: "links",
        items: [
          {
            label: "Read the comprehension post",
            href: "https://blog.iresharma.com/why-a-coding-agent-needs-three-different-ways-to-read-code",
          },
        ],
      },
    ],
  },
  "lens-distill": {
    kind: "markdown",
    title: "Lens Distill",
    status: "live",
    blocks: [
      {
        type: "callout",
        text: "He started Venture Deals three times. He finished a pipeline. The book is still unread in order. The graph has 318 edges. This is the most Iresh project in the tree: a format problem treated as an infrastructure problem, then written up so the silent failures cannot be rebranded as features.",
      },
      {
        type: "p",
        text: "Lens Distill takes a PDF and a free-text topic lens and turns them into atomic claims with paragraph citations, a canonical concept vocabulary, and a sparse graph of prerequisite, related, and confusable edges. The Next.js app is a window. The work is a linear seven-stage job queue on Neon Postgres with pgvector. Parse is the boss fight. Silent fallbacks are how demos lie.",
      },
      {
        type: "links",
        items: [
          { label: "distill.iresharma.com — live demo", href: "https://distill.iresharma.com" },
          { label: "github.com/iresharma/lens-distill", href: "https://github.com/iresharma/lens-distill" },
          {
            label: "WatchIreshStruggle — I never finished Venture Deals, so I built a pipeline",
            href: "https://blog.iresharma.com/i-never-finished-venture-deals-so-i-built-a-pipeline-to-read-it-for-me",
          },
        ],
      },
      {
        type: "h2",
        text: "Seven stages, one line",
      },
      {
        type: "quote",
        text: "The whole system is a linear job queue. No DAG, no fan out, no orchestration framework, no cron. Each stage writes its rows and enqueues exactly one next job, or returns null and the book is done.",
        source: "WatchIreshStruggle · Venture Deals pipeline",
        href: "https://blog.iresharma.com/i-never-finished-venture-deals-so-i-built-a-pipeline-to-read-it-for-me",
      },
      {
        type: "ul",
        items: [
          "0 parse — PDF bytes to paragraphs with global indices. pdfjs-dist. Binary discarded; paragraphs stay.",
          "1 chunk — ~1200 token windows, 150 overlap, hard break on chapter. js-tiktoken. Average-size gate catches exploded chapter detection.",
          "2 embed — text-embedding-3-small, 1536-d, batch 100, HNSW cosine on Neon.",
          "3 extract — Haiku, 40 chunks per job, concurrency 4, forced emit_claims tool. Persona is fenced user text, not the system prompt.",
          "4 dedupe — cosine 0.86 clusters, 0.92 auto-merge, Sonnet only on the band in between. ~70% of wall clock.",
          "5 canonicalize — string first, embeddings last. Negation prefixes never merge. participating vs nonparticipating is a regex, not a better model.",
          "6 concepts — a tag becomes a node at ≥8 claims. primary_chapter is the modal chapter, not MIN().",
          "7 concept_graph — Opus, typed edges, ≥80% coverage or throw. Prerequisite cycles broken with a recursive CTE.",
        ],
      },
      {
        type: "h2",
        text: "Citations are a range check",
      },
      {
        type: "p",
        text: "Every paragraph is labeled [p412] in the prompt, using a global monotonic para_index as primary key (book_id, para_index). The model cites by marker. The code checks that every support_paras index falls inside the source chunk. Hallucinated [p9001] is dropped and counted. No LLM judge. Per-chapter indices were tried first; they collide on joins and the join succeeds.",
      },
      {
        type: "quote",
        text: "Inline markers turn citation into a range check. Labeling paragraphs [p412] costs a few tokens and buys deterministic verification. Never let a model invent identifiers you plan to join on.",
        source: "WatchIreshStruggle · cheat sheet",
        href: "https://blog.iresharma.com/i-never-finished-venture-deals-so-i-built-a-pipeline-to-read-it-for-me",
      },
      {
        type: "h2",
        text: "Fail loud, or the UI will look fine",
      },
      {
        type: "p",
        text: "A wrapped heading produced 157 chapters instead of 21. Nothing threw. Chunks fragmented, claims went context-free, ten dollars later the graph was a cloud of junk. The fix is gates: chapter count in [5, 40], demote 'chapters' with fewer than 15 paragraphs, drop headers that appear on >30% of pages, fail closed on page numbers unless offset agreement clears 0.8. The graph bug that shipped was worse: max_tokens truncated JSON, the parser returned [], the fallback drew a tag-only graph of disconnected dots, the book was marked ready.",
      },
      {
        type: "quote",
        text: "Silent fallbacks are how demos lie. A fallback that produces a structurally different result (empty edges, fake pages, a tag only graph) is worse than a crash, because a crash gets fixed and a fallback gets shipped.",
        source: "WatchIreshStruggle · concept_graph",
        href: "https://blog.iresharma.com/i-never-finished-venture-deals-so-i-built-a-pipeline-to-read-it-for-me",
      },
      {
        type: "p",
        text: "On Venture Deals: 3,001 paragraphs, 21 chapters, 109 chunks, ~978 live claims, ~54 concepts, ~318 edges. About an hour. About two dollars. Site-wide quota of three books per rolling week, advisory lock, PDF never stored. Forced tools, citation range checks, and a spend cap — in that order — because a deny list is the weakest layer and the one everyone reaches for first.",
      },
      {
        type: "quote",
        text: "Portfolio demo: upload a PDF and an extract.md persona, run a real book-distillation pipeline, and inspect claims, concepts, a concept graph, and claim-embedding clusters. Drain starts automatically after upload (after() + chained continue). No cron worker, no manual stage-advance UI.",
        source: "github.com/iresharma/lens-distill",
        href: "https://github.com/iresharma/lens-distill",
      },
    ],
  },
  seeksphere: {
    kind: "markdown",
    title: "SeekSphere",
    status: "live",
    blocks: [
      {
        type: "callout",
        text: "He worked at SuperTokens. Of course the search SDK is pitched like Clerk and SuperTokens. 'Show me red running shoes under three thousand that are actually in stock' is just sessions for people who sell shoes. The satire writes itself. The pipeline does not: intent, entities, SQL, millisecond reads off a pre-processed catalog.",
      },
      {
        type: "p",
        text: "SeekSphere is a natural-language search layer for e-commerce. The product bet is that filter drawers are a UI for a query planner humans should not have to operate. A shopper talks. A classifier pulls intent, brands, categories, attributes. An LLM step, exposed through MCP, compiles that into SQL against a catalog that has already been shaped for retrieval. The developer surface is an SDK you drop in the way you drop in auth.",
      },
      {
        type: "links",
        items: [
          { label: "seeksphere.ai — product", href: "https://www.seeksphere.ai/" },
        ],
      },
      {
        type: "h2",
        text: "The problem, as the product states it",
      },
      {
        type: "p",
        text: "E-commerce search still mostly means a text box plus a stack of facets. That works if the shopper already knows the schema. It fails the moment the query is a sentence: constraints, negations, stock, price, brand, 'like this but not that.' SeekSphere's public architecture is a four-step path from that sentence to a result set, with the interesting work in the middle two steps — classification and compilation — not in the search box.",
      },
      {
        type: "quote",
        text: "Transform complex filter-heavy experiences into simple, conversational queries. The future of intelligent search for e-commerce platforms.",
        source: "seeksphere.ai",
        href: "https://www.seeksphere.ai/",
      },
      {
        type: "ul",
        items: [
          "Natural language in. A classifier reads intent, entities, and context — brands, categories, attributes, preferences.",
          "LLM processing over MCP turns that structure into optimized SQL, not a keyword soup scored by hope.",
          "Reads are aimed at a pre-processed catalog so the interactive path stays in milliseconds even when the product set is large.",
          "MCP connectors sit in front of catalogue APIs and inventory databases instead of pretending one schema is universal.",
        ],
      },
      {
        type: "quote",
        text: "Our classifier analyzes intent, entities, and context. Advanced NLP converts to optimized SQL queries.",
        source: "seeksphere.ai · How it works",
        href: "https://www.seeksphere.ai/",
      },
      {
        type: "h2",
        text: "Developer-first, on purpose",
      },
      {
        type: "p",
        text: "The go-to-market is two-tier, and the interesting one is the SDK. Large catalogs get an embeddable client in the same shape as an auth provider: install, configure, search(query). Smaller shops get a plugin. That split is a SuperTokens lesson applied to retrieval — the hard product is not the demo query, it is the integration surface that does not force a rewrite of the storefront.",
      },
      {
        type: "quote",
        text: "Easy integration with existing e-commerce platforms. Similar to Clerk and SuperTokens model.",
        source: "seeksphere.ai · Developer-first SDK",
        href: "https://www.seeksphere.ai/",
      },
      {
        type: "p",
        text: "The public snippet is the whole contract: install @seeksphere/sdk, call seeksphere.search(query), get results. Behind that call is the classifier, the LLM-to-SQL step, and the connector layer. The portfolio joke is that this is auth-shaped infrastructure. The technical claim is that search quality lives in how you compile language into a query plan, and how you keep that plan off the hot path of an unindexed product table.",
      },
    ],
  },
  reach: {
    kind: "markdown",
    title: "Reach",
    status: "live",
    blocks: [
      {
        type: "callout",
        text: "Started as a SaaS. Became a lifestyle. The GitHub org chart is the confession: reach-io-remix, reachv2, reach-auth-proxy, reach-page-server, reach-page-analytics, Reach-file-server, reach-kanban-service, reach-k8s, a Bun starter script so he could boot the whole circus. He said he wanted to learn error handling. He learned gRPC, Glacier, and how many databases a calendar app can acquire.",
      },
      {
        type: "p",
        text: "Reach is a work desk for content-heavy teams: issue tracking, files and versions, review, calendar, mail, Shopify, analytics, and a Linktree-shaped brand page. Version one was a Remix monolith with loaders full of backend. Version two is a Remix SSR talking to a Go auth proxy that fans out over gRPC to Go and Python services, Postgres, Redis, Cloudflare R2 with a Kafka relay into Glacier, and a Next.js ISR farm for the public pages.",
      },
      {
        type: "links",
        items: [
          { label: "github.com/iresharma/reachv2 — Remix + shadcn frontend", href: "https://github.com/iresharma/reachv2" },
          {
            label: "github.com/iresharma/reach-io-remix — archived monolith",
            href: "https://github.com/iresharma/reach-io-remix",
          },
          {
            label: "github.com/iresharma/reach-auth-proxy — Go session proxy",
            href: "https://github.com/iresharma/reach-auth-proxy",
          },
          {
            label: "github.com/iresharma/reach-page-server — Next.js ISR pages",
            href: "https://github.com/iresharma/reach-page-server",
          },
          {
            label: "github.com/iresharma/Reach-file-server — Flask, R2, Kafka",
            href: "https://github.com/iresharma/Reach-file-server",
          },
          {
            label: "WatchIreshStruggle — From a Remix monolith to microservices",
            href: "https://blog.iresharma.com/from-a-remix-monolith-to-microservices",
          },
          {
            label: "WatchIreshStruggle — Learning ROP: resiliency, observability, performance",
            href: "https://blog.iresharma.com/learning-rop-resiliency-observability-and-performance",
          },
          {
            label: "WatchIreshStruggle — Making linktr.ee using Next 13 and Vercel",
            href: "https://blog.iresharma.com/making-linktree-using-next-13-and-vercel",
          },
          {
            label: "WatchIreshStruggle — Calculating analytics for webpages",
            href: "https://blog.iresharma.com/calculating-analytics-for-webpages",
          },
        ],
      },
      {
        type: "h2",
        text: "Why the monolith had to go",
      },
      {
        type: "p",
        text: "The first app put API surface in Remix loaders, actions, and handler routes. No TypeScript. Prisma on MongoDB. It taught error handling. It did not teach a clean boundary, and it did not perform. The rewrite keeps Remix as the SSR shell and moves authority to an auth proxy that is the only thing on the internet.",
      },
      {
        type: "quote",
        text: "I will still have a remix SSR that talks to RESTful API which acts as a auth proxy, this auth proxy then delegates traffic to all the other services via gRPC. … The go auth proxy on look is giving me extremely good performance. On my local setup with postgres and redis cache the auth proxy responds with sub millisecond responses.",
        source: "WatchIreshStruggle · Remix to microservices",
        href: "https://blog.iresharma.com/from-a-remix-monolith-to-microservices",
      },
      {
        type: "h2",
        text: "ROP as a stack, not a slogan",
      },
      {
        type: "p",
        text: "The later architecture post is explicit about the three goals — resiliency, observability, performance — and about the tax. Microservices give feature isolation, independent scale, and mixed runtimes. They also scatter logs and add network failure modes. The proxy exists so browsers never speak gRPC, so caching has one throat to choke, and so only one service is exposed. Protobufs and HTTP/2 are the inter-service bet; REST is the browser bet.",
      },
      {
        type: "quote",
        text: "Browser support for gRPC isn't great. Utilizing a proxy becomes particularly valuable when dealing with microservices that communicate using gRPC and Protobufs. … gRPC provides strong typing through Protobuf's schema definition.",
        source: "WatchIreshStruggle · Learning ROP",
        href: "https://blog.iresharma.com/learning-rop-resiliency-observability-and-performance",
      },
      {
        type: "ul",
        items: [
          "Frontend: Remix, shadcn/ui, Tailwind — reachv2 describes real-time collaboration, tasks, roles, chat, an analytics dashboard.",
          "Auth proxy: Go, Redis sessions, protoc-generated clients for kanban, page, and storage. Postman collection is the public contract.",
          "Files: Flask talking to Cloudflare R2, with a Kafka relay so objects also land in Glacier. Two vendors on purpose.",
          "Brand pages: Next 13 App Router, generateStaticParams from Mongo at build, generateMetadata from the page template, ISR. 'A URL shortener which instead of redirecting you to a link, shows you a page with a multitude of links.'",
          "Analytics: Flask ingest, Mongo aggregations. Views and clicks are events. Uniques are IP plus user-agent, which also feeds geo. The blog says a queue would be correct at scale; they shipped the simple path first.",
          "Orchestration: reach-k8s, plus a Bun script that starts every local service because twelve terminals is not a personality.",
        ],
      },
      {
        type: "quote",
        text: "A simple file server for handling files in Reach, also a relay for kafka to support data duplication into glacier.",
        source: "github.com/iresharma/Reach-file-server",
        href: "https://github.com/iresharma/Reach-file-server",
      },
      {
        type: "quote",
        text: "I create a Next 13 app with ISR. Now next allows me to use server components and things like generateStaticParams and generateMetaData. So during build time I look up my database for existing pages and generate params based on route.",
        source: "WatchIreshStruggle · Linktree on Next 13",
        href: "https://blog.iresharma.com/making-linktree-using-next-13-and-vercel",
      },
    ],
  },
  "g-notify": {
    kind: "markdown",
    title: "G-Notify",
    status: "live",
    blocks: [
      {
        type: "callout",
        text: "GDSC Lead. Twenty offer emails. Gmail's client would not send HTML. Nodemailer felt like cheating, or at least like not learning GAPIs. He wrote a mailer, then a product, then a landing page, then a blog post about fighting Nuxt SSG on Netlify the night before a DBMS exam. The origin story is recruiting. The stack is spite plus googleapis.",
      },
      {
        type: "p",
        text: "G-Notify is a mass HTML emailer. Nuxt on the front, Express on the back, Gmail API in the middle, no nodemailer. Templates are created, uploaded, and sent one-to-one or in bulk. Handlebars renders them. MIME is assembled in process. Mongo stores the records. Google Cloud Storage holds assets. Tracking exists; stats were the honest unchecked box.",
      },
      {
        type: "links",
        items: [
          { label: "github.com/iresharma/G-Notify", href: "https://github.com/iresharma/G-Notify" },
          {
            label: "github.com/iresharma/g-notify-landing",
            href: "https://github.com/iresharma/g-notify-landing",
          },
          {
            label: "WatchIreshStruggle — Nuxt on Netlify",
            href: "https://blog.iresharma.com/nuxt-on-netlify",
          },
        ],
      },
      {
        type: "h2",
        text: "Why it exists",
      },
      {
        type: "p",
        text: "The LinkedIn writeup is the spec. As GDSC Lead he had a core team to notify and did not want twenty manual emails. Gmail would not send HTML. A Python script with Jinja and the Gmail API proved the path. The product is that path with a UI: if student orgs and small teams cannot send crafted HTML from the account they already have, give them templates and OAuth instead of a new ESP.",
      },
      {
        type: "quote",
        text: "G-notify is a mass mailer written in nuxt snd express without any third party libraries like (nodemailer). We directly contact GAPIs to send the mail.",
        source: "github.com/iresharma/G-Notify",
        href: "https://github.com/iresharma/G-Notify",
      },
      {
        type: "h2",
        text: "What the repo actually ships",
      },
      {
        type: "ul",
        items: [
          "googleapis talks to Gmail. mimetext builds the message. handlebars fills templates. That is the send path.",
          "mongoose plus a dbURI. Templates, sends, tracking events — not a spreadsheet.",
          "@google-cloud/storage and a service-account JSON for the unofficial CDN: people upload images, the mailer hosts them.",
          "exceljs / read-excel-file for recipient lists. The recruiting use case was a roster, not a marketing automation suite.",
          "Puppeteer is in the tree for render or preview work that a browser, not an email client, can do.",
          "ApexCharts on the client. README: tracking yes, stats not done. The chart library arrived before the aggregation did.",
          "OAuth env: GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REDIRECT_URL. You send as the user, through Google, not through a rented SMTP.",
        ],
      },
      {
        type: "p",
        text: "The Netlify post is the operations chapter. asyncData in Nuxt SSR does not survive generate. He rewrote those hooks to mounted so the static site could fetch. Putting the Express app on Netlify Functions hit a 69,905,067-byte CreateFunction cap — puppeteer will do that. The workaround was CORS to the existing Heroku SSR API, with the generated frontend on Netlify. Ugly. Documented. Shipped the night before an exam.",
      },
      {
        type: "quote",
        text: "Request must be smaller than 69905067 bytes for the CreateFunction operation. … Then I needed up realising I already have an SSR version hosted on heroic, so I added soon CORS policies on that hosting and voila I had a version of my Application on Netlify contiously fetching data from a heroic server.",
        source: "WatchIreshStruggle · Nuxt on Netlify",
        href: "https://blog.iresharma.com/nuxt-on-netlify",
      },
    ],
  },
};
