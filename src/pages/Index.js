import { Form, Link, useLoaderData } from "react-router-dom"

const Index = (props) => {
    const people = useLoaderData()

    return (
        <div>
            <h2>Create a Person</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Person's Name"/>
                <input type="input" name="image" placeholder="Person's Picture"/>
                <input type="input" name="title" placeholder="Person's Title"/>
                <input type="submit" value="Create Person"/>
            </Form>

            <h2>People</h2>    
            <div className="people-container">
            {people.map(person => (
                <div className="card" key={person._id}>
                    <Link to={`/${person._id}`}>
                        <h1>{person.name}</h1>
                    </Link>
                    <img src={person.image} alt={person.name}/>
                    <h3>{person.title}</h3>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Index