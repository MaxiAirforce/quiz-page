const container = document.getElementById("container");

const game = new class Game {
    
    constructor (){
        this.question = 0;
        this.init();
    }

    init () {
        container.innerHTML += this.quizHTML(0, data[0].question, data[0].reponses);
    }

    next() {
        this.question++;
        if (this.question === data.length) return location.reload();
        container.innerHTML += this.quizHTML(this.question, data[this.question].question, data[this.question].reponses);
        setTimeout(() => {
            container.scrollTo(this.question * document.getElementById("quiz0").clientWidth, 0);
        }, 250);
    }

    wrong(id) {
        document.getElementById(id).style.animationPlayState = "running";
    }

    quizHTML(number, question, answers) {
        return `
            <div id="quiz${number}" class="quiz quiz-${number}">
                <div class="progress"></div>
                <div class="question">${question}</div>
                <div class="answers">
                    <div id="answer${number}1" onClick="${answers[0].isTrue ? "game.next()" : `game.wrong('answer${number}1')`}" class="answer"><span class="markdown">A.</span> ${answers[0].text}</div>
                    <div id="answer${number}2" onClick="${answers[1].isTrue ? "game.next()" : `game.wrong('answer${number}2')`}" class="answer"><span class="markdown">B.</span> ${answers[1].text}</div>
                    <div id="answer${number}3" onClick="${answers[2].isTrue ? "game.next()" : `game.wrong('answer${number}3')`}" class="answer"><span class="markdown">C.</span> ${answers[2].text}</div>
                </div>
            </div>
        `
    }
}

function togglePopup() {
    document.getElementById("popup").style.display = "none";
}
