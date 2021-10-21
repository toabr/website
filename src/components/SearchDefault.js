import BtnList from "./BtnList"

const btnData = [
  { title: "linux", id: ["linux"], icon: "linux" },
  { title: "react", id: ["react"], icon: "react" },
  { title: "drupal", id: ["drupal"], icon: "drupal" },
  { title: "bash", id: ["bash"], icon: "hashtag" },
  { title: "css", id: ["css"], icon: "css" },
  { title: "docker", id: ["docker"], icon: "docker" },
  { title: "javaScript", id: ["javascript"], icon: "js" },
]

function SearchDefault({ onClick, activeTag }) {

  /**
   * prepare data array for <BtnList />
   */
  const btnList = btnData.map(btn => {
    const active = (btn.id[0] === activeTag)
    return { ...btn, active }
  })

  return (
    <BtnList
      data={btnList}
      options={{
        onClick: onClick,
        className: 'my-4',
        more: '/wiki'
      }}
    />
  )
}

export default SearchDefault