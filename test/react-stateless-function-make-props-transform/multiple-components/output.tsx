type HelloProps = {
    message?: string,
};
const Hello: React.FC<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
type HeyProps = {
    name: string,
};
const Hey: React.FC<HeyProps> = ({ name }) => {
    return <div>hey, {name}</div>;
};
Hey.propTypes = {
    name: React.PropTypes.string.isRequired,
};
Hello.propTypes = {
    message: React.PropTypes.string,
};
