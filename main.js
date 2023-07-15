var btnDefaults = document.querySelectorAll('.btn--default');
var question = document.getElementById('question');
var footer = document.querySelector('footer');
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
var questions = [
    new Question("Tên đầy đủ của tôi là gì?", [ "Nguyễn Ngọc Xuyên", "Nguyễn Thị Xuyên", "Nguyễn Thị Ngọc Xuyên", "Tôi không biết" ], "Nguyễn Thị Ngọc Xuyên"),
    new Question("Ngày sinh của tôi là ngày bao nhiêu?", ["16/9/2003","26/9/2003", "06/9/2003", "Tôi không biết"], "26/9/2003"),
    new Question("Sở thích của tôi là gì?", ["Chụp ảnh","Đi chơi", "Ngủ", "Ăn uống"], "Chụp ảnh"),
    new Question("Tôi học trường nào?", ["Cao đẳng KT-KT Cần Thơ","Cao Đẳng Cần Thơ", "Đại Học Cần Thơ", "Ở Nhà"], "Cao đẳng KT-KT Cần Thơ"),
    new Question("Tên facebook của tôi là gì?", ["Nguyễn Ngọc Xuyên","Xuyên", "Ngọcc Xuyênn", "Ngọc Xuyên"], "Ngọcc Xuyênn"),
    new Question("Tôi đang học ngành gì?", ["Quản Trị Kinh Doanh","Quản Lí Đất Đai", "Công Nghệ Thông Tin", "Nuôi Trồng Thủy Sản"], "Công Nghệ Thông Tin"),
    new Question("Bạn thân của tôi tên gì?", ["Ngân","Duy", "Ai biết", "Không có bạn thân"], "Ngân")
];

function quest(){
    var  i = 0;
    var score = 0;
    var choi;
    if(i == 0){
        question.innerHTML = questions[0].text;
    }
    choice(i);
    btnDefaults.forEach(function(btnDefault){
        btnDefault.onclick = function(e){
            switch(e.target.id){
                case 'guess0':
                    choi = 0;
                    break;
                case 'guess1':
                    choi = 1;
                    break;
                case 'guess2':
                    choi = 2;
                    break;
                case 'guess3':
                    choi = 3;
                    break;
            };
            var choices = document.getElementById(`choice${choi}`);
            if(choices.innerText == questions[i].answer){
                score++;
                console.log(score);
            }
            i++;
            if(i >= questions.length){
                var h3 = document.getElementById('score');
                footer.innerHTML = '';
                for(var k = 0 ; k < 4 ; k++){
                    var choi = document.getElementById(`choice${k}`);
                    var gue = document.getElementById(`guess${k}`);
                    choi.style.display = 'none';
                    gue.style.display = 'none';
                }
                var h1 = document.querySelector('h1');
                h1.innerText = 'Game Over'
                question.innerText = `Your score is:${score}`
                if(score < 7){
                    h3.innerText = 'Bạn Thật Tệ!'
                }else{
                    h3.innerText = 'Bạn Thật Tuyệt Vời...'
                }
            }else{
                question.innerHTML = questions[i].text;
                choice(i);
            }
        }
    })
    
}
quest();

function choice(quest) {
    for(var i = 0 ; i < 4 ; i++){
        var choice = document.getElementById(`choice${i}`);
        choice.innerHTML = questions[quest].choices[i];
    }
}





