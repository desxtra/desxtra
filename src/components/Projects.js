import React, { useEffect, useState } from 'react';
export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/desxtra/desxtra')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-semibold">GitHub Repositories</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map(repo => (
          <a key={repo.id} href={repo.html_url} className="p-4 border rounded hover:shadow">
            <h3 className="font-bold">{repo.name}</h3>
            <p className="mt-2">{repo.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}