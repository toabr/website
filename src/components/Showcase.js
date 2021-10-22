import Article from './ShowcaseArticle'


/**
 * map teaser to node
 */
const mapTeaser = (data, imageTeaser) => data.map(node => {
  const teaser = imageTeaser.find(image => {
    return (node.nid[0].value == image.nid)
  })
  return { ...node, teaser }
})

/**
 * reorder server output
 */
function reorderNodes(nodes, list) {
  return nodes.map((node, index) => nodes.find(node => node.nid[0].value === list[index]))
}


/**
 * 
 * @param {Array} param0.data - fetched nodes
 * @param {Array} param0.imageTeaser - fetched teaser images
 * @returns Showcase Grid
 */
const Showcase = ({ data = [], imageTeaser }) => {
  // console.log('SHOWCASE RENDERS', nodes)

  const nodes = mapTeaser(data, imageTeaser)

  return (
    <section id="showcase">

      {nodes.length > 0 &&
        nodes.map(node => <Article key={node.nid[0].value} node={node} />)
      }

    </section>
  )
}

export default Showcase