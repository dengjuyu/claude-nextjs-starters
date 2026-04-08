interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
        </div>
        {children && <div className="flex gap-4">{children}</div>}
      </div>
    </div>
  )
}
