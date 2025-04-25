import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics'
import { basePath } from "../next.config" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加

const inter = Inter({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
})

export const metadata: Metadata = {
    title: 'KUT WINDBRASS',
    description: '高知工科大学 吹奏楽部 KUT WINDBRASS のWEBページです',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    //console.log("© 2024 mosunset. All rights reserved.")
    //console.log("Github https://github.com/mosunset/kut-brass")
    return (
        <html lang="ja">
            <head>
                <GoogleAnalytics/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
                <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"></link>

                {/* <link rel="stylesheet" href="path-to-the-file/splide.min.css"></link> */}
            </head>
            <body className="flex flex-col min-h-screen">

                {children}

                <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto mt-auto">
                    <div className="text-center">
                        <div className='flex justify-center items-center'>
                            <Link href="/" className="flex justify-center items-center text-xl font-semibold text-black max-w-fit p-6">
                                <Image src={`${BASE_PATH}/brass_logo.png`} width={40} height={40} priority alt={''} className='mr-2' />
                                <span>KUT WINDBRASS</span>
                            </Link>
                        </div>
                         <div className="hidden"> {/* hidden */}
                            <p className="text-gray-500">&copy; 2024 mosunset. All rights reserved.
                                <span className='px-2'>|</span>
                                <a href="https://github.com/mosunset/kut-brass" target="_blank" rel="noopener noreferrer" className='font-semibold text-blue-600 hover:text-blue-700'>GitHub</a>
                            </p>
                        </div>
                        <div className="mt-2 space-x-1">
                            <a href="https://www.kochi-tech.ac.jp/campus_life/activities/culture-club/-wind-brass-1.html" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition">
                                <Image src={`${BASE_PATH}/kut_logo.png`} width={20} height={20} priority alt={''} className='flex-shrink-0 w-4 h-3.5' />
                            </a>
                            <a href="https://www.instagram.com/kutwindbrass/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition ">
                                <i className="bi bi-instagram flex-shrink-0 w-3.5 h-3.5 -mt-2.5"></i>
                            </a>
                            <a href="https://twitter.com/windbrass_kut" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition">
                                <i className="bi bi-twitter flex-shrink-0 w-3.5 h-3.5 -mt-2.5"></i>
                            </a>
                            <a href="https://peing.net/ja/windbrass_kut" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition">
                                <i className="bi bi-box-seam flex-shrink-0 w-3.5 h-3.5 -mt-2.5"></i>
                            </a>
                            <a href="https://www.youtube.com/user/KUTWINDBRASS" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition">
                                <i className="bi bi-youtube flex-shrink-0 w-3.5 h-3.5 -mt-2.5"></i>
                            </a>
                            <a href="https://www.facebook.com/windbrass/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition">
                                <i className="bi bi-facebook flex-shrink-0 w-3.5 h-3.5 -mt-2.5"></i>
                            </a>
                            <a href="http://wbrass.blog64.fc2.com/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition">
                                <i className="bi bi-newspaper flex-shrink-0 w-3.5 h-3.5 -mt-2.5"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
