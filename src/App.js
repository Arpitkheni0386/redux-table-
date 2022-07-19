/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { addTodo, deletelist, Removetodo } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const list = useSelector((state) => state.Todolist.list);
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [city, setcity] = useState();
  const [itemId, setItemId] = useState("");

  const listadd = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setname(e.target.value);
  };
  const ageadd = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setage(e.target.value);
  };

  const cityadd = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setcity(e.target.value);
  };

  const editlist = (item) => {
    // console.log(item.id)
    setItemId(item.id);
    setname(item.name);
    setage(item.age);
    setcity(item.city);
  };

  const savebtn = () => {
    // console.log(itemId)
    if (itemId) {
      const newdata = [];
      list.map((item) => {
        // new data add
        if (item.id === itemId) {
          console.log(itemId);
          console.log({ name, age, city, id: itemId });
          newdata.push({ name, age, city, id: itemId });
        } else {
          // old data add`
          console.log(item);
          newdata.push(item);
        }
      });
      // console.log(data)
      dispatch(addTodo(newdata));
      setItemId("");
      setname("");
      setage("");
      setcity("");
    } else {
      // console.log(...list)
      dispatch(addTodo([...list, { name, age, city, id: Date.now() }]));
      setname("");
      setage("");
      setcity("");
    }
  };

  const deletedata = (item) => {
    dispatch(deletelist(item.id));
  };

  const deletealldata = () => {
    dispatch(Removetodo());
  };

  return (
    <div className="App">
      <labal htmlFor="FirstName">FirstName : </labal>
      <input type="text" name="FirstName" value={name} onChange={listadd} />
      <br></br>
      <br></br>
      <labal htmlFor="Age">Age : </labal>
      <input type="number" name="Age" value={age} onChange={ageadd} />
      <br></br>
      <br></br>
      <labal htmlFor="CityName">CityName : </labal>
      <input type="text" name="CityName" value={city} onChange={cityadd} />
      <br></br>
      <br></br>
      <button type="submit" onClick={() => savebtn()}>
        {" "}
        Save{" "}
      </button>
      <br></br>
      <br></br>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Your Name</th>
              <th> Age </th>
              <th>City</th>
              <th> Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                {/* <td><button onClick={() => dispatch(deletelist(item.id))}>Delete</button></td> */}
                <td>
                  <button onClick={() => deletedata(item)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => editlist(item)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
      <div>
        {/* <button onClick={() => dispatch(Removetodo())}>Delete All</button> */}
        <button onClick={() => deletealldata()}>Delete All</button>
      </div>
    </div>
  );
}

export default App;
