const cards = Array.from(document.querySelectorAll('.hover-card'));
const screenWidth = window.innerWidth;
const props = {
  perspective: '500px',
  delta: 15,
  cardWidth: cards[0].clientWidth,
  cardHeight: cards[0].clientHeight,
}

if (screenWidth > 1140) {
  props.delta = 15
}else if(screenWidth < 1140 && screenWidth > 1040 ){
  props.delta = 10
}else if(screenWidth < 1040 && screenWidth > 430){
  props.delta = 25
}else if(screenWidth < 430){
  props.delta = 28
}

const midWidth = props.cardWidth / 2;
const midHeight = props.cardHeight / 2;

for (const card of cards) {
  card.addEventListener('mousemove', mouseOverCard);
  card.addEventListener('mouseleave', mouseLeftCard);
}

function mouseOverCard(e) {
console.log(screenWidth);
  const cursorX = e.pageX - this.offsetLeft; 
  const cursorY = e.pageY - this.offsetTop;
  const cursCenterX = midWidth - cursorX;
  const cursCenterY = midHeight - cursorY;

  

Object.assign(this.style, {
    transform: `perspective(${props.perspective}) rotateX(${cursCenterY / props.delta}deg) rotateY(${-cursCenterX / props.delta}deg)`
  });
  this.classList.remove('mouse-out');
}
function mouseLeftCard() {
  this.classList.add('mouse-out');
}