import "./toolbar.css"

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div className="left">
        <span>3425 ITEMS</span>
        <button>HIDE FILTER</button>
      </div>

      <div className="right">
        <select>
          <option>RECOMMENDED</option>
          <option>NEWEST</option>
          <option>PRICE LOW</option>
        </select>
      </div>
    </div>
  )
}