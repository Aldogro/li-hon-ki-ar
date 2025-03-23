import CommonContainer from "./components/CommonContainer";

const ErrorMessage = ({ error, resetErrorBoundary }) => {
  return (
    <CommonContainer>
      <h2 className="text-center">Algo salió mal:</h2>
      <p>Muestre el siguiente mensaje a los administradores del sitio:</p>
      <code className="error">{error.message}</code>
      <button className="mt-3 text-center" onClick={resetErrorBoundary}>Recargar la página</button>
    </CommonContainer>
  );
}

export default ErrorMessage;
