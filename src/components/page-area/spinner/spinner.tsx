import "./spinner.css";

interface SpinnerProps {
    text?: string;
}

export function Spinner({ text = "טוען..." }: SpinnerProps) {
    return (
        <div className="spinner-wrapper" role="status">
            <span className="spinner" />
            <span>{text}</span>
        </div>
    );
}
