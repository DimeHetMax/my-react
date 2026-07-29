import "./App.css";

import { useEffect, useState } from "react";
// import Img from "../Img";
// import Title from "../Title";
// import Button from "../Button/Button";
// import ProductList from "../ProductList/ProductList";
// import Mailbox from "../Mailbox";
// import Book from "../Book";
// import Alert from "../Alert/Alert";
// import UserMenu from "../UserMenu/UserMenu";
// import ClickCounter from "../ClickCounter";
// import ObjectComponent from "../ObjectComponent";
// import Card from "../Card/Card";
// import OrderForm from "../OrderForm/OrderForm";
// import SearchForm from "../SearchForm/SearchForm";
// import ProductSearchForm from "../ProductSearchForm/ProductSearchForm";
// import ArticleList from "../ArticleList/ArticleList";
// import ProductElectronicList from "../ProductElectronicList/ProductElectronicList";
import Loader from "../Loader/Loader";
// import fetchArticle from "../../services/articleServices";
// import fetchProducts from "../../services/productServices";
// import type { Article } from "../../types/article";
// import type { Product } from "../../types/product";
import Form from "../Form/Form";
import FormCredentialDisplay from "../FormCredentialDisplay/FormCredentialDisplay";
import Logout from "../Logout/Logout";
import type { AuthUser, LoginCredentials } from "../../types/form";
import fetchLogin from "../../services/loginServices";
import fetchAuth from "../../services/authService";

const USER_DATA_KEY = import.meta.env.VITE_USER_DATA_KEY || "userData";

const readAccessTokenCookie = (): string | null => {
  const token = document.cookie
    .split("; ")
    .find((item) => item.startsWith("accessToken="))
    ?.split("=")[1];

  if (!token) {
    return null;
  }

  try {
    return decodeURIComponent(token);
  } catch (error) {
    console.error("Could not read accessToken cookie:", error);
    return null;
  }
};

const toAuthUser = ({
  email,
  firstName,
  lastName,
  gender,
  id,
  image,
  username,
}: AuthUser): AuthUser => ({
  email,
  firstName,
  lastName,
  gender,
  id,
  image,
  username,
});

// const getStoredArticles = (): Article[] => {
//   try {
//     const storedData = JSON.parse(
//       localStorage.getItem("data") ?? "[]",
//     ) as ApiArticle[];
//
//     return Array.isArray(storedData)
//       ? storedData.flatMap(normalizeArticle)
//       : [];
//   } catch {
//     return [];
//   }
// };

function App() {
  // const [isOn, setIsOn] = useState<boolean>(false);
  // const [userName, setUserName] = useState<string>(
  //   () => localStorage.getItem("user") ?? "",
  // );
  // const name: string = "Max";
  // const imgUrl: string =
  //   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=640";
  // const message: string = "Say Hello by the click!!";
  // const messageArr: string[] = [];
  // const [clicks, setClicks] = useState<number>(0);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [data, setData] = useState<Article[]>([]);
  // const [isArticleLoading, setIsArticleLoading] = useState(false);
  // const [articleError, setArticleError] = useState("");

  // const [products, setProducts] = useState<Product[]>([]);
  // const [isProductLoading, setIsProductLoading] = useState(false);
  // const [productError, setProductError] = useState("");
  const [accessToken, setAccessToken] = useState<string | null>(
    readAccessTokenCookie,
  );
  const [userData, setUserData] = useState<AuthUser | null>(() => {
    if (!accessToken) {
      return null;
    }

    const savedUser = localStorage.getItem(USER_DATA_KEY);

    if (!savedUser) {
      return null;
    }

    try {
      return toAuthUser(JSON.parse(savedUser) as AuthUser);
    } catch (error) {
      console.error("Could not read userData:", error);
      return null;
    }
  });
  const [userDataError, setUserDataError] = useState<string>("");
  const [isUserDataLoading, setIsUserDataLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  // }, [data]);
  // const toggleMessage = () => {
  //   setIsOpen(!isOpen);
  // };
  // const handleClicks = () => {
  //   setClicks((prevClick) => prevClick + 1);
  // };
  // const handleOrder = (data: string) => {
  //   console.log("Order received from:", data);
  //   if (data.length === 0) return;
  //   localStorage.setItem("user", data);
  //   setUserName(data);
  // };

  // const handleSearchForm = async (topic: string) => {
  //   try {
  //     setIsArticleLoading(true);
  //     setArticleError("");
  //     const response = await fetchArticle(topic);
  //     setData(response);
  //   } catch {
  //     setArticleError("Failed to load articles. Please try again.");
  //   } finally {
  //     setIsArticleLoading(false);
  //   }
  // };
  // const handleProductSearchForm = async (product: string) => {
  //   try {
  //     setIsProductLoading(true);
  //     setProductError("");
  //     const response =  await fetchProducts(product);
  //     setProducts(response)
  //   } catch (error) {
  //     setProductError("Failed to load products. Please try again.");
  //     console.log(error);
  //   } finally {
  //     setIsProductLoading(false);
  //   }
  // };
  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const checkAuth = async () => {
      try {
        const authenticatedUser = await fetchAuth(accessToken);
        const user = toAuthUser(authenticatedUser);

        setUserData(user);
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
      } catch (error) {
        console.error("Could not restore the session:", error);
        localStorage.removeItem(USER_DATA_KEY);
        document.cookie = "accessToken=; Path=/; Max-Age=0; SameSite=Lax";
        setAccessToken(null);
        setUserData(null);
        setUserDataError("Your session has expired. Please log in again.");
      }
    };

    void checkAuth();
  }, [accessToken]);

  const onSubmit = async (data: LoginCredentials) => {
    try {
      setIsUserDataLoading(true);
      setUserDataError("");
      const response = await fetchLogin(data);
      const user = toAuthUser(response);

      setUserData(user);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
      document.cookie = `accessToken=${encodeURIComponent(response.accessToken)}; Path=/; Max-Age=3600; SameSite=Lax`;
      setAccessToken(response.accessToken);
    } catch (error) {
      console.error("Login failed:", error);
      setUserDataError(
        error instanceof Error ? error.message : "Error LoginFetch",
      );
    } finally {
      setIsUserDataLoading(false);
    }
  };

  const handleLogoutClick = () => {
    localStorage.removeItem(USER_DATA_KEY);
    document.cookie = "accessToken=; Path=/; Max-Age=0; SameSite=Lax";
    setAccessToken(null);
    setUserData(null);
    setUserDataError("");
  };
  return (
    <div>
      {/* <Title name={name} /> */}
      {/* <Img imgUrl={imgUrl} /> */}
      {/* <Button message={message} onClick={() => setIsOn(!isOn)} /> */}
      {/* {!isOn ? <p>You didnt click yet</p> : <ProductList />} */}
      {/* <Mailbox username={name} messages={messageArr} /> */}
      {/* <Book /> */}
      {/* <div>
          <Alert />
          <Alert type="success" />
          <Alert type="error" />
        </div> */}
      {/* <UserMenu name={"Max"} /> */}
      {/* <ClickCounter value={clicks} onUpdateClick={handleClicks} /> */}
      {/* <ClickCounter value={clicks} onUpdateClick={handleClicks} /> */}

      {/* <button onClick={toggleMessage}>
          {isOpen ? "Hide message" : "Show message"}
        </button> */}

      {/* {isOpen && <p>🎉 Surprise! You toggled me.</p>} */}

      {/* <ObjectComponent /> */}
      {/* <OrderForm onSubmit={handleOrder} /> */}
      {/* <Card user={userName} /> */}
      {/* <SearchForm onSubmit={handleSearchForm} />
      {isArticleLoading && <Loader />}
      {articleError && <p>{articleError}</p>}
      {!isArticleLoading && !articleError && data.length > 0 && (
        <ArticleList articles={data} />
      )} */}

      {/* <ProductSearchForm onSubmit={handleProductSearchForm} />
      {isProductLoading && <Loader />}
      {productError && <p>{productError}</p>}
      {!isProductLoading && !productError && products.length > 0 && (<ProductElectronicList products={products}/>)} */}

      {!isUserDataLoading && !userDataError && userData ? (
        <Logout handleClick={handleLogoutClick} />
      ) : (
        <Form onSubmit={onSubmit} />
      )}
      {isUserDataLoading && <Loader />}
      {userDataError && <p>{userDataError}</p>}
      {!isUserDataLoading && !userDataError && userData && (
        <FormCredentialDisplay data={userData} />
      )}
    </div>
  );
}

export default App;
