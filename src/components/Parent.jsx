import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="parent">
      <h1>Employee Details</h1>

      <div className="card-container">
        <Child name="Bhargavi" email="bhargavi@gmail.com" role="Frontend Developer" gender="female"  image="https://t3.ftcdn.net/jpg/12/21/27/40/360_F_1221274069_yCJlveuBYWxe5hgjbKVCrfViVqFYKtT7.jpg"/>
        <Child name="Ravi" email="ravi@gmail.com" role="Backend Developer" gender="male" image="https://img.freepik.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79606.jpg " />
        <Child name="Sneha" email="sneha@gmail.com" role="UI Designer" gender="female" image="https://t3.ftcdn.net/jpg/09/37/59/62/360_F_937596222_zqhh3LZmhzaHALnSNXzCbvjg291a8DdS.jpg"/>
        <Child name="Arjun" email="arjun@gmail.com" role="Full Stack Developer" gender="male" image="https://img.freepik.com/premium-photo/adorable-male-manager-character-cute-boy-supervisor-illustration-cartoon-office-manager-young-pro_980716-79632.jpg"/>
        <Child name="Priya" email="priya@gmail.com" role="QA Engineer" gender="female" image="https://t4.ftcdn.net/jpg/14/98/97/53/360_F_1498975393_R710pYeM31vZVMzWg4F5ZUo7n3baOM5m.jpg"/>
      </div>
    </div>
  );
}

export default Parent;