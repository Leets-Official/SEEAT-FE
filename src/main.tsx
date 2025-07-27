// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './global.css';
// import App from './App.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// // Routes와 Route를 추가로 import 합니다.
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './global.css';

// // TestSearchApp 대신, 우리가 연결할 실제 페이지 컴포넌트들을 import 합니다.
// import ReviewSearchPage from './pages/search/ReviewSearch';
// import ReviewSearchResultPage from './pages/search/ReviewSearch';


// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

// createRoot(rootElement).render(
//   <StrictMode>
//     <BrowserRouter>
//       {/* 
//         Routes 컴포넌트 안에서 각 페이지의 경로를 정의합니다.
//         브라우저의 URL이 path와 일치하면 해당 element가 화면에 그려집니다.
//       */}
//       <Routes>
//         {/* 주소가 "/" 이거나 "/search" 일 때 ReviewSearchPage를 보여줍니다. */}
//         <Route path="/" element={<ReviewSearchPage />} />
//         <Route path="/search" element={<ReviewSearchPage />} />

//         {/* 주소가 "/search/result" 일 때 ReviewSearchResultPage를 보여줍니다. */}
//         <Route path="/search/result" element={<ReviewSearchResultPage />} />

//         {/* 
//           여기에 다른 페이지가 있다면 계속해서 Route를 추가할 수 있습니다.
//           <Route path="/filter" element={<ReviewFilterPage />} />
//         */}
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { RouterProvider } from 'react-router-dom';
import router from './routes/route';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
