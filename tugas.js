var tmrsuperman, arahsupermanleft, arahsupermantop, tmrbatman, arahbatmanleft, arahbatmantop, tmrthor, arahthorleft, arahthortop, tmrhulk, arahhulkleft, arahhulktop, tmriron_man, arahiron_manleft, arahiron_mantop, tmrspiderman, arahspidermanleft, arahspidermantop;

function start(){
    clearInterval(tmrsuperman, tmrbatman,tmrthor,tmrhulk,tmriron_man,tmrspiderman);
    tmrsuperman = setInterval("geraksuperman()", 60);
    arahsupermantop = 10; //untuk gerak y
    arahsupermanleft = 10; //untuk gerak x
    tmrbatman = setInterval("gerakbatman()", 60);
    arahbatmantop = 20; //untuk gerak y
    arahbatmanleft = 10; //untuk gerak x
    tmrthor = setInterval("gerakthor()", 60);
    arahthortop = 10; //untuk gerak y
    arahthorleft = 20; //untuk gerak x
    tmrhulk = setInterval("gerakhulk()", 60);
    arahhulktop = 15; //untuk gerak y
    arahhulkleft = 15; //untuk gerak x          
    tmriron_man = setInterval("gerakiron_man()", 60);
    arahiron_mantop = 10; //untuk gerak y
    arahiron_manleft = 20; //untuk gerak x
    tmrspiderman = setInterval("gerakspiderman()", 60);
    arahspidermantop = 10; //untuk gerak y
    arahspidermanleft = 20; //untuk gerak x

}
function geraksuperman(){
    var supermany = parseInt(document.getElementById("superman").style.top);
    var supermanx = parseInt(document.getElementById("superman").style.left);    
    supermany = supermany + arahsupermantop;
    supermanx = supermanx + arahsupermanleft;
    if (supermanx <= 20 || supermanx >= 635 - 70){
        arahsupermanleft = arahsupermanleft * -1;//cek kiri sama batas kanan
    }
    if (supermany + 40 >= 570) { //jika tidak
        arahsupermantop = arahsupermantop * -1;
    }
    else if (supermany <= 30 || supermany >= 500){//jika lebih besar dari ukuran div
    arahsupermantop = arahsupermantop * -1;
    }
    document.getElementById("superman").style.left = supermanx + "px";
    document.getElementById("superman").style.top = supermany + "px";
}
function gerakbatman(){
    var batmany = parseInt(document.getElementById("batman").style.top);
    var batmanx = parseInt(document.getElementById("batman").style.left);    
    batmany = batmany + arahbatmantop;
    batmanx = batmanx + arahbatmanleft;
    if (batmanx <= 20 || batmanx >= 635 - 70){
        arahbatmanleft = arahbatmanleft * -1;//cek kiri sama batas kanan
    }
    if (batmany + 40 >= 570) { //jika tidak
        arahbatmantop = arahbatmantop * -1;
    }
    else if (batmany <= 50 || batmany >= 520){//jika lebih besar dari ukuran div
    arahbatmantop = arahbatmantop * -1;
    }
    document.getElementById("batman").style.left = batmanx + "px";
    document.getElementById("batman").style.top = batmany + "px";
}
function gerakthor(){
    var thory = parseInt(document.getElementById("thor").style.top);
    var thorx = parseInt(document.getElementById("thor").style.left);    
    thory = thory + arahthortop;
    thorx = thorx + arahthorleft;
    if (thorx <= 20 || thorx >= 635 - 70){
        arahthorleft = arahthorleft * -1;//cek kiri sama batas kanan
    }
    if (thory + 40 >= 570) { //jika tidak
        arahthortop = arahthortop * -1;
    }
    else if (thory <= 30 || thory >= 550){//jika lebih besar dari ukuran div
    arahthortop = arahthortop * -1;
    }
    document.getElementById("thor").style.left = thorx + "px";
    document.getElementById("thor").style.top = thory + "px";
}
function gerakhulk(){
    var hulky = parseInt(document.getElementById("hulk").style.top);
    var hulkx = parseInt(document.getElementById("hulk").style.left);    
    hulky = hulky + arahhulktop;
    hulkx = hulkx + arahhulkleft;
    if (hulkx <= 20 || hulkx >= 635 - 70){
        arahhulkleft = arahhulkleft * -1;//cek kiri sama batas kanan
    }
    if (hulky + 40 >= 570) { //jika tidak
        arahhulktop = arahhulktop * -1;
    }
    else if (hulky <= 30 || hulky >= 550){//jika lebih besar dari ukuran div
    arahhulktop = arahhulktop * -1;
    }
    document.getElementById("hulk").style.left = hulkx + "px";
    document.getElementById("hulk").style.top = hulky + "px";
}
function gerakiron_man(){
    var iron_many = parseInt(document.getElementById("ironman").style.top);
    var iron_manx = parseInt(document.getElementById("ironman").style.left);    
    iron_many = iron_many + arahiron_mantop;
    iron_manx = iron_manx + arahiron_manleft;
    if (iron_manx <= 20 || iron_manx >= 630 - 70){
        arahiron_manleft = arahiron_manleft * -1;//cek kiri sama batas kanan
    }
    if (iron_many + 40 >= 570) { //jika tidak
        arahiron_mantop = arahiron_mantop * -1;
    }
    else if (iron_many <= 30 || iron_many >= 550){//jika lebih besar dari ukuran div
    arahiron_mantop = arahiron_mantop * -1;
    }
    document.getElementById("ironman").style.left = iron_manx + "px";
    document.getElementById("ironman").style.top = iron_many + "px";
}
function gerakspiderman(){
    var spidermany = parseInt(document.getElementById("spiderman").style.top);
    var spidermanx = parseInt(document.getElementById("spiderman").style.left);    
    spidermany = spidermany + arahspidermantop;
    spidermanx = spidermanx + arahspidermanleft;
    if (spidermanx <= 20 || spidermanx >= 635 - 70){
        arahspidermanleft = arahspidermanleft * -1;//cek kiri sama batas kanan
    }
    if (spidermany + 40 >= 570) { //jika tidak
        arahspidermantop = arahspidermantop * -1;
    }
    else if (spidermany <= 30 || spidermany >= 550){//jika lebih besar dari ukuran div
    arahspidermantop = arahspidermantop * -1;
    }
    document.getElementById("spiderman").style.left = spidermanx + "px";
    document.getElementById("spiderman").style.top = spidermany + "px";
}

$(document).ready(function () {
    $(function () {
        var score = 0;
        var words = ['superman', 'spiderman', 'thor', 'hulk', 'ironman', 'batman'];
        function updateRandomWord() {
            if (words.length === 0) {
                alert('Total Score= '+score);
                return;
            }
            var randomIndex = Math.floor(Math.random() * words.length);
            var randomWord = words[randomIndex];
            $('#randomWord').text(randomWord);
            words.splice(randomIndex, 1); 
            return randomWord;
        }
        var answer = updateRandomWord();
        $('#superman').draggable({
            revert: true
        });
        $("#batman").draggable({
            revert: true 
        });
        $("#thor").draggable({
            revert: true 
        });
        $("#hulk").draggable({
            revert: true 
        });
        $("#ironman").draggable({
            revert: true
        });
        $("#spiderman").draggable({
            revert: true 
        });
        $("#containerAns").droppable({
            drop: function(event, ui) {
                var question = ui.draggable.attr('id');
                if (question === answer) {
                    score += 10;
                    $('#score').text('Score: ' + score);
                    ui.draggable.remove(); 
                    answer = updateRandomWord(); 
                } else {
                    score -= 5;
                    $('#score').text('Score: ' + score);
                }
            }
        });
    });
});