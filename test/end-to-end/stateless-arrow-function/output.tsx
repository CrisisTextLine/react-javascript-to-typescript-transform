type HelloProps = {
    message?: string,
};
const Hello: React.FC<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
