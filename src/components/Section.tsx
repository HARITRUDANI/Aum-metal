interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export const Section = ({ children, id, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

