import Link from 'next/link'
import Image from 'next/image'

import { basePath } from "../../next.config" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加

const Links = () => {
  return (
    <main className="max-w-7xl w-full mx-auto mt-5 px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/Instagram.png`} width={640} height={340} alt="Instagramの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">Instagram</h5>
            <p className="mb-4">日々の活動を定期的に発信中</p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kutwindbrass/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">
              Instagram
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/twitter.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">Twitter</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/windbrass_kut" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">Twitter
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/peing.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">質問箱peing</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://peing.net/ja/windbrass_kut" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">peing
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/youtube.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">YouTube</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/KUTWINDBRASS" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">YouTube
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/facebook.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">FaceBook</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/windbrass/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">FaceBook
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/blog.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">ブログ</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="http://wbrass.blog64.fc2.com/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">ブログ
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/kut.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">高知工科大学</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="http://www.kochi-tech.ac.jp/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">高知工科大学
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/kutclub.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">工科大クラブ活動ページ</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.kochi-tech.ac.jp/campus_life/activities/culture-club/-wind-brass-1.html" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">工科大brassページ
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/ku.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">高知大学</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="http://www.kochi-u.ac.jp/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">高知大学
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/kubrass.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">高知大学吹奏楽団</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://kuwwbb.jimdofree.com/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">高知大学吹奏楽団
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/kagamino.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">鏡野吹奏楽団</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="http://kagamino.sakura.ne.jp/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">鏡野吹奏楽団
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/musical.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">Musical Time</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://musical-time.jimdosite.com/" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">Musical Time
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
        <div className="relative bg-white shadow-md rounded-md overflow-hidden">
          <Image src={`${BASE_PATH}/links/jazzken.png`} width={640} height={340} alt="カードの画像" className="object-cover w-full h-48" />
          <div className="p-4">
            <h5 className="text-lg font-semibold mb-2">JAZZ研究会</h5>
            <p className="mb-4"></p>
            <a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/view/tssj" className="underline absolute bottom-3 right-4 text-blue-500 hover:text-orange-400 flex items-center">JAZZ研究会
              <i className="bi bi-arrow-up-right-square ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Links;
