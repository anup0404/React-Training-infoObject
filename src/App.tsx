import ChatApp from "./Components/Day2/ChatApp";
import Chai from "./Components/Day2/Chai";
import Counter from "./Components/Day2/Counter";
import Event from "./Components/Day2/Event";
import Profile from "./Components/Day1/Profile";
import UpdateObject from "./Components/Day2/UpdateObject";
import PointerMove from "./Components/Day2/PointerMove";
import AddingToArray from "./Components/Day3/AddingRemovingToArray";
import TransformingArray from "./Components/Day3/TransformingArray";
import ReplacingItem from "./Components/Day3/ReplacingItem";
import InsertingIntoArray from "./Components/Day3/InsertingIntoArray";
import Reducer from "./Components/Day5/Reducer";
import Login from "./Components/Day6/Login";
import Profile1 from "./Components/Day6/Profile1";

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
      <h1>Day 1</h1>
      <div>
        <h1>Amazing scientists</h1>
        <Profile imageInfo={imageInfo} />
      </div>

      <h1>Day 2</h1>
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
        <ChatApp />
      </div>

      <div>
        <h1>Counter with state management</h1>
        <Counter />
      </div>

      <div>
        <h1>Updating objects in state </h1>
        <UpdateObject />
      </div>

      <div>
        <h1>Pointer Move</h1>
        <PointerMove />
      </div>

      <h1>Day 3</h1>
      <div>
        <h1>Adding to an array & Removing from an array </h1>
        <AddingToArray />
      </div>

      <div>
        <h1>Transforming an array</h1>
        <TransformingArray />
      </div>

      <div>
        <h1>Replacing items in an array</h1>
        <ReplacingItem />
      </div>

      <div>
        <h1>Inserting into an array</h1>
        <InsertingIntoArray />
      </div>

      <h1>Day 5</h1>
      <div>
        <h1>Extracting State Logic into a Reducer</h1>
        <Reducer />
      </div>

      <h1>Day 6</h1>
      <div>
        <h1>Context api</h1>
        <Login/>
        <Profile1/>
      </div>
    </>
  );
};

export default App;
