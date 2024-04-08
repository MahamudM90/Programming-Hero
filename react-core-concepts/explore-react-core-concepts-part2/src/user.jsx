export default function User({user}){
    console.log(user);
    const {name}= user;
    const mystyle = {
        color: 'white',
        backgroundColor: "#130F0E",
        padding: "10px",
        fontFamily: "Arial",
        margin: '20px',
        borderRadius: '5px'
      };
    return(
        <div style={mystyle}>
        <h5>{name}</h5>
        <h6>{user.address.city}</h6>
        
        </div>
    )
}