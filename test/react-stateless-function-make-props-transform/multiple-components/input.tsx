const Hello = ({ message }) => {
  return <div>hello {message}</div>
};

function Hey({ name }) {
  return <div>hey, {name}</div>
}

Hey.propTypes = {
  name: PropTypes.string.isRequired,
}

Hello.propTypes = {
  message: PropTypes.string,
}
