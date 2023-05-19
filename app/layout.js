import Link from "next/link"
const  links = [{
  label: 'App',
  route: '/'
},{
  label :'About',
  route : '/about'
}
]
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <header>
        <nav>
          <ul>
            {links.map(({label , route}) => (
              <li key={route}>
                <Link href={route}>
                {label}
              </Link>
              </li>
              
            ))}
          </ul>
        </nav>
      </header>
      <body>
        {children}
      </body>
    </html>
  )
}
