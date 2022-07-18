import NavBar from "./NavBar";

interface ILayoutProps {
    children: React.ReactNode;
  }

export default function Layout({children}: ILayoutProps){ //children이란 react.js가 제공하는 prop인데 하나의 component를 또 다른 component안에 넣을때 쓸 수 있다.
    return(
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}