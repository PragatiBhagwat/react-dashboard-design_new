import React from 'react'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import ContentHeader  from './components/ContentHeader';
import './App.css';

const data=[
  { All:"  ", Architecture:"Name",Interior:" Latest Versions", Structural:"discipline",MEP:"Last Updated ",Others:" Status",SortBy:"Send By", Filter:"Previous Versions"},
  { All:"download ", Architecture:"proposed site plans",Interior:" R2", Structural:"Architectural",MEP:"29-05-2024 ",Others:" Approved",SortBy:"Siddharth Nahta", Filter:"R1,R0"},
  { All:"download ", Architecture:"ground floor plan",Interior:" R1", Structural:"Architectural",MEP:"30-06-2024 ",Others:" Approved",SortBy:"Siddharth Nahta", Filter:"R1,R0"},
  { All:"download ", Architecture:"first floor plan",Interior:" R1", Structural:"Architectural",MEP:"15-06-2024 ",Others:"On-Hold",SortBy:"Siddharth Nahta", Filter:"R1,R0"}
]

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">  
      <Content />
      <Profile />
    
      <table border="1" align="center">
        <thead>
         <tr>
          <th>All</th>
          <th>Architecture</th>
          <th>Interior</th>
          <th>Structural</th>
          <th>MEP</th>
          <th>Others</th>
          <th>SortBy</th>
          <th>Filter</th>

         </tr>
         </thead>
        
        <tbody>
        {
          data.map((value,key)=>{
          return (
            <tr key={key}>
            <td>{value.All}</td>
            <td>{value.Architecture}</td>
            <td>{value.Interior}</td>
            <td>{value.Structural}</td>
            <td>{value.MEP}</td>
            <td>{value.Others}</td>
            <td>{value.SortBy}</td>
            <td>{value.Filter}</td>
            </tr>
          )

          })
        }
        </tbody>
        
      </table>

      
      </div>
      </div>
  );
};

export default App