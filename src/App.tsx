import Profile from "./Components/Profile";

const imageInfo = [
  {
    id:1,
    imageUrl :"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg",
    altInfo :"Katherine Johnson",
    isPicked:true
  },
  {
    id:2,
    imageUrl :"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg",
    altInfo :"Katherine Johnson",
    isPicked:false
  },
  {
    id:3,
    imageUrl :"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg",
    altInfo : "Katherine Johnson",
    isPicked:true
  },
];

const App = () => {
  return (
    <>
      <h1>Amazing scientists</h1>
      <Profile imageInfo={imageInfo} />
      
    </>
  );
};

export default App;
