const TestLayout = ({
  children
}:{
  children: React.ReactNode
}) => {
  return (
    <div className="h-full">
      <h1>Test Layout</h1>
      <hr/>
      {children}
    </div>
  )
}

export default TestLayout;