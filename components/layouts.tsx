type NavItemProps = {
  title: string
  url: string
  isSelected: boolean
}

type NavbarProps = {
  pageId: string
}

function NavItem(props: NavItemProps) {
  const {title, url, isSelected} = props
  return (
    <li>
      <a className={`block px-3 py-2 transition hover:text-teal-500 ${isSelected ? "text-teal-500" : ""}`} href={url}>
        {title}
      </a>
    </li>
  );
}

function Navbar(props: NavbarProps) {
  return (
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm fontmedium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <NavItem title={"Landing Pages"} url={"/"} isSelected={props.pageId == "landing"}/>
          <NavItem title={"Projects"} url={"/projects"} isSelected={props.pageId == "projects"} />
        </ul>
      </nav>
    </div>
  );
}

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar pageId={children.props.pageId}/>
      <main>{children}</main>
    </>
  )
}