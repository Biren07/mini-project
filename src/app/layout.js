import "./globals.css"
export  const metadaya={
  title:"Todo App",
  descripition:"A simple is Next.js Todo App"
};

export default function RootLayout({children})
{
  return(
    <html lang="en">
      <body className="bg-gray-100">
       {children}
      </body>
    </html>
  )
}