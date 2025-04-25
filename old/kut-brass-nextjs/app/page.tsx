import Image from 'next/image'
import SlideshowComponent from './SlideshowComponent';

const Home = () => {
    return (
        <main className="max-w-7xl w-full mx-auto mt-0 px-4 sm:px-6 lg:px-8">
            <div>
                <div className='relative'>
                     <div className='max-h-screen blur-sm'>{/* blur-sm */}
                        <SlideshowComponent />
                    </div>
                    <h1 className='text-center min-w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-4xl lg:text-6xl text-yellow-400 font-bold decoration-1'>
                        WIND BRASS<br />Kochi University of Technology
                    </h1>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-3xl sm:text-5xl font-bold text-center my-4'>音楽をみんなで楽しむ！</h1>
                    <div>
                        <p className='mx-4'>
                            吹奏楽部WIND BRASSは「音楽のジャンルにとらわれない新しい音楽団体」としてクラシック、ポップス、ジャズ、演歌など様々なジャンルを演奏しています。大きな演奏会として、10月位に行われるオータムコンサート、2月末に行われる定期演奏会があります。また、大学祭やクリスマスのイベント、老人ホーム、公園、公民館など様々な場所で活動しています。アンサンブルコンテストなどの大会にて行っており、地域に愛されるバンドを目指して日々活動中です。
                        </p>
                        <p className='text-red-600 font-bold text-xl sm:text-2xl lg:text-3xl text-center my-4'>メンバーは大学から始めた初心者や経験者も沢山います。<br />随時部員募集中!! ぜひ見学に来てください!!</p>
                    </div>
                </div>
                <h2 className='text-3xl border-b border-gray-400 my-4 px-2 block'>吹奏楽部の情報</h2>
                <div className='sm:flex flex-none justify-evenly mb-4'>
                    <div className='flex'>
                        <div className='m-2'>
                            <i className="bi bi-clock text-3xl"></i>
                        </div>
                        <div className='flex flex-col m-2'>
                            <h2 className='text-3xl mb-2'>時間</h2>
                            <p>毎週 水・金・日 18:00~21:00</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='m-2'>
                            <i className="bi bi-pin-map text-3xl"></i>
                        </div>
                        <div className='flex flex-col m-2'>
                            <h2 className='text-3xl mb-2'>場所</h2>
                            <p>高知工科大学講堂</p>
                            <p className='text-right'>など</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col m-2'>
                            <i className="bi bi-question text-3xl"></i>
                        </div>
                        <div className='m-2'>
                            <h2 className='text-3xl mb-2'>その他</h2>
                            <p>設立 : 1998年<br />部員数 : 44人(2023年)<br />部費 : 10,000円/年</p>
                        </div>
                    </div>
                </div>
                <iframe src="https://calendar.google.com/calendar/embed?title=windbrass%E4%BA%88%E5%AE%9A%E8%A1%A8&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=260&amp;wkst=1&amp;bgcolor=%23ff9966&amp;src=kutwindbrass%40gmail.com&amp;color=%232952A3&amp;ctz=Asia%2FTokyo" width="100%" height="300px"></iframe>
            </div>
        </main>
    )
}

export default Home;
