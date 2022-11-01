import AllProcess from "./AllProcess"

function BoardList() {
  return (
    <>
      <div className="container mx-auto">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AllProcess/>
        </main>
      </div>
    </>
  );
}

export default BoardList;
