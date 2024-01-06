"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/register');
  })

  return (
    <main>
      Home page
    </main>
  )
}
