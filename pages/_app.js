import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function MyApp({ Component, pageProps }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Component {...pageProps} />} />
      </Routes>
    </BrowserRouter>
  );
}
