import React from 'react';
const certifications = [
  { id: 1, title: 'Certified Cloud Practitioner', link: 'https://www.dewacloud.academy/tutor-certificate/?cert_hash=d8898d20dcb287eb' },
];
export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <h2 className="text-2xl font-semibold">Certificates</h2>
      <ul className="mt-6 space-y-2">
        {certifications.map(cert => (
          <li key={cert.id}>
            <a href={cert.link} className="text-blue-600 hover:underline">{cert.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}