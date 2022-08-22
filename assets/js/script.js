function nextDiv() {
  var data_eng = document.getElementById("data_engg");
  var visual_ele = document.getElementById("visual");
  var market_ele = document.getElementById("market");
  var cloud_ele = document.getElementById("cloud");
  var data_eng_title = document.getElementById("data_engg_title");
  var visual_ele_title = document.getElementById("visual_title");
  var market_ele_title = document.getElementById("market_title");
  var cloud_ele_title = document.getElementById("cloud_title");

  if(data_eng.classList.contains("active")){
    data_eng.classList.remove("active");
    visual_ele.classList.add("active");
    data_eng_title.classList.remove("active");
    visual_ele_title.classList.add("active");
  }
  else if(visual_ele.classList.contains("active")){
    visual_ele.classList.remove("active");
    market_ele.classList.add("active");
    visual_ele_title.classList.remove("active");
    market_ele_title.classList.add("active");
  }
  else if(market_ele.classList.contains("active")){
    market_ele.classList.remove("active");
    cloud_ele.classList.add("active");
    market_ele_title.classList.remove("active");
    cloud_ele_title.classList.add("active");
  }
  else if(cloud_ele.classList.contains("active")){
    cloud_ele.classList.remove("active");
    data_eng.classList.add("active");
    cloud_ele_title.classList.remove("active");
    data_eng_title.classList.add("active");
  }
}

function prevDiv() {
  var data_eng = document.getElementById("data_engg");
  var visual_ele = document.getElementById("visual");
  var market_ele = document.getElementById("market");
  var cloud_ele = document.getElementById("cloud");
  var data_eng_title = document.getElementById("data_engg_title");
  var visual_ele_title = document.getElementById("visual_title");
  var market_ele_title = document.getElementById("market_title");
  var cloud_ele_title = document.getElementById("cloud_title");

  if(data_eng.classList.contains("active")){
    data_eng.classList.remove("active");
    cloud_ele.classList.add("active");
    data_eng_title.classList.remove("active");
    cloud_ele_title.classList.add("active");
  }
  else if(visual_ele.classList.contains("active")){
    visual_ele.classList.remove("active");
    data_eng.classList.add("active");
    visual_ele_title.classList.remove("active");
    data_eng_title.classList.add("active");
  }
  else if(market_ele.classList.contains("active")){
    market_ele.classList.remove("active");
    visual_ele.classList.add("active");
    market_ele_title.classList.remove("active");
    visual_ele_title.classList.add("active");
  }
  else if(cloud_ele.classList.contains("active")){
    cloud_ele.classList.remove("active");
    market_ele.classList.add("active");
    cloud_ele_title.classList.remove("active");
    market_ele_title.classList.add("active");
  }
}

function dataengg(){
  var ele = document.getElementById("data-content");
  ele.style.display = "block";
}

function dataclose(){
  var ele = document.getElementById("data-content");
  ele.style.display = "none";
}

function validate() {
  var name = document.getElementById('Name');
  var email = document.getElementById('Email');
  if (!name.value) {
    name.classList.add('error');
    setTimeout(function() {
      name.classList.remove('error');
    }, 300);
  }
  if (!email.value) {
    email.classList.add('error');
    setTimeout(function() {
      email.classList.remove('error');
    }, 300);
  }
}

function resshow(){
  var ele = document.getElementById("resshow");
  if(ele.classList.contains("show")){
    ele.classList.remove('show');
  }
  else{
    ele.classList.add('show');
  }
  var ele1 = document.getElementById("resshow1");
  if(ele1.classList.contains("show")){
    ele1.classList.remove('show');
  }
  else{
    ele1.classList.add('show');
  }
  var ele2 = document.getElementById("resshow2");
  if(ele2.classList.contains("show")){
    ele2.classList.remove('show');
  }
  else{
    ele2.classList.add('show');
  }
}