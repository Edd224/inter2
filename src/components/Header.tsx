'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Domov' },
        { href: '/o-mne', label: 'O mne' },
        { href: '/galeria', label: 'Galéria' },
        { href: '/kontakt', label: 'Kontakt' },
    ];

    return (
        <header className="bg-[#f3f3f2] shadow">
            <nav className="container mx-auto p-4 flex items-center justify-center gap-8">
                {navItems.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`${pathname === href ? 'font-bold' : ''
                            } text-gray-800 hover:text-black transition`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
