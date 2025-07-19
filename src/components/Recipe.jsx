import ReactMarkdown from 'react-markdown'

function Recipe(props) {
    return (
        <section className='recipe-format'>
            <h2>Chef Cerdan Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

export default Recipe