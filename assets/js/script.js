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
  document.getElementById("data-content").style.display = "block";
}

function dataclose(){
  document.getElementById("data-content").style.display = "none";
}