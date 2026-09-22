import json

diagrams = {
    "omni-metrics": """flowchart LR
  Client["Client Telemetry<br/>(10,000 req/s)"] --> Worker["Go HTTP Worker Pool<br/>(Zero Allocations)"]
  Worker --> Buffer["In-Memory Ring Buffer<br/>(1,000 items / 250ms)"]
  Buffer --> Sink[("ClickHouse MergeTree<br/>Columnar Bulk Stream")]
  Sink --> UI["Real-Time Dashboard<br/>⚡ P99 < 180ms"]""",

    "pulseflow": """flowchart LR
  UserA["Engineer A (Offline)"] -.-> LocalDB["IndexedDB Local Storage"]
  UserB["Engineer B (Online)"] --> WS["WebSocket Sync Relay"]
  LocalDB -- Reconnect --> WS
  WS --> CRDT["Deterministic CRDT Merge Engine"]""",

    "archlens": """flowchart LR
  Figma["Design Tokens (Figma / JSON)"] --> Compiler["Style-Dictionary Token Compiler"]
  Compiler --> CSS["CSS Custom Variables"]
  Compiler --> TS["TypeScript Strict Types"]
  CSS & TS --> Primitives["Headless Primitives (WCAG AAA)"]""",

    "katalog-commerce": """flowchart LR
  User["Mobile Shopper"] --> Edge["Cloudflare Edge Cache"]
  Edge --> SSR["Islands Engine<br/>(Sub-100ms HTML)"]
  SSR --> Cart["Instant Local Cart State"]
  Cart --> Stripe["Stripe Secure Checkout"]""",

    "zenithdb": """flowchart LR
  Client["Client Request"] --> Leader["Raft Leader Node"]
  Leader --> WAL["Write-Ahead Log (WAL)"]
  WAL --> FollowerA["Follower Node A"]
  WAL --> FollowerB["Follower Node B"]""",

    "devportal": """flowchart LR
  App["Frontend / Mobile App"] --> Edge["Cloudflare Workers Proxy"]
  Edge --> Validator{"Schema Validator"}
  Validator -- Live Backend Ready --> Upstream["Production Microservices"]
  Validator -- Mock Mode Active --> Mock["Dynamic Mock Engine"]"""
}

with open('app-react/src/data/portfolio.ts', 'r') as f:
    text = f.read()

# Update ProjectCaseStudy interface if not already updated
if 'mermaidDiagram?: string;' not in text:
    text = text.replace('theSolution: string;', 'theSolution: string;\n  mermaidDiagram?: string;')

# Add mermaidDiagram to each case study
for slug, diag in diagrams.items():
    slug_marker = f'slug: "{slug}",'
    if slug_marker in text:
        pos = text.find(slug_marker)
        cs_pos = text.find('caseStudy: {', pos)
        sol_pos = text.find('theSolution:', cs_pos)
        eol = text.find('\n', sol_pos)
        # Check if already added
        sub = text[cs_pos:eol + 200]
        if 'mermaidDiagram:' not in sub:
            diag_str = json.dumps(diag)
            insert_str = f'\n      mermaidDiagram: {diag_str},'
            text = text[:eol] + insert_str + text[eol:]

with open('app-react/src/data/portfolio.ts', 'w') as f:
    f.write(text)

print('Successfully injected all mermaid diagrams into app-react/src/data/portfolio.ts')
