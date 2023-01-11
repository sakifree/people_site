import { useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
    const person = useLoaderData()
    console.log(person)
        return (
            <div className="person">
                <h1>{person.name}</h1>
                <h2>{person.title}</h2>
                <img src={person.image} alt={person.name}/>

                <h2>Update {person.name}</h2>
                <Form action={`/update/${person._id}`} method="post">
                    <input defaultValue={person.name} type="input" name="name" placeholder="Person's Name"/>
                    <input defaultValue={person.image} type="input" name="image" placeholder="Person's Picture"/>
                    <input defaultValue={person.title} type="input" name="title" placeholder="Person's Title"/>
                    <input type="submit" value={`Update ${person.name}`}/>
                </Form>

                <h2>Delete {person.name}</h2>
                <Form action={`/delete/${person._id}`} method="post">
                    <input type="submit" value={`Delete ${person.name}`}/>
                </Form>
            </div>
        )
}

export default Show