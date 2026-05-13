export default function imageLoader({ src }) {
  return src.startsWith("/") ? `/Melo-Beauty-Lounge${src}` : src;
}
