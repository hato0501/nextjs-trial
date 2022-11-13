import { useState } from 'react'
import styles from '../styles/Home.module.css'

const getControlResults = async () => {
    const response = await fetch("http://localhost:18080/control_station/ST1?scheduled_time=2022-10-01T00%3A15%3A00");
    const res = await response.json();
    console.log(res);
    return res;
}


export default function Home({ controlResults }: any) {
    const [controlDisplay, setControlDisplay] = useState(controlResults);

    const handleClick = async () => {
        const res = await getControlResults();
        setControlDisplay(res);
    }

    return (
        <div className={styles.container}>
            <main>
                <h1>制御結果</h1>
            </main>
            <div style={{ position: 'relative', width: 400, height: 400 }}>
                <li>scheduled time : {controlDisplay.scheduled_time}</li>
                <li>exec time : {controlDisplay.exec_time}</li>
                <li>call time : {controlDisplay.call_time}</li>
            </div>
            <button onClick={handleClick}>画像を検索</button>
        </div>
    )
}

export const getServerSideProps = async () => {
    // const response = await fetch("http://localhost:18080/control_station/ST1?scheduled_time=2022-10-01T00%3A15%3A00");
    const response = await fetch("http://hydrogen-ems-engine-container:18080/control_station/ST1?scheduled_time=2022-10-01T00%3A15%3A00");
    const res = await response.json();
    console.log(res);
    return {
        props: {
            controlResults: res
        }
    };
};

