import CreateShop from "../../components/CreateShop";

const NewShopPage = () => {
  return (
    <>
      <h1>Créer une boutique</h1>
      <CreateShop edit={false} data={{}} />
    </>
  );
};

export default NewShopPage;