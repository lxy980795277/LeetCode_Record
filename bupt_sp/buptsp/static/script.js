let title = document.querySelectorAll(".chat-list-header");
let totalHeight = 0;

for (let i = 0; i < title.length; i++) {
  let totalHeight = 0;
  title[i].addEventListener("click", function () {
    let result = this.nextElementSibling;
    let activeSibling = this.nextElementSibling.classList.contains('active');
    this.classList.toggle('active');
    result.classList.toggle("active");
    if (!activeSibling) {
      for (i = 0; i < result.children.length; i++) {
        totalHeight = totalHeight + result.children[i].scrollHeight + 40;
      }
    } else {
      totalHeight = 0;
    }
    result.style.maxHeight = totalHeight + "px";
  });
}

const themeColors = document.querySelectorAll('.theme-color');

themeColors.forEach(themeColor => {
  themeColor.addEventListener('click', e => {
    themeColors.forEach(c => c.classList.remove('active'));
    const theme = themeColor.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    themeColor.classList.add('active');
  });
});

function btn() {
  var container = document.getElementById("bupt");
  var div1 = document.createElement("div");
  div1.setAttribute("class","message-wrapper reverse")
  var div2 = document.createElement("div");
  div2.setAttribute("class","message-box-wrapper");
  var div3 = document.createElement("div");
  div3.setAttribute("class","message-box");
  var text = document.createTextNode(document.getElementById('textinput').value);
  var message = document.getElementById('textinput').value;
  document.getElementById('textinput').value='';
  var img = document.createElement("img");
  img.setAttribute("class","message-pp");
  img.setAttribute("alt","profile-pic");
  img.src="/static/1.jpg";
  container.appendChild(div1);
  div1.appendChild(img);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(text);
  data_tmp={"message":message};
  $.post('/buptsp', data_tmp, function(obj){
    console.log(obj["answer"]);
    var div4 = document.createElement("div");
    div4.setAttribute("class","message-wrapper")
    var div5 = document.createElement("div");
    div5.setAttribute("class","message-box-wrapper");
    var div6 = document.createElement("div");
    div6.setAttribute("class","message-box");
    var img = document.createElement("img");
    img.setAttribute("class","message-pp");
    img.setAttribute("alt","profile-pic");
    img.src="/static/2.jpg";
    container.appendChild(div4);
    div4.appendChild(img);
    div4.appendChild(div5);
    div5.appendChild(div6);
    var text1 = document.createTextNode(obj["answer"]);
    div6.appendChild(text1);
    if(container.scrollHeight > container.clientHeight) {
    //设置滚动条到最底部
      container.scrollTop = container.scrollHeight;
    }
  },"json")
  
}