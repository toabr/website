const SmallContainer = ({ children, className }) => (
  <div className={`mx-auto ${className}`} style={{ maxWidth: 685 }}>
    {children}
  </div>
)

export default SmallContainer
