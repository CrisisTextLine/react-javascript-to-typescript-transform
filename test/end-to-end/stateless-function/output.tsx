type HelloProps = {
    message?: string,
};
export const Hello: React.FC<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
