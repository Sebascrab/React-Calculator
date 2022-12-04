import "./input.css"


export const Input = ({ text, result }) => {
    return (
        <div className="input-wrap">
            <div className="results">
                <h1>{result}</h1>
            </div>
            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
}