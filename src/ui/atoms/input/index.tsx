export default function Input({ type = 'text', placeholder = '', ...props }) {
    return (
        <input {...props} type={type} placeholder={placeholder} />
    );
}