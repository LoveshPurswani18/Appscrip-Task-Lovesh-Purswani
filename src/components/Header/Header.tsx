import "./header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>

      <div className="icons">
        <span>Search</span>
        <span>Wishlist</span>
        <span>Cart</span>
        <span>Profile</span>
      </div>
    </header>
  )
}