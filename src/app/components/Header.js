"use client";
import Link from 'next/link';

export default function Header() {
    return (
        <main>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container-fluid navsection">
                    <Link href="" class="navbar-brand navhead"><b>Food Funda</b></Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link href="" class="nav-link active navhead" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/about" class="nav-link navhead">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/student" class="nav-link navhead">Student</Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/about/aboutstudent" class="nav-link navhead">Contact Us</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link href="/login" class="nav-link active navhead" aria-current="page">Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </main>
    )
}
