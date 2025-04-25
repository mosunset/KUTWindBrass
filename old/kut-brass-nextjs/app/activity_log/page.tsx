// Reactをインポート
import React from 'react';
import json from '../../public/activity_log.json'

// Activity_logコンポーネントを定義
const Activity_log = () => {
    // console.log(json.log)
    return (
        <main className="max-w-7xl w-full mx-auto mt-5 px-4 sm:px-6 lg:px-8">
            {json.log.map((entry, index) => (
                <div key={index} className="mb-6">
                    <p className="text-2xl font-bold border-b-2 mb-2">{entry.year}年 {entry.history.length}回</p>
                    <ul className="pl-5">
                        {/* historyデータをマップして表示 */}
                        {entry.history.map((event, eventIndex) => (
                            <li key={eventIndex} className="mb-1">{event}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </main>
    );
};




// Activity_logコンポーネントをエクスポート
export default Activity_log;
