export default function Page({params}:any) {

    const year : number = parseInt(params.year);
    const month : number = parseInt(params.month);

    return (
        <div className="mt-14 ml-48 w-auto p-4 pb-12 m-4 bg-gray-800 rounded-xl flex flex-col gap-4">
          <div className="flex flex-col mb-4 gap-4">
            <h1>Launches</h1>
            <div className="flex justify-center">
              <div className='flex flex-row'>
                <p>{month}/{year}</p>
              </div>
            </div>
          </div>
        </div>
    );
}