import "./Star.css"
interface StarProps{
  number:number;
}

export const Star = (props:StarProps) => {
  const stars = []
  for(let i = 0;i<props.number;i++){
   stars.push(
    <span
      key={i}
      className= "star" 
      style={{
        top: `${(Math.random())* 100}%`,
        left: `${(Math.random())* 100}%`,
        animationDelay: Math.random() * 0.8 + "s",
        animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
      }}
    ></span>
   ) 
  }
return stars  
};