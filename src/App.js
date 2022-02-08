// import Items from "./Components/basic/Items";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Pages from "./Components/pagination/Pages";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Pages />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
