export const ActionContainer = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex gap-2 items-center">
      {children}
    </div>
  )
}