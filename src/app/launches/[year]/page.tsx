import { launchesQuery } from '../../../graphql/queries'
import { print } from "graphql/language/printer"
import LaunchesMonth from "@/components/LaunchesMonth";

interface Launch {
    id: string
    launchDate: string
}

async function getLaunches(year: number) {
    try {
        const res = await fetch('https://main--spacex-l4uc6p.apollographos.net/graphql', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                query: print(launchesQuery)
            }),
        });

        const data = await res.json();
        const dict: Record<string, number> = {};
        for(let i = 0; i < data['data']['launchesPast'].length; i++) {
            // Sample UTC: 2018-01-31T21:25:00.000Z
            let incrementalYear = parseInt(data['data']['launchesPast'][i].launch_date_utc.substring(0,4)); // Convert the data point UTC to a year
            let incrementalMonth = parseInt(data['data']['launchesPast'][i].launch_date_utc.substring(5)); // Convert the data point UTC to a month
            if(incrementalYear === year) { // If the data is within the year we want, then we should add it to the dictionary
                if( !(incrementalMonth in dict)) { // If the month is not in the dictionary yet, add the month as a key & set value of that key to 1 launch.
                    dict[incrementalMonth] = 1;
                }
                else { // The month is in the dictionary, so increment the number of launches for that month
                    dict[incrementalMonth] = dict[incrementalMonth] + 1;
                }
            }
        }

        return dict;
    } catch (error) {
        return {}; // TODO: change return type on error
    }
}

// TODO: componentize this (pattern of divs inside parent wrapper).
export default async function Page({params}: any) {

    const year : number = parseInt(params.year);

    const data = await getLaunches(year);

    // const keys = Object.keys(data); // Years
    const values = Object.values(data); // Launches
    const max = Math.max(...values); // Maximum value for launches s

    return (
        <div className="mt-14 ml-48 w-auto p-4 pb-12 m-4 bg-gray-800 rounded-xl flex flex-col gap-4">
          <div className="flex flex-col mb-4 gap-4">
            <h1>Launches</h1>
            <div className="flex justify-center">
              <div className='flex flex-row w-full'>
                {values.map((number, index) => {
                    return (
                        <LaunchesMonth key={index} number={number} max={max} year={year} index={index}/>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
    );
}
  