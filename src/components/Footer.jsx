export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-6 mt-10">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} PrimeHomes. All rights reserved.</p>
      <div className="mt-2 text-xs text-gray-400">
        Designed with ❤️ for elegance and simplicity.
      </div>
    </footer>
  );
}