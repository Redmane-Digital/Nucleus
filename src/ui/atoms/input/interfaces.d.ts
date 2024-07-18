interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required: boolean;
    type: 'text' | 'password' | 'email' | 'number';
    value?: string;
}