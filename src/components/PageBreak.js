import FaIcon from "./FaIcon";

export default function PageBreak() {
  return (
    <div className="page-break d-flex align-items-center px-1 my-3">
      <div className="border-bottom w-50"></div>
      <div className="btn btn-lg btn-link disabled">
        <FaIcon name="bolt" />
      </div>
      <div className="border-bottom w-50"></div>
    </div>
  )
}