import Link from 'next/link'

const Contact = () => {
    return (
        <main className="max-w-7xl w-full mx-auto mt-5 px-4 sm:px-6 lg:px-8">
            <p>
                演奏依頼・質問などは
            </p>
            <Link href="/links/" className='text-2xl underline underline-offset-1 text-blue-700 hover:text-orange-400 mt-5 px-1 py-2 sm:px-2 sm:py-6 '>Twitter・Instagramのダイレクトメッセージや質問箱peing</Link>
            <p className="mt-5">
                または、
            </p>
            <p className="mt-5 text-2xl">kutwindbrass<i className="bi bi-at"></i>gmail.com</p>
            <p className='text-sm'>(スパム対策のため<i className="bi bi-at"></i>をコピーできなくしています。)</p>
            <p className="mt-5">に、お願いします。</p>
            <p className="mt-5">
                ※gooメールの無料版サービスの提供終了につき、お問い合わせ用メールアドレスを変更いたしました。<br />
                下記のgooメールのアドレスで登録された方は変更よろしくお願い致します。
            </p>
            <p className="mt-5 text-gray-700">
                旧メールアドレス<br />
                kutwindbrass<i className="bi bi-at"></i>mail.goo.ne.jp
            </p>
        </main>
    );
};

export default Contact;
