import "./Meteor.css"
interface MeteorProps{
  number:number;
}
export const Meteor = (props:MeteorProps) => {
  const meteors = []
  for(let i = 0;i<props.number;i++){
   meteors.push(
    <span
      key={i}
      className= "meteor" 
      style={{
        top: Math.random() * 50 + "%",
        left: Math.random() * 100 + "%",
        animationDelay: Math.random() * 0.6 + 0.2 + "s",
        animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
      }}
    ></span>
   ) 
  }
return meteors  
};