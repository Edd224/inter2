'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Domov' },
    { href: '/o-mne', label: 'O mne' },
    { href: '/galeria', label: 'Galéria' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="bg-[#f3f3f2] rounded-r-full mx-4 shadow">
      <nav className="container mx-auto p-4 flex items-center justify-center">
        {/* Logo vľavo */}

        {/* Navigácia vpravo */}
        <div className="flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-800 hover:text-black transition ${pathname === href ? 'font-bold' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
