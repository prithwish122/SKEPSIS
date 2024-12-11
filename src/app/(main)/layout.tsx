import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 py-8">{children}</main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
