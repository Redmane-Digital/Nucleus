export default function Dialog({ children, open, ...props }: DialogProps) {
    return (
        <dialog {...props} open={open}>
            {children}
        </dialog>
    );
}