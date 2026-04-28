'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  homepage: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

const GH_USER = 'marcodem11';

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  PHP: '#4F5D95',
  Vue: '#41b883',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
};

function timeAgo(iso: string) {
  const now = Date.now();
  const then = new Date(iso).getTime();
  const diff = Math.max(0, now - then);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) return 'oggi';
  if (days < 30) return `${days}g fa`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mes fa`;
  const years = Math.floor(days / 365);
  return `${years}a fa`;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${GH_USER}/repos?sort=pushed&per_page=100`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
      .then((r) => {
        if (!r.ok) throw new Error('GitHub API non disponibile');
        return r.json();
      })
      .then((data: Repo[]) => {
        if (cancelled) return;
        const filtered = data
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => {
            // Sort by stars then pushed_at
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return (
              new Date(b.pushed_at).getTime() -
              new Date(a.pushed_at).getTime()
            );
          })
          .slice(0, 9);
        setRepos(filtered);
      })
      .catch((e: Error) => !cancelled && setError(e.message));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="relative px-6 lg:px-12 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <p className="eyebrow">[ 05 — Lavori ]</p>
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noreferrer"
            className="eyebrow hover:text-accent transition-colors"
          >
            github.com/{GH_USER} ↗
          </a>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="headline text-chalk text-4xl md:text-5xl lg:text-6xl mb-20 max-w-4xl"
        >
          Repository pubblici.
          <br />
          <span className="text-mute">
            Aggiornati direttamente da GitHub.
          </span>
        </motion.h2>

        {error && (
          <div className="text-center py-20">
            <p className="text-mute text-sm font-mono">
              Impossibile caricare i repository.{' '}
              <a
                href={`https://github.com/${GH_USER}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent link-underline"
              >
                Visita GitHub direttamente ↗
              </a>
            </p>
          </div>
        )}

        {!error && !repos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-ink p-7 min-h-[220px]">
                <div className="h-5 w-1/2 bg-graphite rounded mb-4 animate-pulse" />
                <div className="h-3 w-full bg-graphite rounded mb-2 animate-pulse" />
                <div className="h-3 w-2/3 bg-graphite rounded animate-pulse" />
              </div>
            ))}
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="bg-ink p-7 flex flex-col gap-5 hover:bg-carbon transition-colors group min-h-[240px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="text-mute shrink-0"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                    </svg>
                    <span className="font-mono text-sm text-chalk truncate group-hover:text-accent transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-mute shrink-0">
                    {timeAgo(repo.pushed_at)}
                  </span>
                </div>

                <p className="text-bone text-sm leading-relaxed flex-1">
                  {repo.description || (
                    <span className="text-mute italic">
                      Nessuna descrizione.
                    </span>
                  )}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-mute border border-line rounded px-1.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-line text-xs font-mono text-mute">
                  {repo.language ? (
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            langColor[repo.language] || '#888',
                        }}
                      />
                      {repo.language}
                    </span>
                  ) : (
                    <span className="text-mute/50">—</span>
                  )}

                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        ★ {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        ⑂ {repo.forks_count}
                      </span>
                    )}
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {repos && repos.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="text-mute text-sm font-mono">
              Nessun repository pubblico al momento.{' '}
              <a
                href={`https://github.com/${GH_USER}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent link-underline"
              >
                Profilo GitHub ↗
              </a>
            </p>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <a
            href={`https://github.com/${GH_USER}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-bone hover:text-accent transition-colors tracking-wider link-underline"
          >
            VEDI TUTTI I REPOSITORY →
          </a>
        </div>
      </div>
    </section>
  );
}
