import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createShop, updateShop } from "../../setup/services/shop.service";

const CreateShop = ({ data, edit, setEditShop }) => {
  const navigate = useNavigate();
  const [shop, setShop] = useState({
    name: data?.name || "",
    address: data?.address || "",
    logo: data?.logo || "",
    password: data?.password || "",
  });

  const onChangeShop = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };

  const handleCreateShop = (e) => {
    e.preventDefault();
    if (edit) {
      updateShop(data._id, shop)
        .then((data) => {
          setEditShop(true);
          console.log(shop);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createShop(shop)
        .then((data) => {
          navigate(`/boutique/${data._id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
  <></>
  );
};

export default CreateShop;