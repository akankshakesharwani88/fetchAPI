import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resonse) => {
        return resonse.json();
      })
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      {user?.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <h4>{item.body}</h4>
          </div>
        );
      })}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
