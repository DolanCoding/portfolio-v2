export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Sascha Fischer. All rights reserved.</p>
          <p className="text-gray-500">
            Crafting beautiful digital experiences through code and design.
          </p>
        </div>
      </div>
    </footer>
  );
}
