// import logo from './logo.svg';
//import './App.css';
// in cases of CRA, Vite 
import { useState } from 'react';
// in case of CDN
// const {useState} = React;
function App() {
    const _mode = useState('Welcome');
    const mode=_mode[0];
    const setMode = _mode[1];
    
    console.log('_mode',_mode);
  return (
    // App.js
    // const {변수, 함수} = useState(초기값);
    function App() {
            const mode = 'WELCOME';
            const topics = [
                { id: 1, title: 'html', body: 'html is ...' },
                { id: 2, title: 'css', body: 'css is ...' },
                { id: 3, title: 'javascript', body: 'javascript is ...' }
            ];

            let content = null;
            // 제어문
            if (mode === 'WELCOME') {
                content = <Article title="Welcome" body="Hello, Web"></Article>
            } else if (mode === 'READ') {
                
            }

            return (
                <div>
                    <Header subject="Web" onChangeMode={()=>{
                        alert('header');
                    }}></Header>
                    <Nav topics={topics} onChangeMode={(id)=>{
                        alert(id);
                    }} />
                    <Article title="Welcome" body="Hello, WEB" />
                </div>
            );

        // Header
        function Header(props) {
            return (
                <header>
                    <h1>
                        <a href="/" onClick={e=>{
                            e.preventDefault();
                            props.onChangeMode();
                        }}>{props.subject}</a>
                    </h1>
                </header>
            );
        }

        // Nav 컴포넌트
        function Nav(props) {
            const lis = [];
            for (let i=0; i<props.topics.length; i++){
                let t = props.topics[i];
                lis.push(<li key={t.id}><a id={t.id} href={"/read/" + t.id} onClick={event=>{
                    event.preventDefault();
                    console.log(event.target);
                    props.onChangeMode(event.target.id);
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

        // Article
        function Article(props) {
            return (
                <article>
                    <h2>{props.title}</h2>
                    {props.body}
                </article>
            );
        }


export default App;
