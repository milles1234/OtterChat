// import { SessionProvider } from "next-auth/react"
// import Link from "next/link"


// export default function Home() {
//   return (
//     <SessionProvider>
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Welcome to OtterChat</h1>
//         <Link href="/auth/signin" className="text-blue-500 hover:underline">
//           Sign In
//         </Link>
//       </div>
//     </div>
//     </SessionProvider>
//   )
// }

import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">OtterChat</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Connect, chat, and collaborate with your team in real time.
        </p>
        <Link
          href="/auth/signin"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}


