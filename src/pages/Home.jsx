import React from 'react'


export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
      <p className="text-[30px]">
        Hi, I’m{' '}
        <span className="text-[#4D54DA]">Herman</span>,
      </p>
      <h1 className="text-3xl font-bold">
        A frontend developer from Norway.
      </h1>
      <img
        src="assets/portrett-bilde.jpg"
        alt="Herman"
        className="mt-8 w-48 h-48 w-[30vw] rounded-full object-cover border-4 border-blue-500"
      />
    </main>
  )
}
