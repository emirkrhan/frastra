export const metadata = {
  title: "Frastra - Modern Copy-Paste Next.js Components",
  description: "Build your component library with modern, copy-paste Next.js components. Beautiful, accessible UI components built with React and Tailwind CSS.",
  openGraph: {
    title: "Frastra - Modern Copy-Paste Next.js Components",
    description: "Build your component library with modern, copy-paste Next.js components. Beautiful, accessible UI components built with React and Tailwind CSS.",
  },
  twitter: {
    title: "Frastra - Modern Copy-Paste Next.js Components",
    description: "Build your component library with modern, copy-paste Next.js components. Beautiful, accessible UI components built with React and Tailwind CSS.",
  },
};

import DefaultFooter from "@/components/footer/DefaultFooter";
import Link from "next/link";
import Button from "@/components/button/Button";
 
 
import InteractiveAreaChart from "@/components/chart/InteractiveAreaChart";
import { DefaultAccordion } from "@/components/accordion/DefaultAccordion";
import { DefaultTabs } from "@/components/tabs/DefaultTabs";
import { DefaultSelect } from "@/components/select/DefaultSelect";
import FullPagination from "@/components/pagination/FullPagination";
import { Skeleton } from "@/components/skeleton/Skeleton";
import Spinner from "@/components/spinner/Spinner";
import DefaultInput from "@/components/input/DefaultInput";
import { TextareaWithLabel } from "@/components/textarea/TextareaWithLabel";
import DefaultCheckbox from "@/components/checkbox/DefaultCheckbox";
import Badge from "@/components/badge/Badge";
import { SimpleCard } from "@/components/card/SimpleCard";
import { ProjectCard } from "@/components/card/ProjectCard";

function DetailedProjectsTable() {
  const rows = [
    { id: 1, name: 'Project Alpha', tag: 'Web', assignee: 'John Doe', avatar: 'JD', status: 'active', priority: 'high', progress: 72, dueDate: '2024-08-15', updatedAt: '2d ago' },
    { id: 2, name: 'Website Redesign', tag: 'UI', assignee: 'Jane Smith', avatar: 'JS', status: 'pending', priority: 'medium', progress: 34, dueDate: '2024-09-01', updatedAt: '5h ago' },
    { id: 3, name: 'Mobile App', tag: 'iOS', assignee: 'Mike Johnson', avatar: 'MJ', status: 'completed', priority: 'low', progress: 100, dueDate: '2024-07-10', updatedAt: '1w ago' },
    { id: 4, name: 'API Development', tag: 'Backend', assignee: 'Sarah Wilson', avatar: 'SW', status: 'inactive', priority: 'high', progress: 12, dueDate: '2024-10-05', updatedAt: '3d ago' },
  ];

  const statusBadge = (status) => {
    const map = {
      active:  'border-success/20 text-success bg-success/10',
      pending: 'border-warning/20 text-warning bg-warning/10',
      completed: 'border-info/20 text-info bg-info/10',
      inactive: 'border-tertiary text-descriptive bg-secondary/50',
    };
    const dot = {
      active: 'bg-success',
      pending: 'bg-warning',
      completed: 'bg-info',
      inactive: 'bg-descriptive',
    };
    const colorCls = map[status] || 'border-border text-descriptive bg-secondary';
    const dotCls = dot[status] || 'bg-tips';
    return (
      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium border ${colorCls}`}>
        <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotCls}`} />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const priorityBadge = (priority) => {
    return (
      <span className="text-tips-size text-descriptive">
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-secondary">
      <table className="w-full">
        <thead className="bg-transparent">
          <tr>
            <th className="px-4 py-2 text-left text-[11px] font-tips text-tips uppercase tracking-wider">Project</th>
            <th className="px-4 py-2 text-left text-[11px] font-tips text-tips uppercase tracking-wider">Assignee</th>
            <th className="px-4 py-2 text-left text-[11px] font-tips text-tips uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 text-left text-[11px] font-tips text-tips uppercase tracking-wider">Priority</th>
            <th className="px-4 py-2 text-left text-[11px] font-tips text-tips uppercase tracking-wider">Due</th>
            <th className="px-4 py-2 text-left text-[11px] font-tips text-tips uppercase tracking-wider">Updated</th>
            <th className="px-4 py-2 text-right text-[11px] font-medium text-white/50 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-secondary transition-colors">
              <td className="px-4 py-2 text-paragraph-size text-paragraph font-paragraph">
                <div className="flex items-center gap-2">
                  <span>{row.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-descriptive bg-secondary">{row.tag}</span>
                </div>
              </td>
              <td className="px-4 py-2 text-paragraph-size text-paragraph">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <span className="text-[10px] font-tips text-paragraph">{row.avatar}</span>
                  </div>
                  {row.assignee}
                </div>
              </td>
              <td className="px-4 py-2 text-paragraph-size">{statusBadge(row.status)}</td>
              <td className="px-4 py-2 text-paragraph-size">{priorityBadge(row.priority)}</td>
              <td className="px-4 py-2 text-paragraph-size text-descriptive">{row.dueDate}</td>
              <td className="px-4 py-2 text-paragraph-size text-tips">{row.updatedAt}</td>
              <td className="px-4 py-2 text-paragraph-size text-right">
                <button className="px-2 py-1 text-tips-size rounded-md border border-border text-descriptive hover:bg-secondary">Open</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TeamCompact() {
  const members = [
    { id: 1, name: 'Alex Chen', role: 'Product Designer', avatar: 'AC', status: 'online' },
    { id: 2, name: 'Maya Rodriguez', role: 'Frontend Developer', avatar: 'MR', status: 'offline' },
    { id: 3, name: 'David Kim', role: 'Backend Developer', avatar: 'DK', status: 'away' },
    { id: 4, name: 'Emma Thompson', role: 'UI/UX Designer', avatar: 'ET', status: 'online' },
  ];

  const dot = (s) => {
    const m = { online: 'bg-success', away: 'bg-warning', offline: 'bg-descriptive' };
    return m[s] || 'bg-descriptive';
  };

  return (
    <ul className="space-y-1">
      {members.map((m) => (
        <li key={m.id} className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-primary/50 transition-colors">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
              <span className="text-[11px] font-tips text-paragraph">{m.avatar}</span>
            </div>
            <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-primary ${dot(m.status)}`} />
          </div>
          <div className="min-w-0">
            <div className="text-paragraph-size text-paragraph truncate">{m.name}</div>
            <div className="text-[11px] text-tips truncate">{m.role}</div>
          </div>
          <button className="ml-auto px-2 py-1 text-[11px] rounded-md border border-border text-descriptive hover:bg-primary/30">View</button>
        </li>
      ))}
    </ul>
  );
}

function ActivityCompact() {
  const items = [
    { id: 1, title: 'Alpha updated', desc: 'John moved task to In Review', time: '2h ago' },
    { id: 2, title: 'Design specs', desc: 'Emma uploaded 3 files', time: '7h ago' },
    { id: 3, title: 'New comment', desc: 'Maya left a note on API', time: '1d ago' },
    { id: 4, title: 'Release 1.2.0', desc: 'Deployed to production', time: '2d ago' },
  ];

  return (
    <ul className="space-y-1">
      {items.map((it) => (
        <li key={it.id} className="px-2 py-1.5 rounded-md hover:bg-primary/50 transition-colors">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-paragraph-size text-paragraph truncate">{it.title}</div>
              <div className="text-[11px] text-tips truncate">{it.desc}</div>
            </div>
            <span className="text-[11px] text-descriptive flex-shrink-0">{it.time}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-64 left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full blur-[120px]"
               style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.20), rgba(255,255,255,0) 75%)" }} />
          <div className="absolute inset-0 opacity-[0.03]"
               style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "32px 32px", backgroundPosition: "top left" }} />
        </div>
        <div className="relative max-w-8xl mx-auto px-6 py-16 md:py-20 text-center space-y-6">
            {/* Chip / Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white shadow-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span>Ready to ship</span>
            </div>

            {/* Başlık ve açıklama */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal text-white leading-tight tracking-tighter">
          Build faster than ever
        </h1>
            <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              Premium React components built with Tailwind CSS. Copy, paste, customize and ship beautiful interfaces in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Link href="/get-started/introduction">
                <Button variant="primary">Get Started</Button>
              </Link>
              <Link href="/components/accordion">
                <Button variant="outline">Browse Components</Button>
              </Link>
          </div>
        </div>
      </section>
      
      <div className="max-w-8xl mx-auto px-6">


        {/* Featured components → Dashboard Showcase */}
        <section className="mt-12 space-y-8">

          {/* Dashboard container */}
          <div className="rounded-2xl border border-border bg-transparent p-6">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Operational overview</h3>
                <p className="text-tips-size text-tips">A snapshot of key metrics, team activity and ongoing work</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex rounded-lg border border-border bg-secondary p-1">
                  <button className="px-2 py-1 text-tips-size rounded-md bg-secondary text-paragraph">7d</button>
                  <button className="px-2 py-1 text-tips-size rounded-md text-descriptive hover:text-paragraph">30d</button>
                  <button className="px-2 py-1 text-tips-size rounded-md text-descriptive hover:text-paragraph">90d</button>
                </div>
                <button className="px-3 py-1.5 text-tips-size rounded-md border border-border text-descriptive hover:bg-secondary">Export</button>
                <img src="/profile.jpg" alt="User" className="w-7 h-7 rounded-full border border-border object-cover" />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Active Projects */}
              <div className="rounded-xl border border-border bg-secondary p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Active Projects</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-white/5 px-1.5 py-0.5 text-[10px] text-green-400">Trending</span>
                </div>
                <div className="mt-1 text-2xl font-bold">24</div>
                <p className="mt-1 text-[12px] text-white/60">Ongoing initiatives across teams</p>
                
              </div>

              {/* Open Tasks */}
              <div className="rounded-xl border border-border bg-secondary p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Open Tasks</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-white/5 px-1.5 py-0.5 text-[10px] text-red-400">Backlog</span>
                </div>
                <div className="mt-1 text-2xl font-bold">132</div>
                <p className="mt-1 text-[12px] text-white/60">Requires review and assignment</p>
                
              </div>

              {/* Team Members */}
              <div className="rounded-xl border border-border bg-secondary p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Team Members</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-white/5 px-1.5 py-0.5 text-[10px] text-white/70">Active 12</span>
                </div>
                <div className="mt-1 text-2xl font-bold">18</div>
                <p className="mt-1 text-[12px] text-white/60">Core contributors in current cycle</p>
                
              </div>

              {/* Success Rate */}
              <div className="rounded-xl border border-border bg-secondary p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Success Rate</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-white/5 px-1.5 py-0.5 text-[10px] text-green-400">Uptime</span>
                </div>
                <div className="mt-1 text-2xl font-bold text-green-400">98%</div>
                <p className="mt-1 text-[12px] text-white/60">SLA over the last 30 days</p>
                
              </div>
            </div>

            {/* Body */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Chart + Table */}
              <div className="lg:col-span-2 space-y-4">
                {/* Revenue Chart */}
                <div className="rounded-xl border border-border bg-secondary p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs text-white/60">Revenue</div>
                      <div className="text-xl font-semibold">$15,231.89</div>
                    </div>
                    <span className="text-xs text-green-400">+20.1% this month</span>
                  </div>
                  <InteractiveAreaChart />
                </div>

                {/* Projects Table */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white/80">Projects</h4>
                  </div>
                  <DetailedProjectsTable />
                </div>
              </div>

              {/* Right: Minimal cards */}
              <div className="h-full min-h-0 flex flex-col gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white/80">Team</h4>
                    <button className="p-1.5 rounded-md border border-border bg-white/5 text-white/70 hover:bg-white/10" aria-label="Open menu" aria-haspopup="menu" aria-expanded="false">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5" cy="12" r="1.5"/>
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="19" cy="12" r="1.5"/>
                      </svg>
                    </button>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary p-4">
                    <TeamCompact />
                  </div>
                </div>

                <div className="flex flex-col min-h-0 flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white/80">Recent activity</h4>
                    <button className="p-1.5 rounded-md border border-border bg-white/5 text-white/70 hover:bg-white/10" aria-label="Open menu" aria-haspopup="menu" aria-expanded="false">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5" cy="12" r="1.5"/>
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="19" cy="12" r="1.5"/>
                      </svg>
                    </button>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary p-4 flex-1 min-h-0">
                    <ActivityCompact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-up Page Section */}
        <section className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold">Join Frastra</h2>
            <p className="text-descriptive text-paragraph-size mt-2">Start building with our component library today</p>
          </div>

          {/* Split Layout */}
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
              
              {/* Left Hero Section - Only visible on lg+ screens */}
              <div className="hidden lg:block bg-secondary relative">
                {/* Top Content */}
                <div className="absolute top-12 left-12 right-12">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-paragraph leading-tight">Build faster with Frastra UI</h3>
                    <p className="text-descriptive text-base">The complete component library for modern React applications</p>
                  </div>
                </div>

                {/* Bottom Features */}
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tertiary border border-border flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-paragraph" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-paragraph">Lightning Fast</h4>
                        <p className="text-xs text-tips">Zero setup required</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tertiary border border-border flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-paragraph" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-paragraph">Fully Typed</h4>
                        <p className="text-xs text-tips">TypeScript support</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tertiary border border-border flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-paragraph" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M11 7.343V10a2 2 0 002 2h2.657" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-paragraph">Fully Customizable</h4>
                        <p className="text-xs text-tips">Built-in theming</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tertiary border border-border flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-paragraph" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-paragraph">Accessibility First</h4>
                        <p className="text-xs text-tips">WCAG compliant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full max-w-md mx-auto space-y-6">
                  <div className="text-center">
                    <h3 className="text-title-size font-title text-title">Create your account</h3>
                    <p className="text-tips-size text-tips mt-1">Get started in less than 2 minutes</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="First name"
                        className="px-3 py-2 rounded-md bg-secondary text-paragraph-size text-paragraph placeholder-descriptive border border-border hover:border-white/30 focus:border-white/30 focus:outline-none transition-all duration-150"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        className="px-3 py-2 rounded-md bg-secondary text-paragraph-size text-paragraph placeholder-descriptive border border-border hover:border-white/30 focus:border-white/30 focus:outline-none transition-all duration-150"
                      />
                    </div>
                    
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-md bg-secondary text-paragraph-size text-paragraph placeholder-descriptive border border-border hover:border-white/30 focus:border-white/30 focus:outline-none transition-all duration-150"
                    />
                    
                    <input
                      type="password"
                      placeholder="Create password"
                      className="w-full px-3 py-2 rounded-md bg-secondary text-paragraph-size text-paragraph placeholder-descriptive border border-border hover:border-white/30 focus:border-white/30 focus:outline-none transition-all duration-150"
                    />

                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full px-3 py-2 rounded-md bg-secondary text-paragraph-size text-paragraph placeholder-descriptive border border-border hover:border-white/30 focus:border-white/30 focus:outline-none transition-all duration-150"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <DefaultCheckbox />
                    <label className="text-tips-size text-tips leading-relaxed">
                      I agree to the <a href="#" className="text-info hover:underline">Terms of Service</a> and <a href="#" className="text-info hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <Button variant="primary" className="w-full">
                    Create Account
                  </Button>

                  <div className="text-center space-y-3">
                    <p className="text-tips-size text-tips">
                      Already have an account? <a href="#" className="text-info hover:underline">Sign in</a>
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <div className="h-px bg-border flex-1"></div>
                      <span className="text-tips-size text-tips">or</span>
                      <div className="h-px bg-border flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-paragraph">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-tips-size text-paragraph">GitHub</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-paragraph">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-tips-size text-paragraph">Google</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase: Tabs & Accordion */}
        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold">Featured components</h2>
            <p className="text-white/60 text-sm mt-2">Tabs and accordion examples aligned with the design system</p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-white/5 px-4 py-3">
            <div className="mb-2 text-sm font-medium text-white/70">Tabs</div>
            <DefaultTabs
              tabs={[
                { id: 'tab1', label: 'Release notes', content:
                  <div className="text-sm text-white/70 space-y-2">
                    <p>High‑level updates for the current release.</p>
                    <ul className="list-disc list-inside text-white/60 space-y-1">
                      <li>Improved rendering and memory use in lists</li>
                      <li>Refined focus states and keyboard navigation</li>
                      <li>New primitives: Tabs, Toast, Select</li>
                    </ul>
                  </div>
                },
                { id: 'tab2', label: 'Implementation', content:
                  <div className="text-sm text-white/70 space-y-2">
                    <p>Recommended integration approach:</p>
                    <ol className="list-decimal list-inside text-white/60 space-y-1">
                      <li>Copy the component markup</li>
                      <li>Replace tokens with project variables</li>
                      <li>Add tests for critical flows</li>
                    </ol>
                  </div>
                }
              ]}
            />
          </div>
          <div className="rounded-xl border border-border bg-white/5 px-4 py-3">
            <div className="mb-2 text-sm font-medium text-white/70">Accordion</div>
            <DefaultAccordion
              allowMultiple={false}
              items={[
                { question: 'What is Frastra UI?', answer: 'A modern set of copy‑paste components for Next.js + Tailwind.' },
                { question: 'Can I customize components?', answer: 'Yes. Edit classes, tweak props, and extend as you like.' },
                { question: 'Is it open source?', answer: 'Absolutely. MIT licensed for personal and commercial use.' }
              ]}
            />
          </div>
          </div>
        </section>

        {/* Row 2: Select + Loader + Skeleton (3 cards) */}
        <section className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-white/5 px-4 py-3">
              <div className="mb-1 text-sm font-medium text-white/80">Select</div>
              <p className="mb-2 text-[12px] text-white/60">Searchable and keyboard‑friendly dropdown.</p>
              <DefaultSelect />
            </div>
            <div className="rounded-xl border border-border bg-white/5 px-4 py-3 flex items-center justify-between">
              <div>
                <div className="mb-0.5 text-sm font-medium text-white/80">Loader</div>
                <p className="text-[12px] text-white/60">Minimal spinner for async actions.</p>
              </div>
              <Spinner />
            </div>
            <div className="rounded-xl border border-border bg-white/5 px-4 py-3">
              <div className="mb-1 text-sm font-medium text-white/80">Skeleton</div>
              <p className="mb-2 text-[12px] text-white/60">Lightweight placeholders while fetching.</p>
              <Skeleton />
            </div>
          </div>
        </section>

        {/* Row 3: two more examples */}
        <section className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-white/5 px-4 py-3">
              <div className="mb-1 text-sm font-medium text-white/80">Toast</div>
              <p className="mb-2 text-[12px] text-white/60">Actions that can have significant impact on your data.</p>
            </div>
            <div className="rounded-xl border border-border bg-white/5 px-4 pt-3 pb-2">
              <div className="mb-1 text-sm font-medium text-white/80">Pagination</div>
              <p className="mb-2 text-[12px] text-white/60">Navigate large datasets with accessible controls.</p>
              <div className="mt-10 flex items-center justify-center">
                <FullPagination />
              </div>
            </div>
          </div>
        </section>
      
      </div>
      {/* Son CTA - Footer'ın hemen üstünde */}
      <div className="px-6 md:px-8 mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-white/10 via-white/5 to-transparent">
          <div className="p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-semibold">Build faster. Look better.</h3>
            <p className="text-sm text-white/70 mt-2 max-w-2xl mx-auto">Start with battle‑tested components and ship your next idea in hours, not weeks.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="/get-started/introduction" className="px-5 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-colors">Get Started</a>
              <a href="/components/accordion" className="px-5 py-2 border border-border text-white rounded-md text-sm font-medium hover:bg-white/5 transition-colors">Browse Components</a>
            </div>
        </div>
        </div>
      </div>

      {/* Tam Genişlik Footer */}
      <div className="px-6 md:px-8 mt-8 mb-8">
        <DefaultFooter />
    </div>
    </>
  );
}
