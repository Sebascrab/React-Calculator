import "./button.css"

export const Button = ({ symbol, color }) => {
    return (
        <div className="button-wrap" style={{ backgroundColor: color }}>{symbol}</div>
    )
};