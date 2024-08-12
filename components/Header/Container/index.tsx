export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <header className="h-12 w-full flex justify-between items-center gap-2 px-4 py-2 sticky inset-0 z-50 bg-transparent backdrop-blur-md">
      {children}
    </header>
  )
}