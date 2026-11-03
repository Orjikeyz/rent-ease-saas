const PageIntro = (props) => {
    return (
        <>
            <p>{props.title}</p>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            <button><i className="fa fa-plus"></i> {props.button}</button>
        </>
    )
}

export default PageIntro