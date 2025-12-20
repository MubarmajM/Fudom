        var timeL;
        var timeO = parseInt(new URLSearchParams(window.location.search).get('time'));
        timeL = timeO
        var score;
        score = 0;
        function setTime() {
            timeL--;
            document.getElementById("time_left").textContent = `Time left: ${timeL}`;
            if (timeL === 0) {
                // GO to score page
                window.location.href = `score.html?score=${score}&time=${(timeO-1)}`;
        }
        }
        setTime();
        window.setInterval(setTime, 1000);

        function setScore() {
            score++;
            document.getElementById("score").textContent = `Score: ${score}`;
            document.getElementById("butter_sound").play();
        }


    