"use client";

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { basePath } from "../next.config" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加

export default function Template({ children }: { children: React.ReactNode }) {
    // 現在のページのパスを取得
    const pathname = usePathname();
    return (
        <>
            <header className="sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0">
                <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-center">
                        <Link href="/" className="flex flex-wrap sm:justify-start sm:flex-nowrap text-xl sm:py-5">
                            <Image src={`${BASE_PATH}/brass_logo.png`} width={40} height={40} alt={'brass logo'} className='mr-2' />
                            <div className='flex-none text-xl font-semibold'>KUT <wbr />WINDBRASS</div>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center ms:max-w-fit hs-collapse overflow-hidden block">
                        <div className="flex gap-y-2 gap-x-1 mt-2.5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-0 sm:mt-0 sm:ps-7">
                            <Link href="/" className={pathname === '/' ? 'min-w-fit text-blue-700 px-1 py-2 sm:px-2 sm:py-6 font-black' : 'min-w-fit text-gray-900 hover:text-orange-400 px-1 py-2 sm:px-2 sm:py-6 '}>ホーム</Link>
                            <Link href="/concert_info/" className={pathname === '/concert_info/' ? 'min-w-fit text-blue-700 px-1 py-2 sm:px-2 sm:py-6 font-black' : 'min-w-fit text-gray-900 hover:text-orange-400 px-1 py-2 sm:px-2 sm:py-6 '}>演奏情報</Link>
                            <Link href="/activity_log/" className={pathname === '/activity_log/' ? 'min-w-fit text-blue-700 px-1 py-2 sm:px-2 sm:py-6 font-black' : 'min-w-fit text-gray-900 hover:text-orange-400 px-1 py-2 sm:px-2 sm:py-6 '}>活動記録</Link>
                            <Link href="/links/" className={pathname === '/links/' ? 'min-w-fit text-blue-700 px-1 py-2 sm:px-2 sm:py-6 font-black' : 'min-w-fit text-gray-900 hover:text-orange-400 px-1 py-2 sm:px-2 sm:py-6 '}>SNS等</Link>
                            <Link href="/contact/" className={pathname === '/contact/' ? 'min-w-fit text-blue-700 px-1 py-2 sm:px-2 sm:py-6 font-black' : 'min-w-fit text-gray-900 hover:text-orange-400 px-1 py-2 sm:px-2 sm:py-6 '}>お問い合わせ</Link>
                        </div>
                    </div>
                </nav>
            </header>
            {children}
        </>
    );
}
