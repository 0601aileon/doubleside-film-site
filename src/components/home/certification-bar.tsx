'use client';

import { useTranslations } from 'next-intl';
import { Award, CheckCircle, FileCheck } from 'lucide-react';

const certifications = [
  { name: 'ISO 13485', icon: Award, desc: 'Medical Device Quality Management' },
  { name: 'ISO 10993', icon: CheckCircle, desc: 'Biocompatibility Certified' },
  { name: 'CE Marking', icon: FileCheck, desc: 'European Medical Device Compliance' },
  { name: 'FDA Registered', icon: Award, desc: 'US FDA Establishment Registration' },
];

export default function CertificationBar() {
  const t = useTranslations('home.certifications');

  return (
    <section className="border-b bg-white">
      <div className="container-custom py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-2 text-muted-foreground">
              <cert.icon className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm font-semibold text-foreground">{cert.name}</span>
                <span className="text-xs text-muted-foreground ml-1.5 hidden sm:inline">{cert.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
