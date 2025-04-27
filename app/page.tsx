import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="tracking-[-.01em]">Easy setup</li>
          <li className="tracking-[-.01em]">Always see where is your board</li>
          <li className="tracking-[-.01em]">
            Detailed information about riding sessions
          </li>
          <li className="tracking-[-.01em]">Tournaments and Challenges</li>
          <li className="tracking-[-.01em]">And much more...</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="btn btn-primary rounded-full"
            href="/dashboard"
            rel="noopener noreferrer"
          >
            Dashboard
          </a>
          <a
            className="btn btn-secondary rounded-full"
            href=""
            rel="noopener noreferrer"
          >
            Get Tracker
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
