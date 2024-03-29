import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-16 shadow z-50">
        <div className="h-full container mx-auto">
          <ul className="h-full flex items-center space-x-4">
            <li>
              <Link href="/unmuted">Unmuted</Link>
            </li>
            <li>
              <Link href="/muted">Muted</Link>
            </li>
          </ul>
        </div>
      </div>

      <main className="flex-1 flex flex-col justify-center">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  )
}
