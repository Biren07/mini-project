import Link from "next/link";


export default function Home()
{
  return(
   <>
  <main className="flex flex-col item-center justify-center min-h-screen p-6 ">
    <h1 className="text-4xl font-bold mb-6">Welcome to Todo App</h1>
     <Link href="/todos" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go to Todos App</Link>
  </main>
   </>
  );
}