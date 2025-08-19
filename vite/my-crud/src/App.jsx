import { useState } from 'react';


// Header 컴포넌트
// props -> {title: 'web}
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/" onClick={e => {
          e.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}

// Nav 컴포넌트
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={"/read/" + t.id} onClick={event => {
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

// Article 컴포넌트
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

// Create component
function Create() {
  return (
    <article>
      <h2>Create</h2>
      <form>
       <p> <input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

// App 컴포넌트
function App() {
  //const _mode = useState('WEL');
  //console.log('_mode', _mode);
  // const [변수, 함수] = useState(초기값);
  // const [변수, set변수] = useState('WELCOME');
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      // id는 Number(event.target.id)이다.
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title
        body = topics[i].body
      }
    }
    content = <Article title={title} body={body}></Article>

  } else if(mode === 'CREATE') {
    content = <Create></Create>
  }

  return (
    <div>
      <Header title="Web" onChangeMode={() => {
        setMode('WELCOME'); 
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {/* <Article title="Welcome" body="Hello, Web"></Article> */}
      {/* <Aticle title={title} body={body}></Aticle> */}
      {content}
      <a href="/create" onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;
