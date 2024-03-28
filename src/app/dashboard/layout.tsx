import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link href='/dashboard/settings'>Settings</Link>
          </li>
        </ul>
      </nav>

      {children}
    </section>
  );
}
