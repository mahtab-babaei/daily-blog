import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      Daily Blog
      <Pagination itemCount={20} pageSize={5} currentPage={1} />
    </div>
  );
}
