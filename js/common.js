'use strict'
var links = document.querySelectorAll('.nav__link'),
    tabs = document.querySelectorAll('.tab'),
    close = document.querySelectorAll('.block__close'),
    descriptionBlock = document.querySelector('.description-block'),
    description = document.querySelectorAll('.description'),
    descriptionTitle = document.querySelector('.description-block__title'),
    descriptionText = document.querySelector('.description-block__text'),
    technologies = document.querySelector('.technologies');

//Remove active classes of blocks and links    
function delActiveClass(){
  for(var i = 0; i < links.length; i++){
    descriptionBlock.classList.add('description-block_notActive');
    links[i].classList.remove('nav__link_active');
    tabs[i].classList.add('notActive-tab');
  }
}

//Generates tabs for further navigation through them
(function addDataAttr(){
  for(var i = 0; i < links.length; i++){
    links[i].setAttribute('data-tab', i);
  }
})();

//When you click on "X" closes the open block
Array.prototype.forEach.call(close,function(item){
  item.addEventListener('click', function(){
    delActiveClass();
    tabs[0].classList.remove('notActive-tab');
    links[0].classList.add('nav__link_active');
  });
});

//Opening blocks by links
Array.prototype.forEach.call(links,function(item){
  item.addEventListener('click', function(){
    var tab = this.getAttribute('data-tab');
    delActiveClass()
    tabs[tab].classList.remove('notActive-tab');
    this.classList.add('nav__link_active');
  });
});

//Opening a work description
Array.prototype.forEach.call(description,function(item){
  item.addEventListener('click', function(e){
    e.preventDefault();

    delActiveClass();
    descriptionBlock.classList.remove('description-block_notActive');

    technologies.innerHTML = '';

    var name = this.getAttribute('data-name').toLowerCase();
    var project = data[name];
    var title = project.title;
    var text = project.text;

    descriptionTitle.innerHTML = title;
    descriptionText.innerHTML = text;

    for(var i = 0; i < project.tags.length; i++){
      var li = document.createElement('li');
      li.className = "technologies__item";
      li.innerHTML = project.tags[i];
      technologies.appendChild(li);
    }
  });
});



