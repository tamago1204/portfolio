import React from 'react'
import reactImage from "../Images/c-original.svg";
import jsImage from "../Images/cplusplus-original.svg";
import firebaseImage from "../Images/csharp-original.svg";

const Blogpage = () => {
  return (

    
    <div className='container'><h1>ブログ</h1>
    
    <section id="skill">
      <div class="text-center">
        <h2 class="title">スキル</h2>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={reactImage} />
            <h4>C</h4>
            <p>学習に使いました</p>
          </div>
          <div class="col-md-4 services">
            <img src={jsImage} />
            <h4>c++</h4>
            <p>
              directx11のライブラリを制作するときに使っています
            </p>
          </div>
          <div class="col-md-4 services">
            <img src={firebaseImage} />
            <h4>C#</h4>
            <p>Unityで制作するときに使いました</p>
          </div>
        </div>
        <button type="button" class="btn btn-primary">
          スキル一覧
        </button>
      </div>
    </section>
    </div>
  )
}

export default Blogpage