import useFetch from '../hooks/useFetch'

import Meta from '../components/Meta'
import Search from '../components/Search'
import Showcase from '../components/Showcase'
import PageBreak from '../components/PageBreak'
import SmallContainer from '../layout/SmallContainer'
import useFetchImages from '../hooks/useFetchImages'


/**
   * reorder server output
   */
function reorderNodes(nodes, list) {
  return nodes.map((node, index) => nodes.find(node => node.nid[0].value == list[index]))
}


const Home = () => {
  const ids = [85, 120, 86, 84, 87] // exact ids to fetch in order
  let fids = null

  /**
   * FETCH
   */
  const url = `${process.env.REACT_APP_API_URL}/rest/v2/node/work/${ids.toString()}`
  const { status, data, error } = useFetch(url)

  if (status === 'fetched') {
    // collect head images
    fids = data.map(node => node.field_image[0].target_id)
  }
  
  const imageTeaser  = useFetchImages({ fids }) 

  function addImageData(node) {
  }


  return (
    <>
      <Meta title="toabr.de | Home" />

      <section id="header" className="p-0 mb-5">
        <SmallContainer>
          <header className="text-center mt-3 pt-3">
            <h1 className="braces display-5 text-secondary">
              <span className="text-primary">to</span>
              <span className="">abr.de</span>
            </h1>
            <p className="py-2 mb-4">Explore a bunch of code snippets you may find helpful.</p>
            <Search />
          </header>
          <PageBreak />
        </SmallContainer>
      </section>


      <Showcase data={reorderNodes(data, ids) || []} imageTeaser={imageTeaser} />
    </>
  )
}

export default Home