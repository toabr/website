import BtnList from "./BtnList"

const btnData = [
  { title: "linux", id: ["linux"], icon: "linux" },
  { title: "shell", id: ["shell"], icon: "shell" },
  { title: "git", id: ["git"], icon: "git" },
  { title: "docker", id: ["docker"], icon: "docker" },
  { title: "drupal", id: ["drupal"], icon: "drupal" },
  { title: "react", id: ["react"], icon: "react" },
  { title: "javascript", id: ["javascript"], icon: "js" },
  { title: "css", id: ["css"], icon: "css" },
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