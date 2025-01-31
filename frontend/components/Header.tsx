export default function Header({ totalResults }: { totalResults: number }) {
  return (
    <div className="header">
      <div>
        <h1 className="header-title">Explore Apartments</h1>
        <p className="header-info">{totalResults} Results Available</p>
      </div>
      <div className="header-controls">
        <button className="filter-btn">Filter <span className="filter-badge">1</span></button>
        <button className="sort-btn">Sort By</button>
      </div>
    </div>
  );
}