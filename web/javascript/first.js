var aveTime = 0;
let i = 0;
let startTime;
let endTime;
let random;


function startTest() {
    end = 1;
    document.getElementById('startButton').innerText = '시작하기'
    document.getElementById('endButton').style.backgroundColor = 'pink';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('endButton').style.display = 'inline-block';
    document.getElementById('reactionTime').innerText = "아직입니다!";
    document.getElementById('explanation').style.display = 'none';
    setTimeout(showClickPrompt, Math.random() * 3000 + 2000); // 2초에서 5초 사이의 랜덤 대기 시간 후에 클릭 안내 메시지를 표시    
}



function showClickPrompt() {
    if (end === 1) {
    document.getElementById('endButton').style.backgroundColor = 'rgb(51, 214, 160)';
    document.getElementById('reactionTime').innerText = "지금 클릭하세요!";
    startTime = new Date().getTime();
    }
}

document.getElementById('endButton').addEventListener('click', function() {
    if (startTime) {
        if (i < 3) {
            end = 0;
            i = i + 1;
            endTime = new Date().getTime();
            let reacTime = (endTime - startTime); // 밀리초를 초로 변환
            document.getElementById('reactionTime').innerText = `반응 시간: ${reacTime}.ms`;
            document.getElementById('startButton').style.backgroundColor = 'rgb(51, 214, 160)';
            document.getElementById('startButton').innerText = '다음'
            aveTime = aveTime + reacTime;
            startTime = null;
            document.getElementById('startButton').style.display = 'inline-block';
            document.getElementById('endButton').style.display = 'none';
            if (i === 3) {
                aveTime = aveTime / 3;
                document.getElementById('reactionTime').innerText = `테스트 결과: ${aveTime.toFixed(0)}.ms`;
                document.getElementById('startButton').innerText = '다시 시작하기'
                document.getElementById('startButton').style.backgroundColor = 'white';
                i = 0;
            }
        }
    }
    else if (end === 1) {
        end = 0;
        startTime = null;
        document.getElementById('reactionTime').innerText = '다시'
        document.getElementById('startButton').style.display = 'inline-block';
        document.getElementById('endButton').style.display = 'none';
        document.getElementById('startButton').innerText = '다시 시작하기'
        document.getElementById('startButton').style.backgroundColor = 'white';
        i = 0;
    }
})