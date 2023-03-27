export default function Page({ params }: any) {
  const year: number = parseInt(params.year);
  const month: number = parseInt(params.month);

  return (
    <>
      <h1>Launches</h1>
      <div className="flex justify-center">
        <div className="flex flex-row">
          <p>
            Server component fetching mission data in {month}/{year} in a tabulated
            list including mission name, date, duration, etc...
          </p>
        </div>
      </div>
    </>
  );
}
