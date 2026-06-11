import { ShowcaseProjectType } from "./types";

/**
 * Clock-M — full-stack SaaS time-tracking & team platform, built end-to-end.
 * Copy is written for a mixed audience (technical + non-technical) and uses
 * generic infrastructure terms (VPS / S3-compatible storage) rather than vendor names.
 *
 * Demo credentials are NOT stored here — they live in the backend email template that
 * answers the demo-access form, so they are never shipped in the public bundle.
 */
const clockM: ShowcaseProjectType = {
  slug: "clock-m",
  name: "Clock-M",
  tagline:
    "A multi-tenant SaaS platform for time tracking and team management — clock in/out, run projects, manage a team, and pull monthly reports.",
  year: "2025",
  role: "Solo — database, API, web, mobile & deployment",
  intro: [
    "Clock-M is a complete time-tracking and team-management product. People clock in and out, log breaks and trips, organise work into projects and tasks, run a team with proper roles and permissions, and export clean monthly reports — all in one place.",
    "It’s multi-tenant: one account can belong to several team workspaces, and each team’s data stays cleanly separated. I built every layer myself — the database, the API, the web app, a mobile companion app, and the deployment that runs it in production.",
  ],
  liveUrl: "https://clock.nizar-web.de",
  sourceNote: "Private — available on request",
  screenshots: [
    {
      srcDesktop: "/showcase/clock-m/des/home-dark-des.png",
      srcMobile: "/showcase/clock-m/mob/home-mob.png",
      alt: "Clock-M dashboard with a live clock-in timer",
      caption: "Dashboard — live timer, breaks & trips, today’s tasks.",
      size: "hero",
    },
    {
      srcDesktop: "/showcase/clock-m/rn-ai/native-app.png",
      srcMobile: "/showcase/clock-m/rn-ai/native-app.png",
      alt: "Clock-M native mobile app — timer screen",
      caption: "Mobile app — a React Native companion app.",
      size: "tall",
    },
    {
      srcDesktop: "/showcase/clock-m/des/report-des.png",
      srcMobile: "/showcase/clock-m/mob/report-mob.png",
      alt: "Clock-M monthly report with per-day totals",
      caption: "Monthly report — per-day totals, Excel export.",
      size: "small",
    },
    {
      srcDesktop: "/showcase/clock-m/des/tasks-page-des.png",
      srcMobile: "/showcase/clock-m/mob/tasks-mob.png",
      alt: "Clock-M tasks page",
      caption: "Tasks — priorities, statuses, due dates, assignees.",
      size: "small",
    },
    {
      srcDesktop: "/showcase/clock-m/des/goals-projects-des.png",
      srcMobile: "/showcase/clock-m/mob/goals-porject-mob.png",
      alt: "Clock-M goals and projects board",
      caption: "Projects & goals — organised work with categories.",
      size: "small",
    },
    {
      srcDesktop: "/showcase/clock-m/des/teams-des.png",
      srcMobile: "/showcase/clock-m/mob/teams-mob.png",
      alt: "Clock-M team members and roles",
      caption: "Team — members, roles, invitations, permissions.",
      size: "wide",
    },
    {
      srcDesktop: "/showcase/clock-m/des/absence-des.png",
      srcMobile: "/showcase/clock-m/mob/absence-mob.png",
      alt: "Clock-M absence requests",
      caption: "Absences — vacation & sick leave with approval flow.",
      size: "wide",
    },
    {
      srcDesktop: "/showcase/clock-m/des/schedules-page-des.png",
      srcMobile: "/showcase/clock-m/mob/schedules-mob.png",
      alt: "Clock-M shift schedules",
      caption: "Schedules — recurring shifts for members & locations.",
      size: "small",
    },
    {
      srcDesktop: "/showcase/clock-m/des/clients-des.png",
      srcMobile: "/showcase/clock-m/mob/clients-mob.png",
      alt: "Clock-M clients list",
      caption: "Clients — track time against customers.",
      size: "small",
    },
    {
      srcDesktop: "/showcase/clock-m/des/locations-des.png",
      srcMobile: "/showcase/clock-m/mob/locations-mob.png",
      alt: "Clock-M locations",
      caption: "Locations — physical sites for on-site work.",
      size: "small",
    },
    {
      srcDesktop: "/showcase/clock-m/des/home-light-des.png",
      alt: "Clock-M dashboard in light theme",
      caption: "Light theme — the same dashboard, different mood.",
      size: "wide",
    },
    {
      srcDesktop: "/showcase/clock-m/des/setting-appea-des.png",
      srcMobile: "/showcase/clock-m/mob/setting-appe-mob.png",
      alt: "Clock-M appearance settings",
      caption: "Theming — light/dark with multiple accent colors.",
      size: "wide",
    },
    {
      srcDesktop: "/showcase/clock-m/des/setting-lang-region-des.png",
      srcMobile: "/showcase/clock-m/mob/lang-region-mob.png",
      alt: "Clock-M language and region settings",
      caption: "i18n — 5 languages, per-user region settings.",
      size: "wide",
    },
    {
      srcDesktop: "/showcase/clock-m/rn-ai/ai-assistant.png",
      alt: "Clock-M AI assistant chat with a streamed project summary",
      caption: "AI assistant — chat with project & file context.",
      size: "wide",
    },
  ],
  features: [
    {
      icon: "⏱️",
      title: "Time tracking",
      body: "Clock in/out as work sessions, with nested breaks and trips. The live timer survives refreshes, restarts and the mobile app — it never drifts.",
    },
    {
      icon: "📊",
      title: "Monthly reports",
      body: "Per-day work, break and trip totals with drill-down into individual sessions, plus one-click Excel export.",
    },
    {
      icon: "🗂️",
      title: "Projects & tasks",
      body: "Projects with categories, links and docs; to-dos with priorities, statuses, due dates, assignees and drag-to-reorder.",
    },
    {
      icon: "👥",
      title: "Team workspaces",
      body: "Multi-tenant by design: own or join multiple teams, with owner / manager / employee roles, email invitations and role-based permissions.",
    },
    {
      icon: "🏖️",
      title: "Absences & schedules",
      body: "Request vacation or sick leave with attachments and a manager approval flow, and plan recurring shifts for members, clients and locations.",
    },
    {
      icon: "📁",
      title: "File storage",
      body: "Nested folders, previews, downloads and public share links, backed by S3-compatible cloud storage with per-team quotas.",
    },
    {
      icon: "🤖",
      title: "AI assistant",
      body: "An in-app chat assistant with streaming responses and project/file context, powered by the Claude API.",
    },
    {
      icon: "💳",
      title: "Billing & GDPR",
      body: "Stripe subscriptions with seat-based plans, plus self-service data export and account deletion. Available in 5 languages.",
    },
  ],
  highlights: [
    {
      title: "True multi-tenant data model",
      body: "Every record (sessions, projects, notes, schedules, absences) is scoped to a person’s membership in a specific team — not just their user id. So the same person’s data stays cleanly isolated across all the teams they belong to.",
    },
    {
      title: "Hand-written SQL, no ORM",
      body: "All data access is hand-written, parameterized SQL on a shared PostgreSQL connection pool — full control over queries, joins and indexes. The schema is a normalized 34-table design with UUID keys and soft deletes.",
    },
    {
      title: "Self-healing time tracking",
      body: "Forgotten clock-ins are auto-closed (capped at 16 hours or end-of-day), and the live timer never trusts a local counter — it recomputes totals from server timestamps, so it’s drift-free across refreshes, restarts and the mobile app.",
    },
    {
      title: "Direct-to-cloud uploads",
      body: "The browser uploads files straight to object storage using short-lived signed URLs — the bytes never pass through the API server. Includes per-team storage quotas and client-side image compression.",
    },
    {
      title: "Full auth lifecycle",
      body: "Stateless JWT auth with email verification and password reset via single-use, expiring tokens. Account verification is re-checked on every request, not just at login — plus a founder-approval flow that stages destructive actions behind an email-confirmed token.",
    },
    {
      title: "One contract for web & mobile",
      body: "A single typed API client and shared types are reused by both the web app and the React Native mobile app — one source of truth for the whole API.",
    },
  ],
  stack: [
    { layer: "Frontend", tech: "React · TypeScript · Vite · Tailwind CSS · Jotai · TipTap · dnd-kit · Framer Motion" },
    { layer: "Mobile", tech: "React Native (Expo) · shared SDK & types with the web app" },
    { layer: "Backend", tech: "Node.js · Express · TypeScript · raw SQL (no ORM) · JWT · bcrypt" },
    { layer: "Database", tech: "PostgreSQL — 34-table normalized schema, all-UUID keys, soft deletes" },
    { layer: "Storage", tech: "S3-compatible object storage via signed URLs" },
    { layer: "AI", tech: "Claude API (streaming responses)" },
    { layer: "Payments", tech: "Stripe — subscriptions, seats, billing portal" },
    { layer: "Deployment", tech: "Docker (multi-stage) · nginx · self-hosted on a VPS" },
    { layer: "Testing", tech: "Jest + supertest (backend) · Playwright (web e2e)" },
  ],
  demo: {
    note: "Logs you straight into a populated team workspace — 6 people, ~2 months of time history, projects, tasks, clients, schedules and reports already filled in.",
  },
};

export default clockM;
