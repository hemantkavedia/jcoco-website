import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-4">🕉️</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for does not exist. Let us guide you back home.
      </p>
      <Link href="/" className="btn-primary">Return Home</Link>
    </div>
  );
}
