import Link from "next/link";

export default function StudentList() {
    return (
      <main>
        <h1>Student List</h1>
        <ul>
            <li><Link href="/student/1"> Shiv verma</Link></li>
            <li><Link href="/student/2"> Rahul verma</Link></li>
            <li><Link href="/student/3"> Amit verma</Link></li>
        </ul>
      </main>
    )
  }
  