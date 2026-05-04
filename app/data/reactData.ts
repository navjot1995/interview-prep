import { Category, Question } from "../types";

export const reactQuestions: Question[] = [
  // Virtual DOM & Rendering
  {
    id: 1,
    question: "What is Virtual DOM and how does it work in React?",
    answer:
      "Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to improve performance by minimizing direct DOM manipulations. When state changes, React creates a new virtual DOM tree, compares it with the previous one using diffing algorithm, and then updates only the changed parts in the real DOM (reconciliation).",
    category: "Virtual DOM",
    difficulty: "Medium",
    codeExample: `// Virtual DOM representation
const vDOM = {
  type: 'div',
  props: { className: 'container' },
  children: [
    { type: 'h1', props: {}, children: 'Hello World' }
  ]
};`,
  },

  {
    id: 1.1,
    question: "What is the difference between props and state?",
    answer:
      "Props are read-only and passed from parent to child, while state is managed within the component and can be updated.",
    category: "State Management",
    difficulty: "Easy",
    codeExample: `// Props
function Child({ name }) {
  return <div>{name}</div>;
}
// State
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
  },
  {
    id: 1.2,
    question: "What are React hooks?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components.",
    category: "Hooks",
    difficulty: "Medium",
    codeExample: `import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });
  
  return <button onClick={() => setCount(count + 1)}>Click me</button>;
}`,
  },

  // React Fiber
  {
    id: 2,
    question: "What is React Fiber and how does it improve performance?",
    answer:
      "React Fiber is a complete rewrite of React's reconciliation algorithm. It enables incremental rendering, allowing React to split rendering work into chunks and spread it over multiple frames. It adds the ability to pause, abort, or reuse work as new updates come in, improving responsiveness for complex applications.",
    category: "React Fiber",
    difficulty: "Hard",
    codeExample: `// Fiber architecture enables:
// 1. Priority-based rendering
// 2. Ability to pause work
// 3. Concurrent rendering
// Example: useTransition for non-urgent updates
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setNonUrgentState(data);
});`,
  },

  // Concurrent React
  {
    id: 3,
    question: "What is Concurrent React and how does it work?",
    answer:
      "Concurrent React is a set of new features that help React apps stay responsive by interrupting rendering to handle higher-priority updates. It allows React to work on multiple state updates simultaneously, pausing and resuming work as needed.",
    category: "Concurrent Features",
    difficulty: "Hard",
    codeExample: `// Using Concurrent Features
import { useTransition, useDeferredValue } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const deferredValue = useDeferredValue(value);
  
  return (
    <div>
      {isPending && <Spinner />}
      <SlowList value={deferredValue} />
    </div>
  );
}`,
  },

  // Real Concurrency vs Parallelism
  {
    id: 4,
    question:
      "Explain the difference between Real Concurrency and Parallelism in React?",
    answer:
      "Real concurrency in React means the ability to interleave multiple tasks (like handling multiple state updates), giving the illusion of simultaneous execution. Parallelism would require true multi-threading, which JavaScript doesn't have. React's concurrent features provide concurrency through task interleaving, not true parallelism.",
    category: "Concurrent Features",
    difficulty: "Hard",
    codeExample: `// Concurrency in React
// React can work on multiple updates interleaved
startTransition(() => {
  // Low priority update
  setData(largeData);
});
// High priority update can interrupt the above
setHighPriorityInput(newValue);`,
  },

  // Pure Components
  {
    id: 5,
    question: "What are Pure Components in React and when to use them?",
    answer:
      "Pure Components are components that implement shouldComponentUpdate with a shallow prop and state comparison. They prevent unnecessary re-renders by re-rendering only when props or state actually change. Use them for performance optimization when you're confident the component renders the same output for the same props and state.",
    category: "Pure Component",
    difficulty: "Medium",
    codeExample: `// Class-based Pure Component
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}

// Functional component with memo
const MyMemoComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});`,
  },

  // Lifecycle Methods
  {
    id: 6,
    question: "Explain React lifecycle methods and their order of execution?",
    answer:
      "React lifecycle methods are special methods that automatically get called at different phases of a component's life. Phases: Mounting (constructor, getDerivedStateFromProps, render, componentDidMount), Updating (getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate), and Unmounting (componentWillUnmount).",
    category: "Lifecycle",
    difficulty: "Medium",
    codeExample: `class MyComponent extends React.Component {
  constructor(props) { super(props); /* Initialize state */ }
  componentDidMount() { /* Fetch data, add subscriptions */ }
  componentDidUpdate(prevProps) { /* React to prop/state changes */ }
  componentWillUnmount() { /* Cleanup subscriptions */ }
  render() { return <div>Content</div>; }
}`,
  },

  // React Hooks
  {
    id: 7,
    question: "What are React Hooks and what problems do they solve?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components. They solve several problems: reusing stateful logic between components, complex components become hard to understand, and classes confuse both people and machines. Hooks provide a more direct API to React concepts.",
    category: "React Hooks",
    difficulty: "Medium",
    codeExample: `import { useState, useEffect, useContext, useReducer } from 'react';

// Basic hooks
const [state, setState] = useState(initialValue);
useEffect(() => { /* Side effects */ }, [dependencies]);
const context = useContext(MyContext);
const [state, dispatch] = useReducer(reducer, initialState);`,
  },

  // Performance Optimization
  {
    id: 8,
    question: "What are the key performance optimization techniques in React?",
    answer:
      "Key optimization techniques include: React.memo for functional components, PureComponent for classes, useMemo for expensive calculations, useCallback for function memoization, lazy loading with React.lazy(), code splitting, virtual list rendering for large lists, avoiding inline functions in JSX, and using production builds.",
    category: "Performance",
    difficulty: "Hard",
    codeExample: `// Performance optimization examples
const MemoizedComponent = React.memo(MyComponent);
const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
const LazyComponent = React.lazy(() => import('./HeavyComponent'));`,
  },

  // Code Splitting
  {
    id: 9,
    question: "How does code splitting work in React and why is it important?",
    answer:
      "Code splitting is a technique to split your bundle into smaller chunks that can be loaded on demand. React implements this via React.lazy() and Suspense. It reduces initial load time by only loading code needed for the current view. Benefits include faster initial page load, better performance, and reduced bandwidth usage.",
    category: "Code Splitting",
    difficulty: "Medium",
    codeExample: `import { Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}`,
  },

  // Controlled vs Uncontrolled
  {
    id: 10,
    question:
      "What's the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components have form data handled by React state, with value controlled via props and onChange handlers. Uncontrolled components store form data in the DOM itself, using refs to access values. Controlled components offer more control and validation, while uncontrolled components are simpler for basic forms.",
    category: "Forms",
    difficulty: "Easy",
    codeExample: `// Controlled Component
function Controlled() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled Component
function Uncontrolled() {
  const inputRef = useRef();
  return <input ref={inputRef} defaultValue="initial" />;
}`,
  },

  // Redux Toolkit
  {
    id: 11,
    question:
      "What is Redux Toolkit and how does it simplify Redux development?",
    answer:
      "Redux Toolkit is the official, recommended way to write Redux logic. It simplifies Redux by providing utilities like configureStore() for store setup, createSlice() for reducers and actions, and createAsyncThunk for async logic. It reduces boilerplate code and includes best practices by default.",
    category: "State Management",
    difficulty: "Medium",
    codeExample: `import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }
  }
});

export const { increment } = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });`,
  },

  // Context API
  {
    id: 12,
    question: "Explain React Context API and when to use it vs Redux?",
    answer:
      "Context API provides a way to pass data through the component tree without prop drilling. It's good for medium-sized applications with simple state needs like themes, user authentication, or language preferences. Redux is better for large applications with complex state logic, frequent updates, and need for middleware.",
    category: "Context API",
    difficulty: "Medium",
    codeExample: `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}`,
  },

  // React Router
  {
    id: 13,
    question: "How does routing work in React applications?",
    answer:
      "React Router is the standard routing library for React. It enables navigation between views using components like BrowserRouter, Routes, Route, and Link. It provides features like dynamic routing, nested routes, route parameters, query parameters, and programmatic navigation using useNavigate hook.",
    category: "Routing",
    difficulty: "Medium",
    codeExample: `import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/home">Home</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <button onClick={() => navigate('/home')}>Go Home</button>;
}`,
  },

  // Redux Middleware
  {
    id: 14,
    question: "What are Redux middleware and give examples?",
    answer:
      "Redux middleware provides a way to intercept actions before they reach the reducer. Common uses include logging, crash reporting, handling asynchronous actions, and routing. Popular middleware includes Redux Thunk for async logic, Redux Saga for complex side effects, and Redux Logger for debugging.",
    category: "State Management",
    difficulty: "Hard",
    codeExample: `// Redux Thunk example
const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_USER_REQUEST' });
  try {
    const response = await api.getUser(id);
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: response });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_FAILURE', error });
  }
};

// Custom logger middleware
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};`,
  },

  // Bundle Sizes
  {
    id: 15,
    question: "How to analyze and reduce bundle size in React applications?",
    answer:
      "Bundle size optimization involves: using webpack-bundle-analyzer to visualize bundles, implementing code splitting with dynamic imports, tree shaking to remove unused code, optimizing images and assets, using production builds, replacing heavy libraries with lighter alternatives, and enabling compression.",
    category: "Performance",
    difficulty: "Hard",
    codeExample: `// webpack.config.js for bundle analysis
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html'
    })
  ]
};

// Dynamic import for heavy libraries
const HeavyChart = React.lazy(() => import('heavy-chart-library'));`,
  },

  // Render Patterns
  {
    id: 16,
    question: "Explain different render patterns in React: CSR, SSR, SSG, ISR?",
    answer:
      "CSR (Client-Side Rendering): React renders entirely in browser. SSR (Server-Side Rendering): Pages render on server per request (Next.js getServerSideProps). SSG (Static Site Generation): Pages build at compile time (Next.js getStaticProps). ISR (Incremental Static Regeneration): Updates static content without full rebuild.",
    category: "Rendering",
    difficulty: "Hard",
    codeExample: `// Next.js render patterns
// SSR
export async function getServerSideProps() {
  const data = await fetchData(); // Runs on each request
  return { props: { data } };
}

// SSG
export async function getStaticProps() {
  const data = await fetchData(); // Runs at build time
  return { props: { data }, revalidate: 60 }; // ISR
}

// CSR
function ClientComponent() {
  const [data, setData] = useState(null);
  useEffect(() => { fetchData().then(setData); }, []);
  return <div>{data}</div>;
}`,
  },

  // Next.js API Routes
  {
    id: 17,
    question: "How do API routes work in Next.js?",
    answer:
      "API routes in Next.js allow you to build API endpoints within your Next.js application. Files inside the 'pages/api' or 'app/api' directory are treated as API endpoints instead of pages. They run on the server and can handle requests, connect to databases, and perform server-side operations.",
    category: "Next.js",
    difficulty: "Medium",
    codeExample: `// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = await db.users.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await db.users.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}`,
  },

  // Next.js Routing
  {
    id: 18,
    question: "Explain Next.js routing system (App Router vs Pages Router)?",
    answer:
      "Next.js offers two routing systems: Pages Router (traditional) using pages directory with file-based routing, and App Router (new) using app directory with enhanced features. App Router introduces nested routes, layouts, server components, streaming, and intercepting routes. Each folder represents a route segment.",
    category: "Next.js",
    difficulty: "Medium",
    codeExample: `// App Router structure
app/
  layout.tsx        // Root layout
  page.tsx         // Home page (/)
  about/
    page.tsx       // About page (/about)
  blog/
    [id]/
      page.tsx     // Dynamic route (/blog/123)
  (auth)/          // Route group
    login/
      page.tsx     // /login (without auth in path)
  
// Navigation
import Link from 'next/link';
import { useRouter } from 'next/navigation';`,
  },

  // Route Groups
  {
    id: 19,
    question:
      "What are route groups in Next.js App Router and how to use them?",
    answer:
      "Route groups are folders wrapped in parentheses (folderName) that organize routes without affecting the URL path. They're useful for organizing related routes, creating different layouts for different sections, or grouping routes that share a layout without adding the group name to the URL.",
    category: "Next.js",
    difficulty: "Medium",
    codeExample: `// Route groups structure
app/
  (marketing)/
    layout.tsx     // Marketing layout
    about/
      page.tsx     // /about
    contact/
      page.tsx     // /contact
  (dashboard)/
    layout.tsx     // Dashboard layout
    dashboard/
      page.tsx     // /dashboard
    settings/
      page.tsx     // /settings

// The URL paths are: /about, /contact, /dashboard, /settings
// The group names (marketing, dashboard) don't appear in URLs`,
  },

  // Next.js Configuration
  {
    id: 20,
    question:
      "What can you configure in next.config.js and how to use middleware?",
    answer:
      "next.config.js configures build and runtime behavior including: environment variables, image domains, redirects, rewrites, headers, webpack customization, internationalization, and output settings. Next.js Middleware allows you to run code before a request completes, enabling authentication, redirects, and request/response manipulation.",
    category: "Next.js",
    difficulty: "Hard",
    codeExample: `// next.config.js
module.exports = {
  images: { domains: ['example.com'] },
  async redirects() {
    return [{ source: '/old', destination: '/new', permanent: true }];
  },
  env: { CUSTOM_KEY: 'value' }
};

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: '/dashboard/:path*' };`,
  },

  // Hydration
  {
    id: 21,
    question: "What is hydration in React and what causes hydration errors?",
    answer:
      "Hydration is the process where React attaches event listeners and makes the server-rendered HTML interactive on the client. Hydration errors occur when the server-rendered HTML doesn't match what React renders on the client. Common causes: using browser-only APIs, random values, or different data on server vs client.",
    category: "Rendering",
    difficulty: "Medium",
    codeExample: `// Fix hydration issues
function MyComponent() {
  // ❌ Bad: Causes hydration mismatch
  const randomId = Math.random();
  
  // ✅ Good: Use useEffect for client-only code
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;
  
  // ✅ Good: Suppress hydration warning
  return <div suppressHydrationWarning>{new Date().toLocaleString()}</div>;
}`,
  },
];

export const categories:Category[] = [
  {
    id: "all",
    name: "All Questions",
    icon: "⚛️",
    count: reactQuestions.length,
  },
  { id: "hooks", name: "Hooks", icon: "🎣", count: 10 },
  { id: "state-management", name: "State Management", icon: "📊", count: 8 },
  {
    id: "virtual-dom",
    name: "Virtual DOM",
    icon: "🌳",
    count: reactQuestions.filter((q) => q.category === "Virtual DOM").length,
  },
  {
    id: "react-fiber",
    name: "React Fiber",
    icon: "🧵",
    count: reactQuestions.filter((q) => q.category === "React Fiber").length,
  },
  {
    id: "concurrent",
    name: "Concurrent Features",
    icon: "⚡",
    count: reactQuestions.filter((q) => q.category === "Concurrent Features")
      .length,
  },
  {
    id: "pure-component",
    name: "Pure Component",
    icon: "💧",
    count: reactQuestions.filter((q) => q.category === "Pure Component").length,
  },
  {
    id: "lifecycle",
    name: "Lifecycle",
    icon: "🔄",
    count: reactQuestions.filter((q) => q.category === "Lifecycle").length,
  },
  {
    id: "hooks",
    name: "React Hooks",
    icon: "🎣",
    count: reactQuestions.filter((q) => q.category === "React Hooks").length,
  },
  {
    id: "performance",
    name: "Performance",
    icon: "⚡",
    count: reactQuestions.filter((q) => q.category === "Performance").length,
  },
  {
    id: "code-splitting",
    name: "Code Splitting",
    icon: "✂️",
    count: reactQuestions.filter((q) => q.category === "Code Splitting").length,
  },
  {
    id: "forms",
    name: "Forms",
    icon: "📝",
    count: reactQuestions.filter((q) => q.category === "Forms").length,
  },
  {
    id: "state-management",
    name: "State Management",
    icon: "📊",
    count: reactQuestions.filter((q) => q.category === "State Management")
      .length,
  },
  {
    id: "context-api",
    name: "Context API",
    icon: "🔄",
    count: reactQuestions.filter((q) => q.category === "Context API").length,
  },
  {
    id: "routing",
    name: "Routing",
    icon: "🗺️",
    count: reactQuestions.filter((q) => q.category === "Routing").length,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "▲",
    count: reactQuestions.filter((q) => q.category === "Next.js").length,
  },
  {
    id: "rendering",
    name: "Rendering",
    icon: "🎨",
    count: reactQuestions.filter((q) => q.category === "Rendering").length,
  },
];
