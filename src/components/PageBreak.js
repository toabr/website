import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "react-bootstrap";
import FaIcon from "./FaIcon";

export default function PageBreak({ isLoading }) {
  return (
    <div
      className="page-break d-flex align-items-center px-1 my-5"
      style={{ minHeight: '3.5rem' }} >
      <div className="border-bottom w-50"></div>
      <div className="btn btn-lg btn-link disabled">
        {isLoading &&
          <Spinner
            className="d-flex m-auto"
            animation="grow"
            variant="highlight"
            size="sm"
          />
        }
        {!isLoading && <FaIcon name="bolt" />}
      </div>
      <div className="border-bottom w-50"></div>
      <FontAwesomeIcon icon="fa-solid fa-bolt" />
    </div>
  )
}