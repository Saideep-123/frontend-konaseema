import { ShoppingCart, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-cream border-b border-gold z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="brand-logo text-3xl">Konaseema Foods</div>
        <div className="flex gap-4">
          <ShoppingCart />
          <MessageCircle className="text-green-700" />
        </div>
      </div>
    </nav>
  );
}
