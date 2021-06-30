import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
  color: wheat;

  background-color: #82c0cc;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
export const Description = styled.h4`
  text-align: center;
  color: wheat;
`;

export const CoverImg = styled.img`
  width: 1586px;
  height: 700px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const List = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: space-around;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

export const DeleteButtonStyled = styled.button`
  background-color: green;
`;

export const Div = styled.div`
  margin-top: 10px;
  margin-bottom: 70px;
`;

export const Logo = styled(Link)`
  padding: 5px;
  background-color: limegreen;
  background-image: url(https://www.intel.com/content/dam/www/public/us/en/images/iot/RWD/new-york-city-skyline-sunny-aerial-rwd.jpg.rendition.intel.web.864.486.jpg);
`;

export const NavProducts = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
`;

export const UpdateButtonStyled = styled(Link)``;

export const Dlink = styled(Link)`
  text-decoration: none;
  font-family: cursive;
  color: #f8961e;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(6px + 2vmin);
`;
export const Titled = styled.h2`
  margin-top: 40px;
  color: #ffd60a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Body = styled.div`
  background-image: url(https://www.topbest7.in/wp-content/uploads/2020/11/cutting-board-925544_1280-1-1.jpg);
  height: 1300px;
`;

export const H3 = styled.h3`
  color: #ffd60a;
  font-family: cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Clink = styled(Link)`
  text-decoration: none;
  font-family: cursive;
  color: #ffd60a;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(6px + 2vmin);
`;
