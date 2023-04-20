import pic from "./bizons.jpg"
export default function HomePage(props){
    return(
        <div className="home">
            <h1>Welcome to our National Parks app!<br/> </h1>
            <p>Our app lets you explore all the amazing national parks in the United States. With our search feature, you can easily find the park you're looking for and discover all the incredible things it has to offer. From hiking trails and campgrounds to historic landmarks and breathtaking scenery, our app provides you with all the information you need to plan your perfect national park adventure. So whether you're a seasoned explorer or a first-time visitor, we invite you to dive in and discover the beauty and wonder of America's national parks.</p>
            <img className = "bizons" src={pic} alt="Bisons at a National Park" style={{width: "50%", height: "auto"}}/>
        </div>
    )
}