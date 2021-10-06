import { Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default function Breadcrumbs({ crumbs = [], className = '' }) {
  return (
    <nav className={`btn-group text-center my-5 ${className}`} role="breadcrumb" aria-label="breadcrumb">
      {crumbs.map((crumb, index) => {

        if (crumbs.length === index + 1) return (
          <Button key={crumb.name}
            variant="outline-primary"
            size="sm"
            disabled
            className="px-4">
            {crumb.name}
          </Button>
        )

        return (
          <LinkContainer to={crumb.href} key={crumb.name} exact>
            <Button size="sm" className="px-4">{crumb.name} </Button>
          </LinkContainer>
        )

      })}
    </nav>
  )
}