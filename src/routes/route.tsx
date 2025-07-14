// import { createBrowserRouter } from 'react-router-dom';
// import Home from '@/pages/home';
// import MyPage from '@/pages/my';
// import Signup from '@/pages/signup';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Signup />,
//   },
//   {
//     path: '/my',
//     element: <MyPage />,
//   },
//   {
//     path: '/home',
//     element: <Home />,
//   },
// ]);

// export default router;
import { createBrowserRouter } from 'react-router-dom';
import HeaderExamples from '@/components/examples/HeaderExamples.tsx';

import Example from '@/components/examples/InputExamples';
import TextareaExamples from '@/components/examples/TextareaExamples';
const router = createBrowserRouter([
  {
    path: '/Header-test',
    element: <HeaderExamples />,
  },
  {
    path: '/Input-test',
    element: <Example />,
  },
  {
    path: '/Textarea-test',
    element: <TextareaExamples />,
  }, 
]);

export default router;
