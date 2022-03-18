import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";

function Header(params) {
  const headerStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
  `;

  console.log(params.onShowCart)
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={params.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="table of food"></img>
      </div>
    </>
  );
}

export default Header;
