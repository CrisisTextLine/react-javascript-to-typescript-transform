export function Hello({ message }) {
  return <div>hello {message}</div>
}

Hello.propTypes = {
  message: PropTypes.string,
}
