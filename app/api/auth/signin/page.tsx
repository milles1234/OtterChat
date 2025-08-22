"use client"

import {signIn, getProviders} from "next-auth/react"
import { useEffect, useState } from "react"





export default function SignIn(){
    const [providers, setProviders] = useState<any>(null)

    useEffect(() => {
        const getAuthProviders = async () => {
            const providers = await getProviders()
            setProviders(providers)
        }
        getAuthProviders()
    },[])
    
        return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to OtterChat</h1>
          <p className="text-gray-500 mt-2">Sign in to join the conversation</p>
        </div>

        <div className="space-y-4">
          {providers &&
            Object.values(providers).map((provider: any) => (
              <button
                key={provider.name}
                onClick={() => signIn(provider.id, { callbackUrl: "/dashboard" })}
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-sm transition"
              >
                {/* Optional icon */}
                {provider.name === "Google" }
                Sign in with {provider.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

    

