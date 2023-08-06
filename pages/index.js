function Home() {
  return (
    <h1>
      <a href="https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=$CLIENT_ID&redirect_uri=$REDIRECT_URL">
        Logar no ML
      </a>
    </h1>
  );
}

export default Home;
