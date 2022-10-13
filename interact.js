
// 轮播图
let order = 0
let x = setInterval(function () {
    order++
    exchange()
}, 7000);
function exchange() {
    // 由图片数量决定
    if (order < 0) {
        order = 4
    }
    else if (order > 4) {
        order = 0
    }
    let outer = document.querySelector(".outer")
    let width = getComputedStyle(outer).width
    width = parseInt(width.slice(0, 3))
    console.log(width)
    outer.querySelector(".inner").style.left = order * (-1) * width + "px"
    clearInterval(x)
    x = setInterval(function () {
        order++
        exchange()
    }, 7000);
}
function leftshift() {
    order--
    exchange()
}
function rightshift() {
    order++
    exchange()
}
function setorder(o) {
    order = o
    exchange()
}


// 翻转日历
let ye = 0
function zhuanhuan() {
    if (ye == 0) {
        document.querySelector(".fanzhuan").style.transform = "rotateY(-180deg)";
        let x = document.querySelectorAll(".jilu")
        x[0].style.display = "none"

        x[1].style.display = "block"
        ye = 1
    }
    else {
        document.querySelector(".fanzhuan").style.transform = "rotateY(0deg)";
        let x = document.querySelectorAll(".jilu")
        x[1].style.display = "none"

        x[0].style.display = "block"
        ye = 0
    }

}
// 流星效果
function liuxing() {
    let xing = document.querySelectorAll(".star")
    console.log(xing)
    xing[0].style.animation = "move 1s ease 1 forwards"
    xing[1].style.animation = "move 1s ease 1 forwards"
    xing[2].style.animation = "move 1s ease 1 forwards"
    xing[3].style.animation = "move 1s ease 1 forwards"
    xing[4].style.animation = "move 1s ease 1 forwards"
    xing[5].style.animation = "move 1s ease 1 forwards"
}
let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0

function zhankai1() {
    if (a == 0) {
        document.querySelector(".jia").style.display = "block"
        a = 1
    }
    else {
        document.querySelector(".jia").style.display = "none"
        a = 0
    }
}
function zhankai2() {
    if (b == 0) {
        document.querySelector(".bing").style.display = "block"
        b = 1
    }
    else {
        document.querySelector(".bing").style.display = "none"
        b = 0
    }
}
function zhankai3() {
    if (c == 0) {
        document.querySelector(".kui").style.display = "block"
        c = 1
    }
    else {
        document.querySelector(".kui").style.display = "none"
        c = 0
    }
}
function zhankai4() {
    if (d == 0) {
        document.querySelector(".ji").style.display = "block"
        d = 1
    }
    else {
        document.querySelector(".ji").style.display = "none"
        d = 0
    }
}
function zhankai5() {
    if (e == 0) {
        document.querySelector(".geng").style.display = "block"
        e = 1
    }
    else {
        document.querySelector(".geng").style.display = "none"
        e = 0
    }
}
function zhankai6() {
    if (f == 0) {
        document.querySelector(".shen").style.display = "block"
        f = 1
    }
    else {
        document.querySelector(".shen").style.display = "none"
        f = 0
    }
}
setTimeout(function () {
    let storage = window.localStorage
    let mm = storage.getItem("mz")
    console.log(mm)
    document.getElementById("user").innerHTML = mm
}, 1)
// 上传记录
let date = new Date()
let shu = 0
function sc() {
    let neirong = document.querySelector("#text").value
    console.log(neirong)

    if (neirong.value == '') { alert('是不是忘了点什么？') }
    else {
        let nian = date.getFullYear()
        let yue = date.getMonth() + 1
        let ri = date.getDate()
        let shi = date.getHours()
        let fen = date.getMinutes()
        let miao = date.getSeconds()
        shi = shi < 10 ? '0' + shi : shi
        fen = fen < 10 ? '0' + fen : fen
        miao = miao < 10 ? '0' + miao : miao
        let riqi = nian + '年' + yue + '月' + ri + '日' + shi + '：' + fen + '：' + miao
        console.log(riqi)
        let jilu = document.querySelectorAll(".jilu")
        let shijian = document.createElement('div')
        shijian.classList.add("riqi")
        jilu[1].appendChild(shijian)
        shijian.style.transform = "translate(474px,0)"
        shijian.style.marginTop = "44px"
        shijian.innerHTML = riqi
        let tianjia = document.createElement('div')
        tianjia.classList.add("zhengwen")
        tianjia.classList.add("huanse")
        jilu[1].appendChild(tianjia)
        tianjia.innerHTML = neirong
        // 这句咋不好使呢
        // document.getElementById("text").innerHTML = ""
    }
}
function shanchu() {
    let zhengwen = document.querySelectorAll(".zhengwen")
    zhengwen[19].style.display = "none"
    let riqi = document.querySelectorAll(".riqi")
    riqi[19].style.display = "none"

}



