import useFetch from '../hooks/useFetch'

import Meta from '../components/Meta'
import Search from '../components/Search'
import Showcase from '../components/Showcase'
import PageBreak from '../components/PageBreak'
import useFetchImages from '../hooks/useFetchImages'


/**
 * Renders Homepage &
 * Prefetches Nodes for Showcase
 */
const Home = () => {
  // Teaser image ids
  let fids = null

  /**
   * FETCH
   */
  const url = `${process.env.REACT_APP_API_URL}/rest/v2/node/work/all?sort_by=created&sort_order=DESC&items_per_page=10`
  const { status, data, error } = useFetch(url)

  if (status === 'fetched') {
    // collect head image ids to fetch later
    fids = data.filter(
      node => !!node.field_image.length).map(
        node => node.field_image[0].target_id)
  }

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
          <PageBreak />
        </div>
      </section>


      <Showcase data={data || []} imageTeaser={imageTeaser} />
    </>
  )
}

export default Home