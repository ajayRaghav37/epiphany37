export default function Container({ style, children }) {
  return <div className="container mx-auto px-5" style={style}>{children}</div>
}
