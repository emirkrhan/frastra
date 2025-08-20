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
import PrimaryButton from "@/components/button/PrimaryButton";
import OutlineButton from "@/components/button/OutlineButton";
 
 
import InteractiveAreaChart from "@/components/chart/InteractiveAreaChart";
import { DefaultAccordion } from "@/components/accordion/DefaultAccordion";
import { DefaultTabs } from "@/components/tabs/DefaultTabs";
import { DefaultSelect } from "@/components/select/DefaultSelect";
import DeleteProjectCard from "@/components/card/DeleteProjectCard";
import FullPagination from "@/components/pagination/FullPagination";
import DefaultSpinner from "@/components/spinner/DefaultSpinner";
import SimpleSkeleton from "@/components/skeleton/SimpleSkeleton";

function DetailedProjectsTable() {
  const rows = [
    { id: 1, name: 'Project Alpha', tag: 'Web', assignee: 'John Doe', avatar: 'JD', status: 'active', priority: 'high', progress: 72, dueDate: '2024-08-15', updatedAt: '2d ago' },
    { id: 2, name: 'Website Redesign', tag: 'UI', assignee: 'Jane Smith', avatar: 'JS', status: 'pending', priority: 'medium', progress: 34, dueDate: '2024-09-01', updatedAt: '5h ago' },
    { id: 3, name: 'Mobile App', tag: 'iOS', assignee: 'Mike Johnson', avatar: 'MJ', status: 'completed', priority: 'low', progress: 100, dueDate: '2024-07-10', updatedAt: '1w ago' },
    { id: 4, name: 'API Development', tag: 'Backend', assignee: 'Sarah Wilson', avatar: 'SW', status: 'inactive', priority: 'high', progress: 12, dueDate: '2024-10-05', updatedAt: '3d ago' },
  ];

  const statusBadge = (status) => {
    const map = {
      active:  'border-green-500/20 text-green-300 bg-green-500/10',
      pending: 'border-yellow-500/20 text-yellow-300 bg-yellow-500/10',
      completed: 'border-blue-500/20 text-blue-300 bg-blue-500/10',
      inactive: 'border-gray-500/20 text-gray-300 bg-gray-500/10',
    };
    const dot = {
      active: 'bg-green-400',
      pending: 'bg-yellow-400',
      completed: 'bg-blue-400',
      inactive: 'bg-gray-400',
    };
    const colorCls = map[status] || 'border-white/10 text-white/70 bg-white/5';
    const dotCls = dot[status] || 'bg-white/50';
    return (
      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium border ${colorCls}`}>
        <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotCls}`} />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const priorityBadge = (priority) => {
    return (
      <span className="text-xs text-white/60">
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-black/30">
      <table className="w-full">
        <thead className="bg-transparent">
          <tr>
            <th className="px-4 py-2 text-left text-[11px] font-medium text-white/50 uppercase tracking-wider">Project</th>
            <th className="px-4 py-2 text-left text-[11px] font-medium text-white/50 uppercase tracking-wider">Assignee</th>
            <th className="px-4 py-2 text-left text-[11px] font-medium text-white/50 uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 text-left text-[11px] font-medium text-white/50 uppercase tracking-wider">Priority</th>
            <th className="px-4 py-2 text-left text-[11px] font-medium text-white/50 uppercase tracking-wider">Due</th>
            <th className="px-4 py-2 text-left text-[11px] font-medium text-white/50 uppercase tracking-wider">Updated</th>
            <th className="px-4 py-2 text-right text-[11px] font-medium text-white/50 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-white/5 transition-colors">
              <td className="px-4 py-2 text-sm text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <span>{row.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/60 bg-black/30">{row.tag}</span>
                </div>
              </td>
              <td className="px-4 py-2 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-white">{row.avatar}</span>
                  </div>
                  {row.assignee}
                </div>
              </td>
              <td className="px-4 py-2 text-sm">{statusBadge(row.status)}</td>
              <td className="px-4 py-2 text-sm">{priorityBadge(row.priority)}</td>
              <td className="px-4 py-2 text-sm text-white/60">{row.dueDate}</td>
              <td className="px-4 py-2 text-sm text-white/50">{row.updatedAt}</td>
              <td className="px-4 py-2 text-sm text-right">
                <button className="px-2 py-1 text-xs rounded-md border border-white/10 text-white/70 hover:bg-white/5">Open</button>
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
    const m = { online: 'bg-green-400', away: 'bg-yellow-400', offline: 'bg-gray-500' };
    return m[s] || 'bg-gray-500';
  };

  return (
    <ul className="space-y-1">
      {members.map((m) => (
        <li key={m.id} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 transition-colors">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
              <span className="text-[11px] font-semibold text-white">{m.avatar}</span>
            </div>
            <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-black ${dot(m.status)}`} />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-white truncate">{m.name}</div>
            <div className="text-[11px] text-white/50 truncate">{m.role}</div>
          </div>
          <button className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10 text-white/70 hover:bg-white/5">View</button>
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
        <li key={it.id} className="px-2 py-2 rounded-md hover:bg-white/5 transition-colors">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-sm text-white truncate">{it.title}</div>
              <div className="text-[11px] text-white/50 truncate">{it.desc}</div>
            </div>
            <span className="text-[11px] text-white/40 flex-shrink-0">{it.time}</span>
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
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-64 left-1/2 h-[820px] w-[820px] -translate-x-1/2 rounded-full blur-[120px]"
               style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.20), rgba(255,255,255,0) 75%)" }} />
          <div className="absolute inset-0 opacity-[0.03]"
               style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "32px 32px", backgroundPosition: "top left" }} />
        </div>
        <div className="relative max-w-8xl mx-auto px-6 py-24 md:py-28 text-center space-y-6">
            {/* Chip / Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white shadow-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span>Copy‑paste Next.js UI components</span>
            </div>

            {/* Başlık ve açıklama */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-light text-white leading-tight tracking-tight">
          Build your component library
        </h1>
            <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Production‑ready, accessible components for Next.js + Tailwind. Copy, customize, and ship faster with a consistent design system, clean APIs, and polished interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Link href="/get-started/introduction">
                <PrimaryButton>Get Started</PrimaryButton>
              </Link>
              <Link href="/components/accordion">
                <OutlineButton>Browse Components</OutlineButton>
              </Link>
          </div>
        </div>
      </section>
      
      <div className="max-w-8xl mx-auto px-6">

        {/* Logos Bandı */}
        <div className="mt-12">
          <p className="text-center text-xs text-white/40 mb-4">Trusted by makers and teams</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center bg-transparent">
            <img src="/vercel.svg" alt="Vercel" className="h-7 md:h-8 w-auto grayscale opacity-70 hover:opacity-90 transition-opacity" />
            <img src="/next.svg" alt="Next.js" className="h-7 md:h-8 w-auto grayscale opacity-70 hover:opacity-90 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-7 md:h-8 w-auto grayscale opacity-70 hover:opacity-90 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="h-7 md:h-8 w-auto grayscale opacity-70 hover:opacity-90 transition-opacity" />
          </div>
        </div>

        

        {/* Featured components → Dashboard Showcase */}
        <section className="mt-20 space-y-8">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold">Featured dashboard</h2>
            <p className="text-white/60 text-sm mt-2">Projeden parçalarla oluşturulmuş, tasarım sistemine uygun örnek dashboard</p>
          </div>

          {/* Dashboard container */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Operational overview</h3>
                <p className="text-xs text-white/60">A snapshot of key metrics, team activity and ongoing work</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex rounded-lg border border-white/10 bg-black/30 p-1">
                  <button className="px-2 py-1 text-xs rounded-md bg-white/10 text-white">7d</button>
                  <button className="px-2 py-1 text-xs rounded-md text-white/70 hover:text-white">30d</button>
                  <button className="px-2 py-1 text-xs rounded-md text-white/70 hover:text-white">90d</button>
                </div>
                <button className="px-3 py-1.5 text-xs rounded-md border border-white/10 text-white/80 hover:bg-white/5">Export</button>
                <img src="/profile.jpg" alt="User" className="w-7 h-7 rounded-full border border-white/10 object-cover" />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Active Projects */}
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Active Projects</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-green-400">Trending</span>
                </div>
                <div className="mt-1 text-2xl font-bold">24</div>
                <p className="mt-1 text-[12px] text-white/60">Ongoing initiatives across teams</p>
                
              </div>

              {/* Open Tasks */}
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Open Tasks</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-red-400">Backlog</span>
                </div>
                <div className="mt-1 text-2xl font-bold">132</div>
                <p className="mt-1 text-[12px] text-white/60">Requires review and assignment</p>
                
              </div>

              {/* Team Members */}
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Team Members</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/70">Active 12</span>
                </div>
                <div className="mt-1 text-2xl font-bold">18</div>
                <p className="mt-1 text-[12px] text-white/60">Core contributors in current cycle</p>
                
              </div>

              {/* Success Rate */}
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Success Rate</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-green-400">Uptime</span>
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
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
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
                    <button className="p-1.5 rounded-md border border-white/10 bg-white/5 text-white/70 hover:bg-white/10" aria-label="Open menu" aria-haspopup="menu" aria-expanded="false">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5" cy="12" r="1.5"/>
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="19" cy="12" r="1.5"/>
                      </svg>
                    </button>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <TeamCompact />
                  </div>
                </div>

                <div className="flex flex-col min-h-0 flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white/80">Recent activity</h4>
                    <button className="p-1.5 rounded-md border border-white/10 bg-white/5 text-white/70 hover:bg-white/10" aria-label="Open menu" aria-haspopup="menu" aria-expanded="false">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <circle cx="5" cy="12" r="1.5"/>
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="19" cy="12" r="1.5"/>
                      </svg>
                    </button>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4 flex-1 min-h-0">
                    <ActivityCompact />
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
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
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
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
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
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="mb-1 text-sm font-medium text-white/80">Select</div>
              <p className="mb-2 text-[12px] text-white/60">Searchable and keyboard‑friendly dropdown.</p>
              <DefaultSelect />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between">
              <div>
                <div className="mb-0.5 text-sm font-medium text-white/80">Loader</div>
                <p className="text-[12px] text-white/60">Minimal spinner for async actions.</p>
              </div>
              <DefaultSpinner />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="mb-1 text-sm font-medium text-white/80">Skeleton</div>
              <p className="mb-2 text-[12px] text-white/60">Lightweight placeholders while fetching.</p>
              <SimpleSkeleton />
            </div>
          </div>
        </section>

        {/* Row 3: two more examples */}
        <section className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="mb-1 text-sm font-medium text-white/80">Toast</div>
              <p className="mb-2 text-[12px] text-white/60">Actions that can have significant impact on your data.</p>
              <DeleteProjectCard inline projectName="Cosmo UI" />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 pt-3 pb-2">
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
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent">
          <div className="p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-semibold">Build faster. Look better.</h3>
            <p className="text-sm text-white/70 mt-2 max-w-2xl mx-auto">Start with battle‑tested components and ship your next idea in hours, not weeks.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="/get-started/introduction" className="px-5 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-colors">Get Started</a>
              <a href="/components/accordion" className="px-5 py-2 border border-white/10 text-white rounded-md text-sm font-medium hover:bg-white/5 transition-colors">Browse Components</a>
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
