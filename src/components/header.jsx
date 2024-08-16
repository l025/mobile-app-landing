import data from "@/../data/app.json"

export default function Header() {
  return (
    <header className="slide-down absolute left-0 right-0 top-0 z-50 flex h-24 items-center">
      <div className="container flex justify-between px-4">
        <a href="#">
          <img
            src={data.app.logoUrl}
            alt="logo"
            className="max-h-12 lg:max-h-16"
          />
        </a>
        <div></div>
      </div>
    </header>
  )
}
