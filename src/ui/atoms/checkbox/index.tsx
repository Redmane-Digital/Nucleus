export default function Checkbox({ label, checked = false, ...props }: CheckboxProps) {
    return (
        <label>
            <input {...props} type="checkbox" checked={checked} />
            {label}
        </label>
    );
}