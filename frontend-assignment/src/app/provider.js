// // layout.js is a server component, cannot mix with client components. Hence create a Provider.js file to wrap the client components.
// // see: https://vercel.com/guides/react-context-state-management-nextjs
// "use client";

// import { DataProvider } from "./Context/DataContext";

// export function Provider({ children }) {
//   return <DataProvider>{children}</DataProvider>;
// }
