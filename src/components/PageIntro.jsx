// import AddProperty from "./AddProperty"

const PageIntro = (props) => {
    return (
        <>
            <div className="pageIntro">
                <div>
                    <p style={{textTransform: "uppercase"}}>{props.title}</p>
                    <h1>{props.heading}</h1>
                    <p>{props.description}</p>
                </div>
                
                <div>
                    <button onClick={props.onAddProperty}><i className="fa fa-plus"></i> {props.button}</button>
                </div>
            </div>
        </>
    )
}

export default PageIntro