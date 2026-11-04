const PageIntro = (props) => {
    return (
        <>
            <div className="pageIntro">
                <div>
                    <p>{props.title}</p>
                    <h1>{props.heading}</h1>
                    <p>{props.description}</p>
                </div>
                
                <div>
                    <button><i className="fa fa-plus"></i> {props.button}</button>
                </div>
            </div>
        </>
    )
}

export default PageIntro