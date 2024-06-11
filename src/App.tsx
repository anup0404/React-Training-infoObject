import ChatApp from "./Components/Day2/ChatApp";
import Chai from "./Components/Day2/Chai";
import Counter from "./Components/Day2/Counter";
import Event from "./Components/Day2/Event";
import Profile from "./Components/Day1/Profile";
import UpdateObject from "./Components/Day2/UpdateObject";
import PointerMove from "./Components/Day2/PointerMove";

const imageInfo = [
  {
    id: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg",
    altInfo: "Katherine Johnson",
    isPicked: true,
    list: [
      "Creola Katherine Johnson: mathematician",
      "Mario José Molina-Pasquel Henríquez: chemist",
      "Mohammad Abdus Salam: physicist",
      "Percy Lavon Julian: chemist",
      "Subrahmanyan Chandrasekhar: astrophysicist",
    ],
  },
  {
    id: 2,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg",
    altInfo: "Katherine Johnson",
    isPicked: false,
    list: [
      "Improve the videophone",
      "Prepare aeronautics lectures",
      "Work on the alcohol-fuelled engine ",
    ],
  },
  {
    id: 3,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg",
    altInfo: "Katherine Johnson",
    isPicked: true,
    list: [
      "Creola Katherine Johnson: mathematician",
      "Mario José Molina-Pasquel Henríquez: chemist",
    ],
  },
];

const App = () => {
  return (
    <>
      <div>
        <h1>Amazing scientists</h1>
        <Profile imageInfo={imageInfo} />
      </div>
      

      <div>
        <h1>Pure Component</h1>
        <Chai />
      </div>


      <div>
        <h1>Responding to events </h1>
        <Event handleClick={() => alert("playing")} />
        <Event handleClick={() => alert("uploading")} />
      </div>


      <div>
        <h1>State as a snapshot </h1>
        <h2>Chat App</h2>
        <ChatApp/>
      </div>

      <div>
        <h1>Counter with state management</h1>
        <Counter/>
      </div>


      <div>
        <h1>Updating objects in state </h1>
       <UpdateObject/>
      </div>

      <div>
        <h1>Pointer Move</h1>
        <PointerMove/>
      </div>
    </>
  );
};

export default App;
