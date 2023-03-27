import { redirect } from 'next/navigation';

// Component data is populated via params.
// Therefore, a year param is needed. Default is 2018.
export default function Page() {
    // If the user goes to URL/launches, redirect:
    redirect('/launches/2020');
}