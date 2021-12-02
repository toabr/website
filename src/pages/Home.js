import Meta from '../components/Meta'
import Search from '../components/Search'
import Showcase from '../components/Showcase'
import PageBreak from '../components/PageBreak'
import useFetchNodes from '../hooks/useFetchNodes'
import useFetchImages from '../hooks/useFetchImages'


/**
 * Renders Homepage &
 * Prefetches Nodes for Showcase
 */
const Home = () => {
  // Teaser image ids
  let fids = null

  const queryObj = {
    type: 'work',
    by: 'created',
    items: 25,
    page: 0
  }

  const { nodes, isLoading } = useFetchNodes(queryObj)

  fids = nodes ?
    nodes.filter(
      node => !!node.field_image.length).map(
        node => node.field_image[0].target_id
      ) :
    null

  const imageTeaser = useFetchImages({ fids })

  return (
    <>
      <Meta title="toabr.de | Home" />

      <section id="header" className="p-0 mb-5">
        <div className="container-small">
          <header className="text-center mt-3 pt-3">
            <h1 className="braces display-5 text-secondary">
              <span className="text-primary">to</span>
              <span className="">abr.de</span>
            </h1>
            <p className="py-2 mb-4">
              Browse a bunch of code snippets I've snaged over time.
            </p>
            <Search />
          </header>
          <PageBreak isLoading={isLoading} />
        </div>
      </section>


      <Showcase data={nodes || []} imageTeaser={imageTeaser} />
    </>
  )
}

export default Home