    import React, { useState } from "react";
    import "./Todo.css";
    import { Button, Input, Tabs, Util } from "../../components";

      export const Todo = () => {
      const [items, setItems] = useState([]);
      const [tabs, setTabs] = useState("All");
      
      let todoList;
        
      const handleSubmit = (e) => {
        let task = e.target.value.trim();
        if(!task.length){
          return;
        }
        if (!e.target.value)
         return ;
        if (e.key === "Enter" ) {
          let todoItems = {
            id: Date.now(),
            name: task,
            status: false,
          };

          if (!items.length) {
            setItems([todoItems]);
          }
          else {
            setItems([...items, todoItems]);
          }
          e.target.value = "";
        }
      };
      const handleTab = (selectedTab) => {
        setTabs(selectedTab);
      };

      const handleCheckboxStatus = (Value) => {
        let Todo = items.map((todos) => {
          if (Value.id === todos.id) {
            return { ...todos, status: !todos.status };
          }
          return todos;
        });
        setItems(Todo);
      };

      const handleDeleteButton = (id) => {
        setItems(items.filter((item) => item.id !== id));
      };

      if (tabs === "Active") {
        todoList = items.filter((tododata) => tododata.status === false);
      } else if (tabs === "Completed") {
        todoList = items.filter((tododata) => tododata.status === true);
      } else {
        todoList = items.map((tododata) => tododata);
      }

      const handleRender = () => {
        return (
          <>
            {!todoList.length ? 
            <p className="nodata">No Data Found</p> :
            todoList.map((item) => (
              <div className="subContainer">
                <div className="subcontain1">
                  <Input
                    className="checkbox"
                    type="checkbox"
                    value={item.id}
                    onChange={() => handleCheckboxStatus(item)}
                    checked={item.status}
                  />
                  <p className="name">
                    {item.name.length > 100 ? <Util>{item.name}</Util> : item.name}
                  </p>
                  <Button
                    className="delete"
                    label="Delete"
                    onClick={() => handleDeleteButton(item.id)}
                  />
                </div>
              </div>
            ))}
          </>
        );
      };

      return (
        <div>
          <div className="mainContainer">
            <h1>To-Do App</h1>
            <h3>Add Task</h3>
            <Input
              type="text"
              className="inputfield"
              placeholder="Enter Task..."
              onKeyDown={handleSubmit}
             />
          </div>
          <Tabs
            tabList={["All", "Active", "Completed"]}
            activeTab={tabs}
            handleTab={handleTab}
          />
          {handleRender()}
        </div>
      );
    };