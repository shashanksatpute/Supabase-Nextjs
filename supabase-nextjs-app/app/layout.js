import "./_styles/globals.css";
import Header from "./_components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`antialiased bg-primary-950 text-primary-100 min-h-1`}>
      <header>
        <Header />
      </header>
      <div className="flex-1 px-8 py-12">
        <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      <footer>Copyright by shashank satpute-chavan</footer>
    </body>
  </html>
  );
}
