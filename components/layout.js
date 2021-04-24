import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ style, preview, children }) {
  return (
    <>
      <Meta />
      <div style={style} className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
