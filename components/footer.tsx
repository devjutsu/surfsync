// import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral rounded-t-2xl flex justify-around items-center h-16 shadow-lg">
        <button className="flex flex-col items-center justify-center text-white">
          <span className="material-symbols-rounded text-2xl">location_on</span>
          <span className="text-xs mt-1">Track</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white">
          <span className="material-symbols-rounded text-2xl">history</span>
          <span className="text-xs mt-1">History</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white">
          <span className="material-symbols-rounded text-2xl">settings</span>
          <span className="text-xs mt-1">Settings</span>
        </button>
      </div>
      {/* <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href=""
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        FAQ
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href=""
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href=""
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Community
      </a> */}
    </footer>
  );
}
