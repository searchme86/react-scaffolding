import Items from "./Components/basic/Items";
// import Pages from "./Components/pagination/Pages";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="title">Blog Posts</h1>
        {/* <Pages /> */}
        <Items />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
