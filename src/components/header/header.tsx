import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Logo Icon.png"
              alt="Logo Icon"
              width={36}
              height={36}
              className="w-auto h-auto"
            />
            <span className="font-bold text-2xl tracking-wide text-blue-600">Logo</span>
          </Link>
          <Link  href="./login" className='text-blue-600 text-2xl font-semibold hover:font-bold hover:text-blue-500/50  transition-all  '>
          Login</Link>
        </div>
      </nav>
    </header>
  );
}
