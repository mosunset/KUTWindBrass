import Link from 'next/link'
import Image from 'next/image'

import { basePath } from "../../next.config" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加

const Concert_info = () => {
  return (
    <main className="max-w-7xl w-full mx-auto mt-5 px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* カードスタート */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/concertinfo/定演23.png`} width={640} height={340} alt="画像" className="object-cover w-full" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">第23回定期演奏会 無観客ライブ</h5>
            <p className="mb-4">2022/2/27(日)</p>
          </div>
          <div className="items-center bg-gray-400 p-4">
            <p className="text-base text-red-700">※新型コロナウイルスの影響で中止となりました。</p>
            <p>楽しみにしていただいた方にはご迷惑をおかけすることとなり、申し訳ございません。</p>
          </div>
        </div>
        {/* カードエンド */}
      </div>
    </main>
  );
};

export default Concert_info;
