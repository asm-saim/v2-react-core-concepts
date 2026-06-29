export default function Friend({ friend }) {
    const { name, email, phone, website } =  friend 
    console.log(friend)
    return (
        <div className="universal">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}