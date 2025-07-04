import { useEffect, useRef, useState } from "react";

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("it-IT"))
  const [startTime, setStartTime] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    if(startTime){
      intervalRef.current = setInterval(() => {
        setTime(new Date().toLocaleTimeString("it-IT"))
      }, 1000)
    }
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [startTime])

  const splitTime = () => {
    return time.replace(/:/g, "").split("")
  }
  const timeArray = splitTime()

  return (
    <div className="timer-container">
      <h1 className="timer-title">RealTime Clock</h1>
      <div className="timer-wrap">
        <p className="timer-time">{timeArray[0]}</p>
        <p className="timer-time">{timeArray[1]}</p>
        <p className="timer-time">시</p>
        <p className="timer-time">{timeArray[2]}</p>
        <p className="timer-time">{timeArray[3]}</p>
        <p className="timer-time">분</p>
        <p className="timer-time">{timeArray[4]}</p>
        <p className="timer-time">{timeArray[5]}</p>
        <p className="timer-time">초</p>
      </div>
      <button onClick={() => setStartTime((prev) => !prev)} className={startTime? "off-button" : "on-button"}>{startTime? "타이머 정지": "타이머 실행"}</button>
    </div>
  );
}

export default Clock