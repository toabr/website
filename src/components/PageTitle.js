const PageTitle = ({ head, description, isLoading }) => {
  return (
    <div className={`text-center mt-3 mb-4 ${isLoading && 'text-muted'}`}>
      <h1 className="">
        {!isLoading ? head : 'loading ...'}
      </h1>
      {description && <p className='lead text-capitalize'>{description}</p>}
    </div>
  )
}

export default PageTitle
