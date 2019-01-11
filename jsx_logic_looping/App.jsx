import React, { Component } from 'react';
import ReactDOM from 'react-dom';




/*

HTML Examples:

<div class="profiles">

  <div class='profile'>
    <p class="alert">Warning! This person is dangerous.</p>
    <img src='http://placekitten.com/200/300'/>
    <h4>Baroness von Muahaha</h4>
    <p>No skills</p>
  </div>

  <div class='profile'>
    <img src='http://placekitten.com/200/300>
    <h4>Baroness von Muahaha</h4>
    <p>
      Skills:
      <ul>
        <li>Computer Hacking</li>
        <li>Karate</li>
      </ul>
    </p>
  </div>

</div> 
*/


const profiles = [];

const data = [
  {
    id: 1,
    imgSrc:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/191/medium_Joel.jpg",
    name: "Joel Shinness",
    skills: []
  },
  {
    id: 2,
    imgSrc:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/134/medium_JuanPhoto.png",
    name: "Juan Gonzales",
    skills: ["JavaScript", "HTML"],
    alert: "Devilishly Handsome"
  }
];

function makePro(data) {
  data.forEach(i => {

    const alert = i.alert && (<p classname="alert">{i.alert}</p>)

    const skills = i.skills && (i.skills.map((skill) => {
      return (<li>{skill}</li>)
    }))
    
    profiles.push(<div classname="profile">
      {alert}
      <img src="{i.imgSrc}"/>
      <h4>{i.name}</h4>
      <p>Skills
        <ul>{skills}</ul>
      </p>
    </div>)

  })
}

makePro(data)

const profilesExpr = <div className="profiles">{profiles}</div>;

const root = document.getElementById('root');

ReactDOM.render(profilesExpr, root);