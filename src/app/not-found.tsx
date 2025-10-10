import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-thin text-black mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
