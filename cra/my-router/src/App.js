import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

const contents= [
  {id:1, title:'HTML', description: 'HTML is ...'},
  {id:2, title:'JS', description: 'JS is ...'},
  {id:3, title:'REACT', description: 'REACT is ...'},
]
function Topic() {
  const params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };
  for(let i=0; i<contents.length; i++) {
    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    } 
  }
  console.log(params);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics(){
  const lis =[];
  for (let i=0; i<contents.length; i++) {
    lis.push(<li key={contents[i].id}><NavLink to={"/topics/" +contents[i].id}>{contents[i].title}
    </NavLink></li>);
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />} />
      </Routes>
    </div>
  );
}
function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Hello! Dear</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics/*">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/abcd">ABCD</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={'Not Found'} />
      </Routes>

      {/* <Home></Home>
      <Topics></Topics>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
