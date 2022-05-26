import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps, "gfdgdf");
  return <Component {...pageProps} />;
}

export default MyApp;
