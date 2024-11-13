interface ButtonProps {
    text: string;
}

export const Button = ({ text }: ButtonProps) => {
    return (
        <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {text}
        </button>
    );
};